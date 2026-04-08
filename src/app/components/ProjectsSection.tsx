import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { localizeProject, projects, type Language } from "../data/projects";

interface ProjectsSectionProps {
  language: Language;
}

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const translations = {
    en: {
      title: "Projects"
    },
    pt: {
      title: "Projetos"
    }
  };

  const content = translations[language];

  return (
    <section className="py-32 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Simplified like reference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 
            className="text-sm tracking-widest uppercase text-gray-500" 
            style={{ 
              fontWeight: 500,
              letterSpacing: '0.15em' 
            }}
          >
            {content.title}
          </h2>
        </motion.div>

        {/* Projects Grid - Single column with spacing */}
        <div className="space-y-6 md:space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={localizeProject(project, language)} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
