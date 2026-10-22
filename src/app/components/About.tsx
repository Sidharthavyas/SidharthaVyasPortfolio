import { motion } from "motion/react";
import { Server, Zap, Brain, Code2 } from "lucide-react";
import { COLORS } from "../data/portfolio";

const pillars = [
  {
    icon: <Server size={20} />,
    title: "Backend Systems",
    desc: "APIs and data layers built for correctness: transactions, state machines, auth and query performance",
  },
  {
    icon: <Zap size={20} />,
    title: "Automation & Integrations",
    desc: "Voice and WhatsApp agents, webhooks and n8n workflows that connect the tools a business already uses",
  },
  {
    icon: <Brain size={20} />,
    title: "AI & LLM Engineering",
    desc: "Multi-agent pipelines, RAG, model fallback and on-device inference, with every output validated",
  },
  {
    icon: <Code2 size={20} />,
    title: "Full-Stack & Mobile",
    desc: "Next.js on the web, React Native and Kotlin on Android, SwiftUI on iPad, shipped for real clients",
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
                "Sidhartha Vyas is a backend and AI engineer in Mumbai with 2+ years of production experience across backend systems, AI applications and full-stack delivery.",
                "He built the backend for D-MPNC, an inventory platform used across multi-location KFC restaurants operated by Sapphire Foods: 20+ FastAPI APIs, FIFO stock ledgers, automated expiry handling and SQL Server reporting.",
                "Today he builds AI automation that runs real business operations: voice sales agents and WhatsApp booking agents in Python and n8n on ElevenLabs, Exotel and WATI.",
                "His focus is LLM systems that stay reliable and cheap: model fallback chains, on-device inference, RAG and multi-agent pipelines, with every model output validated before it is acted on.",
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
              {["Mumbai, India", "Open to hybrid or remote", "Backend · AI · Automation"].map((tag) => (
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
