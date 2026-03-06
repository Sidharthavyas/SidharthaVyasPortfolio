import { Github, Linkedin, Mail } from "lucide-react";
import { COLORS } from "../data/portfolio";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${COLORS.border}`,
        padding: "32px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              background: `linear-gradient(135deg, ${COLORS.accent}, #0ea5e9)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              fontWeight: 600,
              color: "#0a0a0b",
            }}
          >
            SV
          </div>
          <span style={{ color: COLORS.muted, fontSize: 13, fontFamily: "Inter, sans-serif" }}>
            © 2025 Sidhartha Vyas. All rights reserved.
          </span>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          {[
            { icon: <Github size={15} />, href: "https://github.com/Sidharthavyas" },
            { icon: <Linkedin size={15} />, href: "https://www.linkedin.com/in/sidhartha-vyas/" },
            { icon: <Mail size={15} />, href: "mailto:vsidhartha71@gmail.com" },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
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
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
