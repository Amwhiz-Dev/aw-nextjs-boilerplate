import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type LanguageContextType = {
  language: string;
  setLanguage: (lng: string) => void;
  isRtl: boolean;
  setIsRtl: (isRtl: boolean) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider"
    );
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState("en"); // Default to 'en'
  const [isRtl, setIsRtl] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Set initial layout direction
  useEffect(() => {
    const lang=localStorage?.getItem("selectedLanguage") || language
      setLanguageState(lang);
      i18n.changeLanguage(language);
    if (lang === "ar") {
      setIsRtl(true);
      document.body.classList.add("layout-change");
    } else {
      setIsRtl(false);
      document.body.classList.remove("layout-change");
    }
  }, [language, i18n]);

  const setLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguageState(lng);
    setIsOpen(false);
    localStorage?.setItem("selectedLanguage", lng);

    // Toggle direction for Arabic
    if (lng === "ar") {
      setIsRtl(true);
      document.body.classList.add("layout-change");
      localStorage?.setItem("bodyClass", "layout-change");
    } else {
      setIsRtl(false);
      document.body.classList.remove("layout-change");
      localStorage?.removeItem("bodyClass");
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, isRtl, setIsRtl, isOpen, setIsOpen }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
