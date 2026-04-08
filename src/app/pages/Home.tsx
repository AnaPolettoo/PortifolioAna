import { useEffect } from "react";
import { useLocation } from "react-router";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { ProjectsSection } from "../components/ProjectsSection";
import { TechStackSection } from "../components/TechStackSection";
import { Footer } from "../components/Footer";
import { ScrollProgress } from "../components/ScrollProgress";
import { useLanguage } from "../hooks/useLanguage";

export default function Home() {
  const [language, setLanguage] = useLanguage();
  const location = useLocation();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <ScrollProgress />
      <Navigation language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <ProjectsSection language={language} />
      <TechStackSection language={language} />
      <Footer language={language} />
    </div>
  );
}
