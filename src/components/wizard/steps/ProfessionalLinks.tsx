import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserProfileData } from "@/types";
import { Github, Linkedin, Globe } from "lucide-react";

interface StepProps {
    formData: UserProfileData;
    updateFormData: (data: Partial<UserProfileData>) => void;
}

export function ProfessionalLinks({ formData, updateFormData }: StepProps) {
    return (
        <div className="grid gap-6">
            <div className="grid gap-2">
                <Label htmlFor="linkedin" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" /> LinkedIn Profile
                </Label>
                <Input
                    id="linkedin"
                    value={formData.linkedin}
                    onChange={(e) => updateFormData({ linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="github" className="flex items-center gap-2">
                    <Github className="h-4 w-4" /> GitHub Profile
                </Label>
                <Input
                    id="github"
                    value={formData.github}
                    onChange={(e) => updateFormData({ github: e.target.value })}
                    placeholder="https://github.com/username"
                />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="portfolio" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" /> Portfolio / Website
                </Label>
                <Input
                    id="portfolio"
                    value={formData.portfolio}
                    onChange={(e) => updateFormData({ portfolio: e.target.value })}
                    placeholder="https://yourportfolio.com"
                />
            </div>
        </div>
    );
}
