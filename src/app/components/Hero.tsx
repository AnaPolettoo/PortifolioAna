import { useState } from "react";
import type { Language } from "../data/projects";
import { motion, useScroll, useTransform } from "motion/react";

interface HeroProps {
  language: Language;
}

export function Hero({ language }: HeroProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 360], [1, 0]);
  const baseUrl = import.meta.env.BASE_URL;
  const profilePhotoCandidates = [
    `${baseUrl}profile-photo.jpg`,
    `${baseUrl}profile-photo.png`,
    `${baseUrl}profile-photo.webp`
  ];
  const [profilePhotoIndex, setProfilePhotoIndex] = useState(0);
  const currentProfilePhoto = profilePhotoCandidates[profilePhotoIndex];
  const hasProfilePhoto = profilePhotoIndex < profilePhotoCandidates.length;

  const translations = {
    en: {
      aboutMe: "ABOUT ME",
      firstName: "Ana",
      lastName: "Poletto",
      description: "I'm a Data Science & AI student and iOS Developer based in Porto Alegre, currently studying at PUCRS and part of the Apple Developer Academy. I build products with a focus on solving real problems and creating meaningful user experiences."
    },
    pt: {
      aboutMe: "SOBRE MIM",
      firstName: "Ana",
      lastName: "Poletto",
      description: "Sou estudante de Ciencia de Dados e IA e iOS Developer, baseada em Porto Alegre, atualmente estudando na PUCRS e parte da Apple Developer Academy. Desenvolvo produtos com foco em resolver problemas reais e criar experiencias significativas para os usuarios."
    }
  };

  const content = translations[language];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-16 pt-20 relative overflow-hidden">
      {/* Clean dark background matching reference */}
      <div className="absolute inset-0 bg-[#0f0f0f] pointer-events-none" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[#0f0f0f]/70 to-[#0f0f0f]" />

      <motion.div className="max-w-6xl w-full relative z-10" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]"
        >
          <div className="space-y-10">
            {/* Badge with pink dot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-transparent"
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#EDA0C8' }}></span>
              <span className="text-xs tracking-wider uppercase text-gray-400">{content.aboutMe}</span>
            </motion.div>

            {/* Name - split into two lines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 
                className="text-7xl md:text-8xl lg:text-9xl tracking-tight text-white leading-none"
                style={{ 
                  fontWeight: 700,
                  letterSpacing: '-0.02em'
                }}
              >
                {content.firstName}
              </h1>
              <h1 
                className="text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none"
                style={{ 
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: '#EDA0C8'
                }}
              >
                {content.lastName}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed"
            >
              {content.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative mx-auto w-full max-w-[22rem]"
          >
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#EDA0C8]/45 via-transparent to-[#5B8DEF]/30 blur-[72px]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              {hasProfilePhoto ? (
                <img
                  src={currentProfilePhoto}
                  alt="Ana Poletto portrait"
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                  onError={() => setProfilePhotoIndex((currentIndex) => currentIndex + 1)}
                />
              ) : (
                <div className="aspect-[4/5] w-full rounded-[1.5rem] bg-[radial-gradient(circle_at_top,_rgba(237,160,200,0.45),_transparent_38%),linear-gradient(160deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.02))]" />
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
