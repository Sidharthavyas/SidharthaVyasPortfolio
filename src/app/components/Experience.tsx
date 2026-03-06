import { motion } from "motion/react";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { experience, COLORS } from "../data/portfolio";

export function Experience() {
  return (
    <section id="experience" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
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
            // Experience
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
            Work History
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 12,
              bottom: 12,
              width: 1,
              backgroundColor: COLORS.border,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {experience.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                style={{ paddingLeft: 40, paddingBottom: idx < experience.length - 1 ? 56 : 0, position: "relative" }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: -5,
                    top: 12,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: idx === 0 ? COLORS.accent : COLORS.bgCard2,
                    border: `2px solid ${idx === 0 ? COLORS.accent : COLORS.border}`,
                    zIndex: 1,
                  }}
                />

                <motion.div
                  whileHover={{ borderColor: COLORS.borderHover }}
                  style={{
                    padding: "24px 28px",
                    borderRadius: 12,
                    border: `1px solid ${COLORS.border}`,
                    backgroundColor: COLORS.bgCard,
                    transition: "border-color 0.2s",
                  }}
                >
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
                    <div>
                      <h3
                        style={{
                          color: COLORS.text,
                          fontSize: 18,
                          fontWeight: 600,
                          fontFamily: "Inter, sans-serif",
                          margin: "0 0 4px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {job.role}
                      </h3>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                        <span
                          style={{
                            color: COLORS.accent,
                            fontSize: 14,
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                          }}
                        >
                          {job.company}
                        </span>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            color: COLORS.muted,
                            fontSize: 13,
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          <MapPin size={12} />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "4px 12px",
                        borderRadius: 6,
                        backgroundColor: COLORS.accentDim,
                        border: `1px solid rgba(34,211,238,0.15)`,
                      }}
                    >
                      <Calendar size={12} color={COLORS.accent} />
                      <span
                        style={{
                          color: COLORS.accent,
                          fontSize: 12,
                          fontFamily: "JetBrains Mono, monospace",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {job.period}
                      </span>
                    </div>
                  </div>

                  {/* Deployment note */}
                  {job.deployment && (
                    <p
                      style={{
                        color: COLORS.muted,
                        fontSize: 13,
                        fontFamily: "Inter, sans-serif",
                        margin: "0 0 16px",
                        fontStyle: "italic",
                      }}
                    >
                      {job.deployment}
                    </p>
                  )}

                  {/* Highlights */}
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                    {job.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          color: COLORS.muted,
                          fontSize: 14,
                          fontFamily: "Inter, sans-serif",
                          lineHeight: 1.6,
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          style={{ marginTop: 2, flexShrink: 0, color: COLORS.accent, opacity: 0.7 }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
