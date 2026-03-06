import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { COLORS } from "../data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Activity", href: "#activity" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (!isHome) return;
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          borderBottom: scrolled ? `1px solid ${COLORS.border}` : "1px solid transparent",
          backgroundColor: scrolled ? "rgba(9,9,11,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
            {/* Logo */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: `linear-gradient(135deg, ${COLORS.accent}, #0ea5e9)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#0a0a0b",
                  }}
                >
                  SV
                </div>
                <span style={{ color: COLORS.text, fontSize: 15, fontWeight: 500, fontFamily: "Inter, sans-serif" }}>
                  Sidhartha Vyas
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="nav-desktop">
              {navLinks.map((link) =>
                isHome ? (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: COLORS.muted,
                      fontSize: 14,
                      padding: "6px 12px",
                      borderRadius: 6,
                      fontFamily: "Inter, sans-serif",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.text)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={`/${link.href}`}
                    style={{
                      color: COLORS.muted,
                      fontSize: 14,
                      padding: "6px 12px",
                      textDecoration: "none",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Social + Mobile Toggle */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div className="nav-desktop" style={{ gap: 4, display: "flex" }}>
                <a
                  href="https://github.com/Sidharthavyas"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    color: COLORS.muted,
                    textDecoration: "none",
                    transition: "color 0.2s, background 0.2s",
                    border: `1px solid ${COLORS.border}`,
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
                  <Github size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sidhartha-vyas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    color: COLORS.muted,
                    textDecoration: "none",
                    transition: "color 0.2s, background 0.2s",
                    border: `1px solid ${COLORS.border}`,
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
                  <Linkedin size={16} />
                </a>
              </div>

              {/* Mobile Toggle */}
              <button
                className="nav-mobile-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  background: "none",
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 8,
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: COLORS.muted,
                }}
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 64,
              left: 0,
              right: 0,
              zIndex: 99,
              backgroundColor: "rgba(9,9,11,0.97)",
              backdropFilter: "blur(16px)",
              borderBottom: `1px solid ${COLORS.border}`,
              padding: "16px 24px 24px",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: COLORS.muted,
                  fontSize: 16,
                  padding: "12px 0",
                  fontFamily: "Inter, sans-serif",
                  borderBottom: `1px solid ${COLORS.border}`,
                }}
              >
                {link.label}
              </button>
            ))}
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              <a href="https://github.com/Sidharthavyas" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.muted }}>
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sidhartha-vyas/" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.muted }}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:vsidhartha71@gmail.com" style={{ color: COLORS.muted }}>
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
