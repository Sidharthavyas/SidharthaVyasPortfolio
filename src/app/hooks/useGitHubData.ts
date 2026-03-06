import { useState, useEffect } from "react";
import {
  githubStats as defaultStats,
  languageDistribution as defaultLanguages,
} from "../data/portfolio";

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  size: number;
}

interface GitHubEvent {
  type: string;
  created_at: string;
  payload?: { commits?: { sha: string }[] };
}

export interface GitHubStats {
  totalCommits: number;
  totalRepos: number;
  longestStreak: number;
  mostActiveYear: number | string;
  totalStars: number;
}

export interface LanguageItem {
  name: string;
  value: number;
  color: string;
}

export interface LiveRepo {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  language: string | null;
  lastPushed: string;
}

const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3b82f6",
  TypeScript: "#22d3ee",
  JavaScript: "#f59e0b",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C++": "#f34b7d",
  "C#": "#178600",
  Go: "#00ADD8",
  Rust: "#dea584",
  SQL: "#a78bfa",
  Shell: "#89e051",
  Dart: "#00B4AB",
  Kotlin: "#A97BFF",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Swift: "#F05138",
};

const CACHE_KEY = "gh_portfolio_data";
const CACHE_DURATION = 30 * 60 * 1000; // 30 min

function getCached() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_DURATION) return null;
    return data;
  } catch {
    return null;
  }
}

function setCache(data: any) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
  } catch {
    /* quota exceeded — ignore */
  }
}

export function useGitHubData(username = "Sidharthavyas") {
  const [stats, setStats] = useState<GitHubStats>({
    totalCommits: defaultStats.totalCommits,
    totalRepos: defaultStats.totalRepos,
    longestStreak: defaultStats.longestStreak,
    mostActiveYear: defaultStats.mostActiveYear,
    totalStars: 0,
  });
  const [languages, setLanguages] = useState<LanguageItem[]>(defaultLanguages);
  const [repos, setRepos] = useState<LiveRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      // Check cache first
      const cached = getCached();
      if (cached) {
        setStats(cached.stats);
        setLanguages(cached.languages);
        setRepos(cached.repos);
        setLoading(false);
        setIsLive(true);
        return;
      }

      try {
        // Fetch repos, events, AND real contribution data in parallel
        const [reposRes, eventsRes, contribRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`),
          fetch(`https://api.github.com/users/${username}/events?per_page=100`),
          fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`),
        ]);

        if (!reposRes.ok) throw new Error(`GitHub API ${reposRes.status}`);

        const reposData: GitHubRepo[] = await reposRes.json();
        const eventsData: GitHubEvent[] = eventsRes.ok ? await eventsRes.json() : [];

        // Parse contribution data (total + daily for streak)
        let totalContributions = defaultStats.totalCommits;
        let longestStreak = defaultStats.longestStreak;
        try {
          if (contribRes.ok) {
            const contribData = await contribRes.json();
            totalContributions = contribData.total?.lastYear || defaultStats.totalCommits;

            // Calculate longest streak from daily data
            if (contribData.contributions && contribData.contributions.length > 0) {
              let currentStreak = 0;
              let maxStreak = 0;
              for (const day of contribData.contributions) {
                if (day.count > 0) {
                  currentStreak++;
                  maxStreak = Math.max(maxStreak, currentStreak);
                } else {
                  currentStreak = 0;
                }
              }
              longestStreak = maxStreak;
            }
          }
        } catch {
          // Contribution API failed — use defaults
        }

        if (cancelled) return;

        // Filter out forks
        const ownRepos = reposData.filter((r) => !r.fork);

        // Compute total stars
        const totalStars = ownRepos.reduce((s, r) => s + r.stargazers_count, 0);

        // Compute language distribution
        const langCount: Record<string, number> = {};
        ownRepos.forEach((r) => {
          if (r.language) {
            langCount[r.language] = (langCount[r.language] || 0) + r.size;
          }
        });
        const totalSize = Object.values(langCount).reduce((a, b) => a + b, 0);
        const sortedLangs = Object.entries(langCount)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5);

        const langDistribution: LanguageItem[] = sortedLangs.map(([name, size]) => ({
          name,
          value: Math.round((size / totalSize) * 100),
          color: LANGUAGE_COLORS[name] || "#475569",
        }));

        // Ensure percentages sum to 100
        const sum = langDistribution.reduce((a, b) => a + b.value, 0);
        if (langDistribution.length > 0 && sum !== 100) {
          langDistribution[0].value += 100 - sum;
        }

        // Most active year from repos
        const yearCount: Record<number, number> = {};
        ownRepos.forEach((r) => {
          const year = new Date(r.pushed_at).getFullYear();
          yearCount[year] = (yearCount[year] || 0) + 1;
        });
        const mostActiveYear =
          Object.entries(yearCount).sort(([, a], [, b]) => b - a)[0]?.[0] ||
          defaultStats.mostActiveYear;

        // Build live repos list
        const liveRepos: LiveRepo[] = ownRepos
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
          .slice(0, 6)
          .map((r) => ({
            name: r.name,
            description: r.description,
            url: r.html_url,
            stars: r.stargazers_count,
            language: r.language,
            lastPushed: r.pushed_at,
          }));

        const newStats: GitHubStats = {
          totalCommits: totalContributions,
          totalRepos: ownRepos.length,
          longestStreak,
          mostActiveYear: Number(mostActiveYear),
          totalStars,
        };

        const result = { stats: newStats, languages: langDistribution, repos: liveRepos };
        setCache(result);

        setStats(newStats);
        setLanguages(langDistribution);
        setRepos(liveRepos);
        setIsLive(true);
      } catch (err: any) {
        if (!cancelled) {
          setError(err.message || "Failed to fetch GitHub data");
          // Keep defaults on error
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return { stats, languages, repos, loading, error, isLive };
}
