import { motion } from "motion/react";
import type { Language } from "../data/projects";

interface TechStackSectionProps {
  language: Language;
}

const personalTechStack = [
  "Python",
  "SwiftUI",
  "Data Analysis",
  "Data Visualization",
  "Machine Learning",
  "Artificial Intelligence",
  "Swift",
  "UIKit",
  "Git",
  "Figma"
];

export function TechStackSection({ language }: TechStackSectionProps) {
  const translations = {
    en: {
      title: "Tech Stack"
    },
    pt: {
      title: "Tech Stack"
    }
  };

  const content = translations[language];

  return (
    <section className="pb-32 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2
            className="text-sm md:text-base tracking-widest uppercase text-gray-500"
            style={{
              fontWeight: 500,
              letterSpacing: "0.15em"
            }}
          >
            {content.title}
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-5">
          {personalTechStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.35 }}
              className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-lg md:text-xl font-medium text-gray-200"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
