import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Language } from "../data/projects";

interface NavigationProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translations = {
    en: {
      name: "Ana Poletto"
    },
    pt: {
      name: "Ana Poletto"
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        backdropFilter: scrolled ? "blur(20px)" : "none",
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.7)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "none"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Name - appears when scrolled */}
          <AnimatePresence>
            {scrolled && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-lg tracking-tight"
                style={{ fontWeight: 600 }}
              >
                {translations[language].name}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right side - Single rounded pill with all buttons */}
          <div className="ml-auto">
            <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/[0.03] border border-white/10">
              {/* GitHub */}
              <motion.a
                href="https://github.com/AnaPolettoo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm transition-colors duration-300 rounded-md hover:bg-white/5"
                style={{ color: '#EDA0C8' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                GitHub
              </motion.a>

              {/* Divider */}
              <div className="w-px h-4 bg-white/10" />

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/ana-poletto-2a7222318"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm transition-colors duration-300 rounded-md hover:bg-white/5"
                style={{ color: '#EDA0C8' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                LinkedIn
              </motion.a>

              {/* Divider */}
              <div className="w-px h-4 bg-white/10" />

              {/* Language Switcher */}
              <motion.button
                onClick={() => onLanguageChange(language === "en" ? "pt" : "en")}
                className="px-4 py-1.5 rounded-full hover:bg-white/[0.08] transition-all duration-300 text-sm uppercase"
                style={{ color: '#EDA0C8' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`Switch language to ${language === "en" ? "Portuguese" : "English"}`}
              >
                {language.toUpperCase()}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
