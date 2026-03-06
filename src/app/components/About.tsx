import { motion } from "motion/react";
import { Server, Zap, Brain, Code2 } from "lucide-react";
import { COLORS } from "../data/portfolio";

const pillars = [
  {
    icon: <Server size={20} />,
    title: "Backend Systems",
    desc: "Designing scalable APIs and microservices that power production applications",
  },
  {
    icon: <Zap size={20} />,
    title: "Real-time Architecture",
    desc: "Building event-driven systems with WebSockets, Redis pub/sub, and Socket.IO",
  },
  {
    icon: <Brain size={20} />,
    title: "AI Integration",
    desc: "Integrating ML models and LLMs into production-grade backend pipelines",
  },
  {
    icon: <Code2 size={20} />,
    title: "Full-Stack Capability",
    desc: "End-to-end development from React frontends to SQL-optimized backends",
  },
];

function fadeIn(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, delay },
  };
}

export function About() {
  return (
    <section id="about" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="about-grid">
          {/* Left */}
          <motion.div {...fadeIn(0)}>
            <div
              style={{
                display: "inline-block",
                fontSize: 12,
                letterSpacing: "0.12em",
                color: COLORS.accent,
                fontFamily: "JetBrains Mono, monospace",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              // About Me
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 700,
                color: COLORS.text,
                fontFamily: "Inter, sans-serif",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                margin: "0 0 28px",
              }}
            >
              Backend-first.
              <br />
              <span style={{ color: COLORS.accent }}>Production-minded.</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Sidhartha Vyas is a software developer specializing in backend systems, scalable APIs, and real-time architectures.",
                "He has experience building production systems used in restaurant operations — including inventory management, batch lifecycle tracking, and demand forecasting at scale for KFC operations in India.",
                "His work focuses on designing reliable backend services, optimizing database performance, and implementing real-time event-driven systems.",
                "He builds AI-powered applications that integrate machine learning models into production pipelines, with experience in multilingual NLP and LLM orchestration.",
              ].map((text, i) => (
                <p
                  key={i}
                  style={{
                    color: i === 0 ? COLORS.muted : "rgba(100,116,139,0.8)",
                    fontSize: 15,
                    lineHeight: 1.75,
                    fontFamily: "Inter, sans-serif",
                    margin: 0,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              {["Mumbai, India", "Open to Remote", "Backend / Full-Stack"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 100,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.muted,
                    fontSize: 12,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Pillars */}
          <motion.div
            {...fadeIn(0.15)}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
            className="about-pillars"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                whileHover={{ y: -4, borderColor: COLORS.borderHover }}
                style={{
                  padding: 24,
                  borderRadius: 12,
                  border: `1px solid ${COLORS.border}`,
                  backgroundColor: COLORS.bgCard,
                  transition: "border-color 0.2s",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    backgroundColor: COLORS.accentDim,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: COLORS.accent,
                    marginBottom: 16,
                  }}
                >
                  {pillar.icon}
                </div>
                <h3
                  style={{
                    color: COLORS.text,
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: "Inter, sans-serif",
                    margin: "0 0 8px",
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    color: COLORS.muted,
                    fontSize: 13,
                    lineHeight: 1.6,
                    fontFamily: "Inter, sans-serif",
                    margin: 0,
                  }}
                >
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
