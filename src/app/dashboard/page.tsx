"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Building, Clock, MapPin, User, FileText, Bookmark } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function DashboardPage() {
    const { dict } = useLanguage();

    return (
        <div className="container py-8">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold">{dict.dashboard.welcome} User!</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        {dict.dashboard.latestActions}
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link href="/profile/me">
                        <Button variant="outline" className="gap-2">
                            <User className="h-4 w-4" />
                            {dict.dashboard.viewProfile}
                        </Button>
                    </Link>
                    <Link href="/wizard">
                        <Button className="gap-2">
                            <FileText className="h-4 w-4" />
                            {dict.dashboard.editProfile}
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Stats Cards */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            {dict.dashboard.profileCompletion}
                        </CardTitle>
                        <User className="h-4 w-4 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">85%</div>
                        <p className="text-xs text-gray-500">{dict.dashboard.fromLastMonth}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            {dict.dashboard.jobApplications}
                        </CardTitle>
                        <Briefcase className="h-4 w-4 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-gray-500">{dict.dashboard.activeApplications}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            {dict.dashboard.savedJobs}
                        </CardTitle>
                        <Bookmark className="h-4 w-4 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">4</div>
                        <p className="text-xs text-gray-500">{dict.dashboard.interestedJobs}</p>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-7">

                {/* Recent Activity */}
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>{dict.dashboard.recentActivity}</CardTitle>
                        <CardDescription>{dict.dashboard.latestActions}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {i === 0 ? dict.dashboard.updatedProfile : dict.dashboard.appliedTo + " Frontend Dev"}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {i === 0 ? dict.dashboard.addedExperience : "Tech Corp Inc."}
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium text-xs text-gray-500">
                                        {i === 0 ? dict.dashboard.justNow : dict.dashboard.daysAgo}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Saved Jobs / Recommendations placeholder */}
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>{dict.dashboard.savedJobs}</CardTitle>
                        <CardDescription>{dict.dashboard.interestedJobs}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {[1, 2].map((_, i) => (
                                <div key={i} className="flex flex-col space-y-2 border-b pb-4 last:border-0 last:pb-0">
                                    <div className="flex justify-between">
                                        <h3 className="font-semibold text-sm">Senior React Developer</h3>
                                        <span className="text-xs text-gray-500">Remote</span>
                                    </div>
                                    <div className="flex items-center text-xs text-gray-500 gap-2">
                                        <Building className="w-3 h-3" />
                                        <span>Google Inc.</span>
                                        <MapPin className="w-3 h-3 ml-2" />
                                        <span>California, USA</span>
                                    </div>
                                    <Button size="sm" variant="secondary" className="w-full mt-2">Apply Now</Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}
