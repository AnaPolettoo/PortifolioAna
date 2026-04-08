import { motion } from "motion/react";
import type { Language } from "../data/projects";

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const translations = {
    en: {
      copyright: "© 2026"
    },
    pt: {
      copyright: "© 2026"
    }
  };

  const content = translations[language];

  return (
    <footer className="py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-500 text-sm"
        >
          {content.copyright} <span className="text-white">Ana Poletto</span>
        </motion.p>
      </div>
    </footer>
  );
}
