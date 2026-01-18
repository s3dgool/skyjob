"use client";

import { use, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserProfileData, initialUserProfileData } from "@/types";
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Building, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PublicProfile({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [profile, setProfile] = useState<UserProfileData>(initialUserProfileData);
    const { dict } = useLanguage();

    // In a real app, fetch data based on ID
    // For now, we use initial/dummy data

    return (
        <div className="container py-10 max-w-5xl">
            <div className="grid gap-6 md:grid-cols-3">
                {/* Left Column: Personal Info */}
                <div className="md:col-span-1 space-y-6">
                    <Card>
                        <CardContent className="pt-6 flex flex-col items-center text-center">
                            <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-4xl text-gray-500">
                                {profile.firstName ? profile.firstName[0] : "U"}
                            </div>
                            <h1 className="text-2xl font-bold">{profile.firstName} {profile.lastName}</h1>
                            <p className="text-gray-500">{profile.currentJobTitle || "Job Seeker"}</p>

                            <div className="w-full mt-6 space-y-3 text-left">
                                {profile.email && (
                                    <div className="flex items-center gap-2 text-sm">
                                        <Mail className="w-4 h-4 text-gray-500" />
                                        <span>{profile.email}</span>
                                    </div>
                                )}
                                {profile.phone && (
                                    <div className="flex items-center gap-2 text-sm">
                                        <Phone className="w-4 h-4 text-gray-500" />
                                        <span>{profile.phone}</span>
                                    </div>
                                )}
                                {(profile.city || profile.country) && (
                                    <div className="flex items-center gap-2 text-sm">
                                        <MapPin className="w-4 h-4 text-gray-500" />
                                        <span>{profile.city}, {profile.country}</span>
                                    </div>
                                )}
                            </div>

                            <div className="w-full mt-6 flex justify-center gap-4">
                                {profile.linkedin && (
                                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600" aria-label="LinkedIn Profile">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                )}
                                {profile.github && (
                                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="GitHub Profile">
                                        <Github className="w-5 h-5" />
                                    </a>
                                )}
                                {profile.portfolio && (
                                    <a href={profile.portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600" aria-label="Portfolio Website">
                                        <Globe className="w-5 h-5" />
                                    </a>
                                )}
                            </div>

                            <Button className="w-full mt-6">{dict.profile.contactMe}</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">{dict.profile.skills}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {profile.skills.map((skill, i) => (
                                    <div key={i} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                                        {skill}
                                    </div>
                                ))}
                                {profile.skills.length === 0 && <p className="text-sm text-gray-500">No skills listed</p>}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: Experience and Education */}
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>{dict.profile.workExperience}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {profile.workExperience.map((work, index) => (
                                <div key={index} className="flex gap-4 border-b pb-4 last:border-0 last:pb-0">
                                    <div className="mt-1 bg-primary/10 p-2 rounded h-fit">
                                        <Building className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{work.position}</h3>
                                        <p className="font-medium text-gray-700 dark:text-gray-300">{work.company}</p>
                                        <p className="text-sm text-gray-500">
                                            {work.startDate} - {work.current ? dict.profile.present : work.endDate}
                                        </p>
                                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                            {work.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            {profile.workExperience.length === 0 && (
                                <p className="text-gray-500 italic">No work experience listed.</p>
                            )}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>{dict.profile.education}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {profile.education.map((edu, index) => (
                                <div key={index} className="flex gap-4 border-b pb-4 last:border-0 last:pb-0">
                                    <div className="mt-1 bg-primary/10 p-2 rounded h-fit">
                                        <GraduationCap className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{edu.institution}</h3>
                                        <p className="font-medium text-gray-700 dark:text-gray-300">{edu.degree} in {edu.fieldOfStudy}</p>
                                        <p className="text-sm text-gray-500">
                                            {edu.startDate} - {edu.endDate}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            {profile.education.length === 0 && (
                                <p className="text-gray-500 italic">No education listed.</p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
