"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { dictionaries, LanguageCode, getDirection } from "../locales";
import { Dictionary } from "../locales/types";

type Direction = "rtl" | "ltr";

interface LanguageContextType {
    language: LanguageCode;
    direction: Direction;
    dict: Dictionary;
    setLanguage: (lang: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    // Default to Arabic
    const [language, setLanguageState] = useState<LanguageCode>("ar");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as LanguageCode;
        if (savedLang && dictionaries[savedLang]) {
            setLanguageState(savedLang);
        }
        setIsMounted(true);
    }, []);

    const setLanguage = (lang: LanguageCode) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
        const dir = getDirection(lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = dir;
    };

    const direction = getDirection(language);
    const dict = dictionaries[language];

    // Prevent hydration mismatch by rendering a safe fallback or just returning children
    // Logic: Initial render on server is usually consistent, client takes over.
    // To be safe, we might render nothing until mounted if we want to avoid mismatched text,
    // but that hurts SEO/LCP. For this tasks, we assume client-side toggle is fine.

    return (
        <LanguageContext.Provider value={{ language, direction, dict, setLanguage }}>
            <div dir={direction} className="min-h-screen">
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
