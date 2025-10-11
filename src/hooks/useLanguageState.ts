import { useState, useEffect, useCallback } from "react";
import i18n from "@template/lib/i18n";
import { storage } from "@template/utils/storage";

type Language = "en" | "fr" | "ar";

const STORAGE_KEY = "appLanguage";
// Custom hook: Sync language changes with i18n and storage
export function useLanguageState(initialLang: Language) {
  const [language, setLanguageState] = useState<Language>(initialLang);

  const setLanguage = useCallback(
    (lang: Language) => {
      if (lang === language) return;
      i18n.changeLanguage(lang);
      setLanguageState(lang);
      try {
        storage.set(STORAGE_KEY, lang);
      } catch {
        // ignore storage errors
      }
    },
    [language]
  );

  // Ensure i18n is synced on mount
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return { language, setLanguage };
}
