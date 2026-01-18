"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/context/LanguageContext";
import { Users, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

import { SPECIALIZATION_STATS, getSpecializationName } from "@/data/specializations";

export function LiveStats() {
    const { dict, language } = useLanguage();
    const [totalUsers, setTotalUsers] = useState(24500);
    const [activeUpdates, setActiveUpdates] = useState(false);

    // Effect to simulate live user count updates
    useEffect(() => {
        const interval = setInterval(() => {
            // Randomly add 1-3 users every 3-5 seconds
            const increment = Math.floor(Math.random() * 3) + 1;
            setTotalUsers(prev => prev + increment);
            setActiveUpdates(true);
            setTimeout(() => setActiveUpdates(false), 1000); // Visual flash effect
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    // Calculate percentages for bar width
    const maxCount = Math.max(...SPECIALIZATION_STATS.map(s => s.count));


    return (
        <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                        {dict.liveStats?.liveUpdates || "Live Updates"}
                    </h2>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm text-green-600 font-medium">Live</span>
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Total Users Card */}
                    <Card className="lg:col-span-1 shadow-lg bg-white dark:bg-gray-800 border-t-4 border-t-primary">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl font-medium text-muted-foreground">
                                <Users className="h-5 w-5" />
                                {dict.liveStats?.totalUsers || "Total Registered Users"}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col items-center justify-center py-10">
                                <div className={cn(
                                    "text-6xl font-extrabold transition-all duration-300",
                                    activeUpdates ? "scale-110 text-primary" : "text-foreground"
                                )}>
                                    {totalUsers.toLocaleString()}
                                </div>
                                <p className="text-sm text-muted-foreground mt-4">
                                    Growing every second
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Top Specializations Chart */}
                    <Card className="lg:col-span-2 shadow-lg bg-white dark:bg-gray-800">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-indigo-500" />
                                {dict.liveStats?.topSpecializations || "Top 20 Trending Specializations"}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            <div className="space-y-4">
                                {SPECIALIZATION_STATS.map((spec, index) => (
                                    <div key={spec.id} className="space-y-1">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-medium text-gray-700 dark:text-gray-300">
                                                {index + 1}. {getSpecializationName(spec.id, language)}
                                            </span>
                                            <span className="text-gray-500">{spec.count.toLocaleString()}</span>
                                        </div>
                                        <Progress
                                            value={(spec.count / maxCount) * 100}
                                            className="bg-gray-100 dark:bg-gray-700 h-2"
                                            indicatorClassName={cn("transition-all duration-1000 ease-out", spec.color)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
