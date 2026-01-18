"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Clock, User, ShieldCheck } from "lucide-react";
import { MOCK_SUBSCRIBERS, Subscriber } from "@/data/subscribers";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { ar, enUS } from 'date-fns/locale';

export function LatestSubscribers() {
    const { dict, language } = useLanguage();
    const [isOwnerView, setIsOwnerView] = useState(false);

    // Filter Logic
    // User View: Limit to top 3, filter by "Riyadh" (simulated)
    // Owner View: Show top 10, no location filter
    const displayedSubscribers = isOwnerView
        ? MOCK_SUBSCRIBERS.slice(0, 10)
        : MOCK_SUBSCRIBERS.filter(s => s.location.city === "Riyadh").slice(0, 3);

    return (
        <section className="w-full py-12 bg-white dark:bg-gray-800 border-t">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl flex items-center gap-2">
                            {dict.subscribers?.latestJoiners || "Latest Joiners"}
                            <span className="text-sm font-normal text-muted-foreground bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                                {isOwnerView ? (dict.subscribers?.globalList || "Global") : (dict.subscribers?.nearYou || "Near You")}
                            </span>
                        </h2>
                    </div>

                    <Button
                        variant={isOwnerView ? "default" : "outline"}
                        size="sm"
                        onClick={() => setIsOwnerView(!isOwnerView)}
                        className="gap-2"
                    >
                        {isOwnerView ? <User className="h-4 w-4" /> : <ShieldCheck className="h-4 w-4" />}
                        {isOwnerView ? (dict.subscribers?.viewAsUser || "View as User") : (dict.subscribers?.viewAsOwner || "View as Owner")}
                    </Button>
                </div>

                <div className={cn(
                    "grid gap-6",
                    // If user view (3 items), use 3 cols on large screens
                    // If owner view (10 items), use dynamic grid fitting more
                    !isOwnerView ? "md:grid-cols-3" : "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                )}>
                    {displayedSubscribers.map((sub) => (
                        <SubscriberCard key={sub.id} subscriber={sub} language={language} dict={dict} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SubscriberCard({ subscriber, language, dict }: { subscriber: Subscriber, language: string, dict: any }) {
    const timeAgo = formatDistanceToNow(new Date(subscriber.joinedAt), {
        addSuffix: true,
        locale: language === 'ar' ? ar : enUS
    });

    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
            <CardContent className="p-0">
                <div className={cn("h-2 w-full", subscriber.avatarColor)} />
                <div className="p-4 flex flex-col items-center text-center space-y-2">
                    <div className={cn(
                        "h-16 w-16 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md -mt-10 border-4 border-white dark:border-gray-800",
                        subscriber.avatarColor
                    )}>
                        {subscriber.name.charAt(0).toUpperCase()}
                    </div>

                    <div>
                        <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                            {subscriber.name}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium">
                            {subscriber.role}
                        </p>
                    </div>

                    <div className="w-full pt-2 mt-2 border-t flex flex-col gap-1 text-xs text-gray-400">
                        <div className="flex items-center justify-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{subscriber.location.city}, {subscriber.location.country}</span>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{dict.subscribers?.joined} {timeAgo}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
