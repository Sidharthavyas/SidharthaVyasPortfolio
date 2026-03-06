import { useMemo } from "react";
import { motion } from "motion/react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Github, GitBranch, Flame, Calendar, Star, Loader2, WifiOff, Wifi } from "lucide-react";
import { COLORS, generateContributionData, projects } from "../data/portfolio";
import { useGitHubData } from "../hooks/useGitHubData";

const heatmapColors = [
  "rgba(34,211,238,0.06)",
  "rgba(34,211,238,0.2)",
  "rgba(34,211,238,0.45)",
  "rgba(34,211,238,0.7)",
  "rgba(34,211,238,0.95)",
];

const codeQualities = [
  { label: "Backend API architecture", tag: "FastAPI / Node.js / Express" },
  { label: "Real-time WebSocket systems", tag: "Socket.IO / Redis pub/sub" },
  { label: "SQL query optimization", tag: "PostgreSQL / SQL Server" },
  { label: "ML model integration", tag: "HuggingFace / Gemini API" },
  { label: "Production deployments", tag: "Docker / Vercel / Cloud" },
];

const featuredRepos = projects.filter((p) => ["cyberguard", "goalsocial", "nidsscrochet"].includes(p.id));

// Skeleton loading block
function SkeletonBlock({ width = "100%", height = 20 }: { width?: string | number; height?: number }) {
  return (
    <motion.div
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{
        width,
        height,
        borderRadius: 6,
        backgroundColor: "rgba(255,255,255,0.06)",
      }}
    />
  );
}

