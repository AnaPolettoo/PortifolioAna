import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { localizeProject, projects } from "../data/projects";
import { Navigation } from "../components/Navigation";
import { ScrollProgress } from "../components/ScrollProgress";
import { Footer } from "../components/Footer";
import { ImageLightbox } from "../components/ImageLightbox";
import { useLanguage } from "../hooks/useLanguage";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [language, setLanguage] = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const project = projects.find(p => p.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project not found</h1>
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer text-[#EDA0C8] hover:underline"
            style={{ cursor: "pointer" }}
          >
            Go back home
          </button>
        </div>
      </div>
    );
  }

  const translations = {
    en: {
      back: "All projects",
      description: "Description",
      techStack: "Tech Stack",
      team: "Team"
    },
    pt: {
      back: "Todos os projetos",
      description: "Descrição",
      techStack: "Tecnologias",
      team: "Equipe"
    }
  };

  const content = translations[language];
  const localizedProject = project ? localizeProject(project, language) : null;
  const availableForText =
    localizedProject?.id === "sinalu"
      ? language === "en"
        ? "Available for iPhone and iPad"
        : "Disponível para iPhone e iPad"
      : language === "en"
        ? "Available for iPhone"
        : "Disponível para iPhone";

  // Find current user in team
  const currentUserNames = ["Ana Poletto", "Ana Carolina Poletto"];
  
  // Check if icon is a string (emoji) or an import (object/url)
  const isEmoji = localizedProject ? typeof localizedProject.icon === 'string' && !localizedProject.icon.includes('/') : false;
  const updateGalleryControls = useCallback(() => {
    const gallery = galleryRef.current;

    if (!gallery) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
    const threshold = 8;

    setCanScrollLeft(gallery.scrollLeft > threshold);
    setCanScrollRight(maxScrollLeft - gallery.scrollLeft > threshold);
  }, []);

  const scrollGallery = (direction: "left" | "right") => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    const scrollAmount = Math.max(gallery.clientWidth * 0.82, 320);

    gallery.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth"
    });
  };

  const openLightboxAt = (index: number) => {
    if (!localizedProject || localizedProject.images.length === 0) return;

    const normalizedIndex =
      ((index % localizedProject.images.length) + localizedProject.images.length) %
      localizedProject.images.length;

    setActiveImageIndex(normalizedIndex);
    setLightboxImage(localizedProject.images[normalizedIndex]);
  };

  useEffect(() => {
    const frame = window.requestAnimationFrame(updateGalleryControls);
    window.addEventListener("resize", updateGalleryControls);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateGalleryControls);
    };
  }, [id, updateGalleryControls]);

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <ScrollProgress />
      <Navigation language={language} onLanguageChange={setLanguage} />

      <div className="pt-32 pb-24 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate("/")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12 flex cursor-pointer items-center gap-2 transition-colors duration-300 group"
            style={{ color: "#EDA0C8", cursor: "pointer" }}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-base">{content.back}</span>
          </motion.button>

          {/* App Header - Apple Store Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex items-center gap-4"
          >
            {/* Icon */}
            {localizedProject?.appStoreLink ? (
              <a
                href={localizedProject.appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-40 w-40 flex-shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-3xl text-7xl"
                style={{ cursor: "pointer" }}
                aria-label={`Open ${project.title} in the App Store`}
              >
                {isEmoji ? (
                  <span className="text-7xl">{localizedProject?.icon}</span>
                ) : (
                  <img
                    src={localizedProject?.icon}
                    alt={project?.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </a>
            ) : (
              <motion.div
                className="w-40 h-40 flex items-center justify-center text-7xl flex-shrink-0 rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.03 }}
              >
                {isEmoji ? (
                  <span className="text-7xl">{localizedProject?.icon}</span>
                ) : (
                  <img
                    src={localizedProject?.icon}
                    alt={project?.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            )}

            {/* Title and Category */}
            <div className="flex-1 flex flex-col items-start justify-center text-left">
              <h1 
                className="text-3xl md:text-4xl tracking-tight mb-3" 
                style={{ 
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: '1.1'
                }}
              >
                {project.title}
              </h1>
              
              {/* Category Tag and Link - Stacked and Aligned */}
              <div className="flex flex-col items-start gap-4">
                {localizedProject?.category && (
                  <span className="inline-block px-2.5 py-1 rounded-md bg-white/5 text-[10px] text-gray-400 uppercase tracking-wider">
                    {localizedProject.category}
                  </span>
                )}
                
                {localizedProject?.appStoreLink && (
                  <a
                    href={localizedProject.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex cursor-pointer items-center rounded-full bg-[#EDA0C8] px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-[#F5B8D8]"
                    style={{ cursor: "pointer" }}
                  >
                    App Store
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Screenshots Section */}
          {localizedProject && localizedProject.images.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-12"
            >
              <div className="relative">
                {canScrollLeft && (
                  <>
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent" />
                    <button
                      type="button"
                      onClick={() => scrollGallery("left")}
                      className="absolute left-3 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full border border-white/10 bg-[#0f0f0f]/80 p-2 text-gray-300 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:text-white"
                      style={{ cursor: "pointer" }}
                      aria-label="Scroll screenshots to the left"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                  </>
                )}
                {canScrollRight && (
                  <>
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent" />
                    <button
                      type="button"
                      onClick={() => scrollGallery("right")}
                      className="absolute right-3 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full border border-white/10 bg-[#0f0f0f]/80 p-2 text-gray-300 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:text-white"
                      style={{ cursor: "pointer" }}
                      aria-label="Scroll screenshots to the right"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </>
                )}
                <div
                  ref={galleryRef}
                  onScroll={updateGalleryControls}
                  className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
                >
                  {localizedProject.images.map((image, idx) => {
                    return (
                    <motion.div
                      key={`${image}-${idx}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.05, duration: 0.4 }}
                      className={`flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors duration-300 cursor-pointer ${
                        project.id === "sinalu" ? "w-80 md:w-[30rem]" : "w-72 md:w-96"
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => openLightboxAt(idx)}
                    >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-auto"
                      onLoad={updateGalleryControls}
                    />
                  </motion.div>
                )})}
                </div>
              </div>
            </motion.section>
          )}

          {/* Available For - below screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-sm text-gray-500">
              {availableForText}
            </p>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-white/5 mb-12" />

          {/* Description Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12"
          >
            <h2 
              className="text-xs tracking-widest uppercase text-gray-500 mb-4" 
              style={{ 
                fontWeight: 500,
                letterSpacing: '0.15em' 
              }}
            >
              {content.description}
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              {localizedProject?.description}
            </p>

            {/* Features */}
            {localizedProject?.features && localizedProject.features.length > 0 && (
              <ul className="space-y-2">
                {localizedProject.features.map((feature, idx) => (
                  <li key={idx} className="text-base text-gray-300 leading-relaxed flex items-start gap-2">
                    <span className="text-gray-500 mt-1.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.section>

          {project.technologies.length > 0 && (
            <>
              {/* Divider */}
              <div className="h-px bg-white/5 mb-12" />

              {/* Tech Stack Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mb-12"
              >
                <h2 
                  className="text-xs tracking-widest uppercase text-gray-500 mb-6" 
                  style={{ 
                    fontWeight: 500,
                    letterSpacing: '0.15em' 
                  }}
                >
                  {content.techStack}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.65 + idx * 0.03 }}
                      className="px-4 py-2 rounded-lg bg-white/5 text-sm text-gray-300 border border-white/10"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.section>

              {/* Divider */}
              <div className="h-px bg-white/5 mb-12" />
            </>
          )}

          {/* Team Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-12"
          >
            <h2 
              className="text-xs tracking-widest uppercase text-gray-500 mb-6" 
              style={{ 
                fontWeight: 500,
                letterSpacing: '0.15em' 
              }}
            >
              {content.team}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {localizedProject?.team.map((member, idx) => {
                const isCurrentUser = currentUserNames.includes(member.name);
                
                return (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75 + idx * 0.05 }}
                  >
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block cursor-pointer rounded-xl p-4 transition-all duration-300 group ${
                          isCurrentUser 
                            ? 'bg-white/[0.03] border-2 hover:border-[#EDA0C8]/60' 
                            : 'bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                        }`}
                        style={isCurrentUser ? { borderColor: "#EDA0C8", cursor: "pointer" } : { cursor: "pointer" }}
                      >
                        <div className="flex items-start justify-between mb-1">
                          <h3 
                            className="text-base font-medium group-hover:text-gray-100"
                            style={isCurrentUser ? { color: '#EDA0C8' } : { color: '#fff' }}
                          >
                            {member.name}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </a>
                    ) : (
                      <div 
                        className={`p-4 rounded-xl ${
                          isCurrentUser 
                            ? 'bg-white/[0.03] border-2' 
                            : 'bg-white/[0.03] border border-white/10'
                        }`}
                        style={isCurrentUser ? { borderColor: '#EDA0C8' } : {}}
                      >
                        <h3 
                          className="text-base font-medium mb-1"
                          style={isCurrentUser ? { color: '#EDA0C8' } : { color: '#fff' }}
                        >
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        </div>
      </div>

      <Footer language={language} />
      {lightboxImage && (
        <ImageLightbox 
          imageUrl={lightboxImage} 
          alt={`${project?.title} screenshot`}
          isOpen={true}
          onClose={() => setLightboxImage(null)}
          onPrevious={() => openLightboxAt(activeImageIndex - 1)}
          onNext={() => openLightboxAt(activeImageIndex + 1)}
        />
      )}
    </div>
  );
}
