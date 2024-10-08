"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import * as en from "@/public/translations/en.json";
import * as es from "@/public/translations/es.json";

interface GlobalState {
  language: "ES" | "EN";
  setLanguage: (lang: "ES" | "EN") => void;
  translation: typeof en | typeof es;
}

const GlobalContext = createContext<GlobalState | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"ES" | "EN">("ES");
  const [translation, setTranslation] = useState<typeof en | typeof es>(en);

  useEffect(() => {
    const cookieLanguage = localStorage.getItem("language");
    const initialLanguage = cookieLanguage === "EN" ? "EN" : "ES";
    setLanguage(initialLanguage);
    setTranslation(initialLanguage === "EN" ? en : es);
  }, []);

  const handleSetLanguage = (lang: "ES" | "EN") => {
    setLanguage(lang);
    setTranslation(lang === "EN" ? en : es);
    localStorage.setItem("language", lang);
  };

  return (
    <GlobalContext.Provider
      value={{ translation, language, setLanguage: handleSetLanguage }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useLanguageContext = (): GlobalState => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a LanguageProvider");
  }
  return context;
};
