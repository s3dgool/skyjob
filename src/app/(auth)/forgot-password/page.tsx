"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ForgotPasswordPage() {
    const { dict, direction } = useLanguage();

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
            <Card className="mx-auto max-w-sm w-full">
                <CardHeader>
                    <CardTitle className="text-xl">{dict.auth.resetPasswordTitle}</CardTitle>
                    <CardDescription>
                        {dict.auth.resetPasswordDesc}
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
                        <Button type="submit" className="w-full">
                            {dict.auth.sendResetLink}
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        <Link href="/login" className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            {direction === 'rtl' ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                            {dict.auth.backToLogin}
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
