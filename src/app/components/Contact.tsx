import { motion } from "motion/react";
import { Mail, Linkedin, MapPin, ArrowRight, Briefcase, MessageCircle } from "lucide-react";
import { COLORS } from "../data/portfolio";

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "vsidhartha71@gmail.com",
    href: "mailto:vsidhartha71@gmail.com",
    cta: "Send an email",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/sidhartha-vyas",
    href: "https://www.linkedin.com/in/sidhartha-vyas/",
    cta: "Connect on LinkedIn",
  },
  {
    icon: <MessageCircle size={20} />,
    label: "WhatsApp",
    value: "+91 9029562156",
    href: "https://wa.me/919029562156",
    cta: "Message on WhatsApp",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Mumbai, India",
    href: null,
    cta: null,
  },
];

const emailSubject = encodeURIComponent("Job Opportunity - Let's Connect");
const emailBody = encodeURIComponent(
  "Hi Sidhartha,\n\nI came across your portfolio and I'm impressed by your work in backend engineering and AI integration.\n\nI'd like to discuss a potential opportunity that might be a great fit for your skills.\n\nLooking forward to connecting!\n\nBest regards"
);
const GMAIL_URL = "https://mail.google.com/mail/?view=cm&to=vsidhartha71@gmail.com&su=" + emailSubject + "&body=" + emailBody;

const quickActions = [
  {
    icon: <Briefcase size={22} />,
    label: "Job Opportunity",
    description: "Interested in hiring? Send a pre-written email",
    href: "mailto:vsidhartha71@gmail.com?subject=" + emailSubject + "&body=" + emailBody,
    color: "#3b82f6",
    bgColor: "rgba(59,130,246,0.08)",
    borderColor: "rgba(59,130,246,0.15)",
    ctaText: "send email →",
  },
  {
    icon: <MessageCircle size={22} />,
    label: "Just Say Hi 👋",
    description: "Quick chat on WhatsApp, no formalities",
    href: "https://wa.me/919029562156?text=Hey%20Sidhartha!%20Saw%20your%20portfolio%20and%20wanted%20to%20connect%20%F0%9F%91%8B",
    color: "#25D366",
    bgColor: "rgba(37,211,102,0.08)",
    borderColor: "rgba(37,211,102,0.15)",
    ctaText: "open WhatsApp →",
  },
];

export function Contact() {
  return (
    <section id="contact" style={{ padding: "120px 24px", backgroundColor: "rgba(17,17,20,0.5)" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div style={{ fontSize: 12, letterSpacing: "0.12em", color: COLORS.accent, fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", marginBottom: 20 }}>
            {"// Contact"}
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 700, color: COLORS.text, fontFamily: "Inter, sans-serif", letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 20px" }}>
            {"Let's Build Something"}
            <br />
            <span style={{ color: COLORS.accent }}>Impactful</span>
          </h2>
          <p style={{ color: COLORS.muted, fontSize: 16, lineHeight: 1.7, fontFamily: "Inter, sans-serif", maxWidth: 520, margin: "0 auto" }}>
            Open to backend engineering roles, interesting system design challenges, and AI integration projects.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: 48 }}
        >
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: COLORS.muted, fontFamily: "JetBrains Mono, monospace", marginBottom: 16, textAlign: "center" }}>
            {"⚡ Quick Reach Out"}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="contact-actions">
            {/* Job Opportunity Card */}
            <motion.a
              href={GMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6, borderColor: "#3b82f6", boxShadow: "0 12px 40px rgba(59,130,246,0.08)" }}
              style={{
                padding: "32px 28px",
                borderRadius: 16,
                border: "1px solid rgba(59,130,246,0.15)",
                backgroundColor: "rgba(59,130,246,0.08)",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column" as const,
                alignItems: "center",
                gap: 14,
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              <div style={{ width: 56, height: 56, borderRadius: 14, backgroundColor: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#3b82f6" }}>
                <Briefcase size={22} />
              </div>
              <span style={{ color: COLORS.text, fontSize: 18, fontWeight: 600, fontFamily: "Inter, sans-serif" }}>
                Job Opportunity
              </span>
              <span style={{ color: COLORS.muted, fontSize: 13, fontFamily: "Inter, sans-serif", textAlign: "center", lineHeight: 1.5 }}>
                Pre-written email ready to send
              </span>
              <span style={{ fontSize: 12, color: "#3b82f6", fontFamily: "JetBrains Mono, monospace", fontWeight: 500, marginTop: 4 }}>
                {"send email →"}
              </span>
            </motion.a>

            {/* Just Say Hi Card */}
            <motion.a
              href="https://wa.me/919029562156?text=Hey%20Sidhartha!%20Saw%20your%20portfolio%20and%20wanted%20to%20connect%20%F0%9F%91%8B"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -6, borderColor: "#25D366", boxShadow: "0 12px 40px rgba(37,211,102,0.08)" }}
              style={{
                padding: "32px 28px",
                borderRadius: 16,
                border: "1px solid rgba(37,211,102,0.15)",
                backgroundColor: "rgba(37,211,102,0.08)",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column" as const,
                alignItems: "center",
                gap: 14,
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              <div style={{ width: 56, height: 56, borderRadius: 14, backgroundColor: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#25D366" }}>
                <MessageCircle size={22} />
              </div>
              <span style={{ color: COLORS.text, fontSize: 18, fontWeight: 600, fontFamily: "Inter, sans-serif", textAlign: "center" }}>
                {"Just Say Hi 👋"}
              </span>
              <span style={{ color: COLORS.muted, fontSize: 13, fontFamily: "Inter, sans-serif", textAlign: "center", lineHeight: 1.5 }}>
                Quick chat on WhatsApp, no formalities
              </span>
              <span style={{ fontSize: 12, color: "#25D366", fontFamily: "JetBrains Mono, monospace", fontWeight: 500, marginTop: 4 }}>
                {"open WhatsApp →"}
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Contact cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 16, marginBottom: 48 }} className="contact-cards">
          {contactLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={link.href ? { y: -4, borderColor: COLORS.borderHover } : {}}
              style={{ padding: "20px", borderRadius: 12, border: "1px solid " + COLORS.border, backgroundColor: COLORS.bgCard, transition: "border-color 0.2s, transform 0.2s" }}
            >
              <div style={{ width: 38, height: 38, borderRadius: 8, backgroundColor: COLORS.accentDim, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.accent, marginBottom: 12 }}>
                {link.icon}
              </div>
              <div style={{ fontSize: 10, color: COLORS.muted, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
                {link.label}
              </div>
              <div style={{ color: COLORS.text, fontSize: 13, fontFamily: "Inter, sans-serif", marginBottom: 12, wordBreak: "break-all" }}>
                {link.value}
              </div>
              {link.href && link.cta && (
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, color: COLORS.accent, fontSize: 12, fontFamily: "Inter, sans-serif", textDecoration: "none" }}
                >
                  {link.cta}
                  <ArrowRight size={12} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}