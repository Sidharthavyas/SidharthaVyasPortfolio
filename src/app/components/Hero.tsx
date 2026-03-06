import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowDown, Github, FileText } from "lucide-react";
import { COLORS } from "../data/portfolio";

const words = ["backend systems", "scalable APIs", "real-time platforms", "AI-powered tools"];

export function Hero() {
  const wordRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;
    el.textContent = words[0];

    const cycle = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % words.length;
      el.style.opacity = "0";
      el.style.transform = "translateY(8px)";
      setTimeout(() => {
        el.textContent = words[indexRef.current];
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 350);
    }, 2600);

    return () => clearInterval(cycle);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px 60px",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 16px",
          borderRadius: 100,
          border: `1px solid ${COLORS.border}`,
          backgroundColor: COLORS.accentDim,
          marginBottom: 32,
        }}
      >
        <div style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: COLORS.accent }} />
        <span
          style={{
            color: COLORS.accent,
            fontSize: 13,
            fontFamily: "Inter, sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          Available for backend engineering roles
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{ textAlign: "center", maxWidth: 800 }}
      >
        <h1
          style={{
            fontSize: "clamp(48px, 8vw, 88px)",
            fontWeight: 700,
            color: COLORS.text,
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          Sidhartha
          <br />
          <span style={{ color: COLORS.accent }}>Vyas</span>
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        style={{
          marginTop: 24,
          fontSize: "clamp(16px, 2.5vw, 20px)",
          color: COLORS.muted,
          fontFamily: "Inter, sans-serif",
          textAlign: "center",
          maxWidth: 600,
          lineHeight: 1.6,
        }}
      >
        Software Developer focused on{" "}
        <span
          ref={wordRef}
          style={{
            color: COLORS.accent,
            display: "inline-block",
            transition: "opacity 0.35s ease, transform 0.35s ease",
            minWidth: 180,
          }}
        >
          backend systems
        </span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        style={{
          marginTop: 12,
          fontSize: "clamp(13px, 1.8vw, 15px)",
          color: "rgba(148,163,184,0.6)",
          fontFamily: "Inter, sans-serif",
          textAlign: "center",
          maxWidth: 520,
        }}
      >
        Building reliable backend systems, real-time architectures, and AI-powered platforms.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
        style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap", justifyContent: "center" }}
        className="hero-ctas"
      >
        <button
          onClick={() => scrollTo("projects")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 24px",
            borderRadius: 8,
            backgroundColor: COLORS.accent,
            color: "#0a0a0b",
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            border: "none",
            cursor: "pointer",
            transition: "opacity 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          View Projects
        </button>

        <a
          href="/resume/Sidhartha_Vyas_Resume.pdf"
          download="Sidhartha_Vyas_Resume.pdf"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 24px",
            borderRadius: 8,
            backgroundColor: "transparent",
            color: COLORS.text,
            fontSize: 14,
            fontWeight: 500,
            fontFamily: "Inter, sans-serif",
            border: `1px solid ${COLORS.border}`,
            cursor: "pointer",
            textDecoration: "none",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = COLORS.border)}
        >
          <FileText size={15} /> Download Resume
        </a>

        <button
          onClick={() => scrollTo("contact")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 24px",
            borderRadius: 8,
            backgroundColor: "transparent",
            color: COLORS.muted,
            fontSize: 14,
            fontWeight: 500,
            fontFamily: "Inter, sans-serif",
            border: `1px solid ${COLORS.border}`,
            cursor: "pointer",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.text)}
          onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
        >
          Contact
        </button>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        style={{
          display: "flex",
          gap: 40,
          marginTop: 64,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[
          { value: "20+", label: "Production APIs" },
          { value: "3+", label: "Systems Built" },
          { value: "40%", label: "Latency Reduction" },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: COLORS.accent,
                fontFamily: "Inter, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              {stat.value}
            </div>
            <div style={{ fontSize: 12, color: COLORS.muted, fontFamily: "Inter, sans-serif", marginTop: 4 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={16} color={COLORS.muted} />
        </motion.div>
      </motion.div>
    </section>
  );
}
