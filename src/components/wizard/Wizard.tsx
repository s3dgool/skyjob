"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { UserProfileData, initialUserProfileData } from "@/types";
import { PersonalDetails } from "./steps/PersonalDetails";
import { ProfessionalLinks } from "./steps/ProfessionalLinks";
import { AddressSelector } from "./steps/AddressSelector";
import { Education } from "./steps/Education";
import { WorkExperience } from "./steps/WorkExperience";
import { Skills } from "./steps/Skills";
import { useLanguage } from "@/context/LanguageContext";

export function Wizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<UserProfileData>(initialUserProfileData);
    const { dict, direction } = useLanguage();

    const updateFormData = (newData: Partial<UserProfileData>) => {
        setFormData((prev) => ({ ...prev, ...newData }));
    };

    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <PersonalDetails formData={formData} updateFormData={updateFormData} />;
            case 2:
                return <ProfessionalLinks formData={formData} updateFormData={updateFormData} />;
            case 3:
                return <AddressSelector formData={formData} updateFormData={updateFormData} />;
            case 4:
                return <Education formData={formData} updateFormData={updateFormData} />;
            case 5:
                return <WorkExperience formData={formData} updateFormData={updateFormData} />;
            case 6:
                return <Skills formData={formData} updateFormData={updateFormData} />;
            default:
                return <div>Step {currentStep} coming soon</div>;
        }
    };

    // Helper to get step title
    const getStepTitle = () => {
        switch (currentStep) {
            case 1: return dict.wizard.steps.personal;
            case 2: return dict.wizard.steps.links;
            case 3: return dict.wizard.steps.address;
            case 4: return dict.wizard.steps.education;
            case 5: return dict.wizard.steps.work;
            case 6: return dict.wizard.steps.skills;
            default: return "";
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50/50 p-4 dark:bg-gray-900/50" dir={direction}>
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle>{dict.wizard.title} - {getStepTitle()}</CardTitle>
                    <CardDescription>{dict.wizard.step} {currentStep} {dict.wizard.max} 6</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="mb-6">
                        <Progress value={(currentStep / 6) * 100} className="h-2" />
                    </div>

                    {renderStep()}

                    <div className="mt-8 flex justify-between">
                        <Button
                            variant="outline"
                            onClick={prevStep}
                            disabled={currentStep === 1}
                        >
                            {dict.wizard.previous}
                        </Button>
                        {currentStep < 6 ? (
                            <Button onClick={nextStep}>{dict.wizard.next}</Button>
                        ) : (
                            <Button>{dict.wizard.submit}</Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