export function GitHubAnalytics() {
  const contributionData = useMemo(() => generateContributionData(), []);
  const { stats, languages, loading, isLive } = useGitHubData();

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: COLORS.bgCard2,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 8,
            padding: "8px 14px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <span style={{ color: COLORS.text, fontSize: 13 }}>
            {payload[0].name}: <strong style={{ color: COLORS.accent }}>{payload[0].value}%</strong>
          </span>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="activity" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 60 }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.12em",
              color: COLORS.accent,
              fontFamily: "JetBrains Mono, monospace",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            // Engineering Activity
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 700,
                color: COLORS.text,
                fontFamily: "Inter, sans-serif",
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Development Consistency
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Live indicator */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 10px",
                  borderRadius: 6,
                  backgroundColor: isLive ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${isLive ? "rgba(34,197,94,0.2)" : COLORS.border}`,
                  fontSize: 11,
                  fontFamily: "JetBrains Mono, monospace",
                  color: isLive ? "#22c55e" : COLORS.muted,
                }}
              >
                {loading ? (
                  <Loader2 size={11} style={{ animation: "spin 1s linear infinite" }} />
                ) : isLive ? (
                  <Wifi size={11} />
                ) : (
                  <WifiOff size={11} />
                )}
                {loading ? "fetching…" : isLive ? "live" : "cached"}
              </div>
              <a
                href="https://github.com/Sidharthavyas"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 8,
                  border: `1px solid ${COLORS.border}`,
                  color: COLORS.muted,
                  textDecoration: "none",
                  fontSize: 13,
                  fontFamily: "Inter, sans-serif",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = COLORS.accent;
                  e.currentTarget.style.borderColor = COLORS.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = COLORS.muted;
                  e.currentTarget.style.borderColor = COLORS.border;
                }}
              >
                <Github size={15} /> @Sidharthavyas
              </a>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 32,
          }}
          className="github-stats"
        >
          {[
            { icon: <GitBranch size={18} />, value: stats.totalCommits.toLocaleString(), label: "Contributions" },
            { icon: <Github size={18} />, value: stats.totalRepos, label: "Repositories" },
            { icon: <Flame size={18} />, value: `${stats.longestStreak}d`, label: "Longest Streak" },
            { icon: <Star size={18} />, value: stats.totalStars || stats.mostActiveYear, label: stats.totalStars ? "Total Stars" : "Most Active Year" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ borderColor: COLORS.borderHover }}
              style={{
                padding: "20px 24px",
                borderRadius: 12,
                border: `1px solid ${COLORS.border}`,
                backgroundColor: COLORS.bgCard,
                transition: "border-color 0.2s",
              }}
            >
              <div style={{ color: COLORS.accent, marginBottom: 12 }}>{stat.icon}</div>
              {loading ? (
                <SkeletonBlock width={60} height={28} />
              ) : (
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: COLORS.text,
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "-0.02em",
                    marginBottom: 4,
                  }}
                >
                  {stat.value}
                </div>
              )}
              <div style={{ fontSize: 12, color: COLORS.muted, fontFamily: "Inter, sans-serif", marginTop: loading ? 8 : 0 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contribution Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            padding: "28px 28px 24px",
            borderRadius: 16,
            border: `1px solid ${COLORS.border}`,
            backgroundColor: COLORS.bgCard,
            marginBottom: 32,
            overflow: "hidden",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <span style={{ color: COLORS.muted, fontSize: 13, fontFamily: "Inter, sans-serif" }}>
              Contribution activity — last 12 months
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: COLORS.muted, fontSize: 11, fontFamily: "Inter, sans-serif" }}>Less</span>
              {heatmapColors.map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 2,
                    backgroundColor: c,
                    border: `1px solid rgba(255,255,255,0.05)`,
                  }}
                />
              ))}
              <span style={{ color: COLORS.muted, fontSize: 11, fontFamily: "Inter, sans-serif" }}>More</span>
            </div>
          </div>

          <div style={{ overflowX: "auto" }} className="heatmap-container">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 3,
                minWidth: 680,
              }}
            >
              {contributionData.map((week, wIdx) => (
                <div
                  key={wIdx}
                  style={{ display: "flex", flexDirection: "column", gap: 3, flex: 1 }}
                >
                  {week.map((level, dIdx) => (
                    <div
                      key={`${wIdx}-${dIdx}`}
                      title={`Week ${wIdx + 1}, Day ${dIdx + 1}: ${level * 2} commits`}
                      style={{
                        width: "100%",
                        height: 10,
                        borderRadius: 2,
                        backgroundColor: heatmapColors[level],
                        border: `1px solid rgba(255,255,255,0.03)`,
                        cursor: "default",
                        transition: "transform 0.1s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Language Distribution + Code Quality */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }} className="github-bottom">
          {/* Pie chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{
              padding: 28,
              borderRadius: 16,
              border: `1px solid ${COLORS.border}`,
              backgroundColor: COLORS.bgCard,
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: COLORS.muted,
                fontFamily: "JetBrains Mono, monospace",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Language Distribution</span>
              {isLive && (
                <span style={{ fontSize: 9, color: "#22c55e", fontWeight: 400 }}>● from GitHub</span>
              )}
            </div>
            {loading ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "20px 0" }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <SkeletonBlock key={i} height={16} />
                ))}
              </div>
            ) : (
              <>
                <div style={{ height: 200 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={languages}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={85}
                        paddingAngle={3}
                        dataKey="value"
                        strokeWidth={0}
                      >
                        {languages.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
                  {languages.map((lang) => (
                    <div key={lang.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor: lang.color,
                          }}
                        />
                        <span style={{ color: COLORS.muted, fontSize: 13, fontFamily: "Inter, sans-serif" }}>
                          {lang.name}
                        </span>
                      </div>
                      <span style={{ color: COLORS.text, fontSize: 13, fontFamily: "JetBrains Mono, monospace" }}>
                        {lang.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </motion.div>

          {/* Code quality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.28 }}
            style={{
              padding: 28,
              borderRadius: 16,
              border: `1px solid ${COLORS.border}`,
              backgroundColor: COLORS.bgCard,
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: COLORS.muted,
                fontFamily: "JetBrains Mono, monospace",
                marginBottom: 20,
              }}
            >
              Technical Strengths
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {codeQualities.map((q, i) => (
                <motion.div
                  key={q.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    padding: "14px 16px",
                    borderRadius: 8,
                    border: `1px solid ${COLORS.border}`,
                    backgroundColor: COLORS.bgCard2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span style={{ color: COLORS.text, fontSize: 13, fontFamily: "Inter, sans-serif" }}>
                    {q.label}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: COLORS.accent,
                      fontFamily: "JetBrains Mono, monospace",
                      whiteSpace: "nowrap",
                      opacity: 0.8,
                    }}
                  >
                    {q.tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Featured Repos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: COLORS.muted,
              fontFamily: "JetBrains Mono, monospace",
              marginBottom: 16,
            }}
          >
            Featured Repositories
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }} className="github-repos">
            {featuredRepos.map((repo) => (
              <motion.a
                key={repo.id}
                href={repo.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, borderColor: COLORS.borderHover }}
                style={{
                  padding: "20px 22px",
                  borderRadius: 12,
                  border: `1px solid ${COLORS.border}`,
                  backgroundColor: COLORS.bgCard,
                  textDecoration: "none",
                  display: "block",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <Github size={16} color={COLORS.muted} />
                  <span
                    style={{
                      color: COLORS.accent,
                      fontSize: 14,
                      fontWeight: 600,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {repo.name}
                  </span>
                </div>
                <p
                  style={{
                    color: COLORS.muted,
                    fontSize: 13,
                    lineHeight: 1.6,
                    fontFamily: "Inter, sans-serif",
                    margin: "0 0 14px",
                  }}
                >
                  {repo.tagline}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {repo.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "2px 8px",
                        borderRadius: 4,
                        backgroundColor: COLORS.accentDim,
                        border: `1px solid rgba(34,211,238,0.1)`,
                        color: COLORS.accent,
                        fontSize: 11,
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Activity Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            marginTop: 32,
            padding: 28,
            borderRadius: 16,
            border: `1px solid ${COLORS.border}`,
            backgroundColor: COLORS.bgCard,
            borderLeft: `3px solid ${COLORS.accent}`,
          }}
        >
          <p
            style={{
              color: COLORS.muted,
              fontSize: 15,
              lineHeight: 1.75,
              fontFamily: "Inter, sans-serif",
              margin: "0 0 16px",
            }}
          >
            Sidhartha actively builds backend systems and full-stack applications. His repositories demonstrate experience with real-time platforms, scalable APIs, and AI-based applications.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Backend Architecture", "Distributed Systems", "Real-time Applications", "Production Deployments"].map(
              (tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "5px 12px",
                    borderRadius: 6,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.muted,
                    fontSize: 12,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* Keyframe for spinner */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}