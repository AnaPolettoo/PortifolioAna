import { useEffect, useState } from "react";
import type { Language } from "../data/projects";

const STORAGE_KEY = "portfolio-language";

export function useLanguage(defaultLanguage: Language = "en") {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return defaultLanguage;
    }

    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    return storedLanguage === "pt" || storedLanguage === "en"
      ? storedLanguage
      : defaultLanguage;
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  return [language, setLanguage] as const;
}
