import { motion } from "motion/react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { projects, COLORS } from "../data/portfolio";

const categoryColors: Record<string, string> = {
  "AI / Backend": "#fb7185",
  "Full-Stack": "#34d399",
  "Enterprise Backend": "#a78bfa",
};

export function Projects() {
  return (
    <section id="projects" style={{ padding: "120px 24px", backgroundColor: "rgba(17,17,20,0.5)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
            // Projects
          </div>
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
            What I've Built
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
            gap: 24,
          }}
          className="projects-grid"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              whileHover={{ y: -6, borderColor: COLORS.borderHover }}
              style={{
                padding: 28,
                borderRadius: 16,
                border: `1px solid ${COLORS.border}`,
                backgroundColor: COLORS.bgCard,
                display: "flex",
                flexDirection: "column",
                gap: 20,
                transition: "border-color 0.25s, transform 0.25s",
                cursor: "default",
              }}
            >
              {/* Header */}
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: categoryColors[project.category] || COLORS.accent,
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    {project.category}
                  </span>
                  <div style={{ display: "flex", gap: 8 }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 32,
                          height: 32,
                          borderRadius: 6,
                          border: `1px solid ${COLORS.border}`,
                          color: COLORS.muted,
                          textDecoration: "none",
                          transition: "color 0.2s, border-color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = COLORS.text;
                          e.currentTarget.style.borderColor = COLORS.text;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = COLORS.muted;
                          e.currentTarget.style.borderColor = COLORS.border;
                        }}
                      >
                        <Github size={14} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 32,
                          height: 32,
                          borderRadius: 6,
                          border: `1px solid ${COLORS.border}`,
                          color: COLORS.muted,
                          textDecoration: "none",
                          transition: "color 0.2s, border-color 0.2s",
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
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <h3
                  style={{
                    color: COLORS.text,
                    fontSize: 22,
                    fontWeight: 700,
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "-0.02em",
                    margin: "0 0 6px",
                  }}
                >
                  {project.name}
                </h3>
                <p
                  style={{
                    color: COLORS.accent,
                    fontSize: 13,
                    fontFamily: "Inter, sans-serif",
                    margin: 0,
                    opacity: 0.85,
                  }}
                >
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p
                style={{
                  color: COLORS.muted,
                  fontSize: 14,
                  lineHeight: 1.7,
                  fontFamily: "Inter, sans-serif",
                  margin: 0,
                }}
              >
                {project.description}
              </p>

              {/* Key features */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {project.features.slice(0, 3).map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      color: COLORS.muted,
                      fontSize: 13,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        backgroundColor: COLORS.accent,
                        flexShrink: 0,
                        opacity: 0.7,
                      }}
                    />
                    {f}
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "3px 10px",
                      borderRadius: 4,
                      backgroundColor: COLORS.accentDim,
                      border: `1px solid rgba(34,211,238,0.12)`,
                      color: COLORS.accent,
                      fontSize: 12,
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Case study link */}
              <Link
                to={`/case-study/${project.id}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: COLORS.muted,
                  fontSize: 13,
                  fontFamily: "Inter, sans-serif",
                  textDecoration: "none",
                  marginTop: 4,
                  transition: "color 0.2s",
                  borderTop: `1px solid ${COLORS.border}`,
                  paddingTop: 16,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
              >
                View Case Study <ArrowRight size={13} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
