"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/context/LanguageContext";
import { Facebook, Mail, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Simple Google Icon Component since lucide doesn't have the colored one
function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
            />
            <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
            />
            <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
            />
            <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
            />
        </svg>
    );
}

export default function LoginForm() {
    const { dict } = useLanguage();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<string | null>(null);

    const handleSimulatedLogin = (provider: string) => {
        setIsLoading(provider);
        // Simulate network request
        setTimeout(() => {
            router.push("/dashboard");
        }, 1500);
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
            <Card className="mx-auto max-w-sm w-full">
                <CardHeader>
                    <CardTitle className="text-2xl">{dict.auth.loginTitle}</CardTitle>
                    <CardDescription>
                        {dict.auth.loginDesc}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <label htmlFor="email">{dict.auth.email}</label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <label htmlFor="password">{dict.auth.password}</label>
                                <Link href="/forgot-password" className="ml-auto inline-block text-sm underline text-muted-foreground hover:text-primary">
                                    {dict.auth.forgotPassword}
                                </Link>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                            {dict.auth.loginTitle}
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    {dict.auth.continueWith}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                            <Button variant="outline" className="w-full gap-2 p-0" onClick={() => handleSimulatedLogin("Google")} disabled={!!isLoading}>
                                {isLoading === "Google" ? <Loader2 className="h-4 w-4 animate-spin" /> : <GoogleIcon className="h-4 w-4" />}
                                <span className="hidden sm:inline">Google</span>
                            </Button>
                            <Button variant="outline" className="w-full gap-2 p-0 text-[#1877F2] hover:text-[#1877F2]/90" onClick={() => handleSimulatedLogin("Facebook")} disabled={!!isLoading}>
                                {isLoading === "Facebook" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Facebook className="h-4 w-4 fill-current" />}
                                <span className="hidden sm:inline">Facebook</span>
                            </Button>
                            <Button variant="outline" className="w-full gap-2 p-0 text-[#0A66C2] hover:text-[#0A66C2]/90" onClick={() => handleSimulatedLogin("LinkedIn")} disabled={!!isLoading}>
                                {isLoading === "LinkedIn" ? <Loader2 className="h-4 w-4 animate-spin" /> : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 4.5z" />
                                    </svg>
                                )}
                                <span className="hidden sm:inline">LinkedIn</span>
                            </Button>
                        </div>

                    </div>
                    <div className="mt-4 text-center text-sm">
                        {dict.auth.dontHaveAccount}{" "}
                        <Link href="/register" className="underline text-primary hover:text-primary/90">
                            {dict.auth.signUp}
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
