import { motion } from "motion/react";
import { Link } from "react-router";
import type { LocalizedProject } from "../data/projects";

interface ProjectCardProps {
  project: LocalizedProject;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Check if icon is a string (emoji) or an import (object/url)
  const isEmoji = typeof project.icon === 'string' && !project.icon.includes('/');
  
  return (
    <Link to={`/project/${project.id}`} className="block cursor-pointer" style={{ cursor: "pointer" }}>
      <motion.article
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.25 }}
        className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/5 bg-[#1a1a1a] transition-all duration-500 hover:border-white/10"
        style={{ cursor: "pointer" }}
      >
        <div className="flex cursor-pointer flex-col items-center gap-8 p-8 md:flex-row md:p-10" style={{ cursor: "pointer" }}>
          {/* Left Content */}
          <div className="flex-1 cursor-pointer" style={{ cursor: "pointer" }}>
            {/* Title */}
            <h3 
              className="mb-5 cursor-pointer text-3xl tracking-tight transition-all duration-300 group-hover:opacity-90 md:text-5xl"
              style={{ fontWeight: 700, letterSpacing: '-0.02em', color: '#EDA0C8', cursor: "pointer" }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="mb-6 max-w-xl cursor-pointer text-base leading-relaxed text-gray-400 md:text-lg" style={{ cursor: "pointer" }}>
              {project.shortDescription}
            </p>
          </div>

          {/* Right Visual/Icon */}
          <div className="flex-shrink-0 cursor-pointer" style={{ cursor: "pointer" }}>
            <motion.div
              className="relative flex cursor-pointer items-center justify-center text-7xl"
              style={{ cursor: "pointer" }}
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ duration: 0.4 }}
            >
              {/* Icon - emoji or image */}
              <div className="relative z-10 cursor-pointer" style={{ cursor: "pointer" }}>
                {isEmoji ? (
                  <div className="cursor-pointer text-8xl" style={{ cursor: "pointer" }}>{project.icon}</div>
                ) : (
                  <img 
                    src={project.icon} 
                    alt={project.title}
                    className="w-56 h-56 md:w-64 md:h-64 object-contain rounded-3xl"
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
