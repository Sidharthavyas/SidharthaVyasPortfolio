import { motion } from "motion/react";
import { skills, COLORS } from "../data/portfolio";

const categoryColors: Record<string, string> = {
  Languages: "#22d3ee",
  Backend: "#3b82f6",
  Databases: "#a78bfa",
  Frontend: "#34d399",
  Infrastructure: "#f59e0b",
  "ML & AI": "#fb7185",
};

export function Skills() {
  return (
    <section id="skills" style={{ padding: "120px 24px", backgroundColor: "rgba(17,17,20,0.5)" }}>
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
            // Technical Skills
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
            The Stack
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}
          className="skills-grid"
        >
          {Object.entries(skills).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.07 }}
              whileHover={{ borderColor: `${categoryColors[category]}40` }}
              style={{
                padding: 24,
                borderRadius: 12,
                border: `1px solid ${COLORS.border}`,
                backgroundColor: COLORS.bgCard,
                transition: "border-color 0.3s",
              }}
            >
              {/* Category label */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: categoryColors[category] || COLORS.accent,
                  }}
                />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: categoryColors[category] || COLORS.accent,
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  {category}
                </span>
              </div>

              {/* Skills tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ backgroundColor: `${categoryColors[category]}15`, color: categoryColors[category] }}
                    style={{
                      padding: "5px 12px",
                      borderRadius: 6,
                      border: `1px solid ${COLORS.border}`,
                      color: COLORS.muted,
                      fontSize: 13,
                      fontFamily: "Inter, sans-serif",
                      cursor: "default",
                      transition: "all 0.2s",
                      backgroundColor: "transparent",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
