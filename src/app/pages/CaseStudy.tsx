import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Target,
  Layers,
  Lightbulb,
  AlertTriangle,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { COLORS, projects, caseStudies } from "../data/portfolio";

const sectionConfig = [
  {
    key: "problem",
    icon: <Target size={18} />,
    title: "Problem Statement",
    color: "#fb7185",
  },
  {
    key: "architecture",
    icon: <Layers size={18} />,
    title: "Architecture Overview",
    color: "#3b82f6",
  },
  {
    key: "decisions",
    icon: <Lightbulb size={18} />,
    title: "Key Technical Decisions",
    color: "#f59e0b",
    isList: true,
  },
  {
    key: "challenges",
    icon: <AlertTriangle size={18} />,
    title: "Challenges Faced",
    color: "#a78bfa",
    isList: true,
  },
  {
    key: "impact",
    icon: <TrendingUp size={18} />,
    title: "Impact & Results",
    color: "#34d399",
    isList: true,
  },
];

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const cs = id ? caseStudies[id] : null;

  if (!project || !cs) {
    return (
      <div style={{ backgroundColor: COLORS.bg, minHeight: "100vh", color: COLORS.text }}>
        <Navigation />
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "160px 24px",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: COLORS.text, fontFamily: "Inter, sans-serif", marginBottom: 16 }}>
            Case study not found
          </h1>
          <Link to="/" style={{ color: COLORS.accent, fontFamily: "Inter, sans-serif" }}>
            ← Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  const csData = cs as Record<string, string | string[]>;

  return (
    <div
      style={{
        backgroundColor: COLORS.bg,
        color: COLORS.text,
        fontFamily: "Inter, sans-serif",
        minHeight: "100vh",
      }}
    >
      <Navigation />

      {/* Hero */}
      <section
        style={{
          padding: "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 300,
            background: "radial-gradient(ellipse, rgba(34,211,238,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: COLORS.muted,
                textDecoration: "none",
                fontSize: 14,
                fontFamily: "Inter, sans-serif",
                marginBottom: 40,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
            >
              <ArrowLeft size={15} />
              Back to portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Category + links */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
              <span
                style={{
                  padding: "4px 12px",
                  borderRadius: 6,
                  backgroundColor: COLORS.accentDim,
                  border: `1px solid rgba(34,211,238,0.15)`,
                  color: COLORS.accent,
                  fontSize: 12,
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                {project.category}
              </span>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: COLORS.muted,
                    fontSize: 13,
                    textDecoration: "none",
                    fontFamily: "Inter, sans-serif",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
                >
                  <Github size={14} /> View on GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: COLORS.muted,
                    fontSize: 13,
                    textDecoration: "none",
                    fontFamily: "Inter, sans-serif",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>

            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 700,
                color: COLORS.text,
                fontFamily: "Inter, sans-serif",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                margin: "0 0 16px",
              }}
            >
              {project.name}
            </h1>
            <p
              style={{
                color: COLORS.accent,
                fontSize: 18,
                fontFamily: "Inter, sans-serif",
                margin: "0 0 20px",
              }}
            >
              {project.tagline}
            </p>
            <p
              style={{
                color: COLORS.muted,
                fontSize: 16,
                lineHeight: 1.75,
                fontFamily: "Inter, sans-serif",
                margin: 0,
                maxWidth: 660,
              }}
            >
              {project.description}
            </p>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 28 }}
          >
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  padding: "5px 12px",
                  borderRadius: 6,
                  backgroundColor: COLORS.accentDim,
                  border: `1px solid rgba(34,211,238,0.12)`,
                  color: COLORS.accent,
                  fontSize: 13,
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: `1px solid ${COLORS.border}` }} />

      {/* Case study sections */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {sectionConfig.map((section, idx) => {
              const content = csData[section.key];
              if (!content) return null;
              const isList = section.isList && Array.isArray(content);

              return (
                <motion.div
                  key={section.key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: idx * 0.05 }}
                  style={{
                    padding: "28px 32px",
                    borderRadius: 16,
                    border: `1px solid ${COLORS.border}`,
                    backgroundColor: COLORS.bgCard,
                    borderLeft: `3px solid ${section.color}`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        backgroundColor: `${section.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: section.color,
                      }}
                    >
                      {section.icon}
                    </div>
                    <h2
                      style={{
                        color: COLORS.text,
                        fontSize: 18,
                        fontWeight: 600,
                        fontFamily: "Inter, sans-serif",
                        margin: 0,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {section.title}
                    </h2>
                  </div>

                  {isList ? (
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                      {(content as string[]).map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06 }}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 12,
                            color: COLORS.muted,
                            fontSize: 15,
                            fontFamily: "Inter, sans-serif",
                            lineHeight: 1.65,
                          }}
                        >
                          <CheckCircle2
                            size={16}
                            style={{ marginTop: 3, flexShrink: 0, color: section.color, opacity: 0.8 }}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      style={{
                        color: COLORS.muted,
                        fontSize: 15,
                        lineHeight: 1.75,
                        fontFamily: "Inter, sans-serif",
                        margin: 0,
                      }}
                    >
                      {content as string}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Navigation to other projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginTop: 64 }}
          >
            <div
              style={{
                fontSize: 12,
                color: COLORS.muted,
                fontFamily: "JetBrains Mono, monospace",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Other Projects
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {projects
                .filter((p) => p.id !== id)
                .map((p) => (
                  <Link
                    key={p.id}
                    to={`/case-study/${p.id}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 20px",
                      borderRadius: 8,
                      border: `1px solid ${COLORS.border}`,
                      color: COLORS.muted,
                      textDecoration: "none",
                      fontSize: 14,
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
                    {p.name}
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
