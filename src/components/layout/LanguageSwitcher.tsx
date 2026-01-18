"use client";

import { useLanguage } from "@/context/LanguageContext";
import { languageNames, LanguageCode } from "@/locales";
import { Globe, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLanguageSelect = (code: string) => {
        setLanguage(code as LanguageCode);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <Button
                variant="ghost"
                size="sm"
                onClick={toggleDropdown}
                className="gap-2 border border-transparent hover:border-gray-200"
            >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline-block">{languageNames[language]}</span>
            </Button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 max-h-96 overflow-y-auto rounded-md border bg-white p-1 shadow-lg dark:bg-gray-800 z-50">
                    <div className="py-1">
                        {Object.entries(languageNames).map(([code, name]) => (
                            <button
                                key={code}
                                onClick={() => handleLanguageSelect(code)}
                                className={cn(
                                    "flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-700",
                                    language === code ? "bg-gray-100 font-medium dark:bg-gray-700" : ""
                                )}
                            >
                                <span>{name}</span>
                                {language === code && <Check className="h-4 w-4" />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
