import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { GitHubAnalytics } from "../components/GitHubAnalytics";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { COLORS } from "../data/portfolio";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: COLORS.bg,
        color: COLORS.text,
        fontFamily: "Inter, sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GitHubAnalytics />
      <Contact />
      <Footer />
    </div>
  );
}
