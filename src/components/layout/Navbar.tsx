"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
    const { dict } = useLanguage();

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                {/* Mobile Logo */}
                <div className="mr-4 md:hidden">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-bold sm:inline-block">SkyJob</span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-6">
                    <Link href="/" className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60">
                        {dict.common.home}
                    </Link>
                    <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60">
                        {dict.common.dashboard}
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                    </div>
                    <nav className="flex items-center gap-2 shrink-0">
                        <LanguageSwitcher />
                        <Link href="/login">
                            <Button variant="ghost" size="sm">{dict.common.login}</Button>
                        </Link>
                        <Link href="/register">
                            <Button size="sm">{dict.common.getStarted}</Button>
                        </Link>
                    </nav>
                </div>
            </div>
        </nav>
    );
}
