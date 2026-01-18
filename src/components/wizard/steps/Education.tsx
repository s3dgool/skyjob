import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserProfileData, EducationEntry } from "@/types";
import { Plus, Trash2 } from "lucide-react";

interface StepProps {
    formData: UserProfileData;
    updateFormData: (data: Partial<UserProfileData>) => void;
}

export function Education({ formData, updateFormData }: StepProps) {
    const addEducation = () => {
        const newEducation: EducationEntry = {
            id: crypto.randomUUID(),
            institution: "",
            degree: "",
            fieldOfStudy: "",
            startDate: "",
            endDate: "",
            description: "",
        };
        updateFormData({ education: [...formData.education, newEducation] });
    };

    const removeEducation = (id: string) => {
        updateFormData({
            education: formData.education.filter((edu) => edu.id !== id),
        });
    };

    const updateEducation = (id: string, field: keyof EducationEntry, value: string) => {
        updateFormData({
            education: formData.education.map((edu) =>
                edu.id === id ? { ...edu, [field]: value } : edu
            ),
        });
    };

    return (
        <div className="grid gap-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Education History</h3>
                <Button onClick={addEducation} size="sm" variant="outline">
                    <Plus className="mr-2 h-4 w-4" /> Add Education
                </Button>
            </div>

            {formData.education.length === 0 && (
                <div className="text-center text-sm text-muted-foreground p-8 border rounded-md border-dashed">
                    No education added yet. Click "Add Education" to start.
                </div>
            )}

            {formData.education.map((edu, index) => (
                <div key={edu.id} className="relative grid gap-4 rounded-md border p-4">
                    <div className="absolute right-4 top-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeEducation(edu.id)}
                            className="text-destructive"
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="grid gap-2">
                        <Label>Institution / School</Label>
                        <Input
                            value={edu.institution}
                            onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                            placeholder="University of SkyJob"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Degree</Label>
                            <Input
                                value={edu.degree}
                                onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                                placeholder="Bachelor's"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label>Field of Study</Label>
                            <Input
                                value={edu.fieldOfStudy}
                                onChange={(e) => updateEducation(edu.id, "fieldOfStudy", e.target.value)}
                                placeholder="Computer Science"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Start Date</Label>
                            <Input
                                type="date"
                                value={edu.startDate}
                                onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label>End Date</Label>
                            <Input
                                type="date"
                                value={edu.endDate}
                                onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
