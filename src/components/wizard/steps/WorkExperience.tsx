import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserProfileData, WorkExperienceEntry } from "@/types";
import { Plus, Trash2 } from "lucide-react";

interface StepProps {
    formData: UserProfileData;
    updateFormData: (data: Partial<UserProfileData>) => void;
}

export function WorkExperience({ formData, updateFormData }: StepProps) {
    const addWorkExperience = () => {
        const newWork: WorkExperienceEntry = {
            id: crypto.randomUUID(),
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            description: "",
        };
        updateFormData({ workExperience: [...formData.workExperience, newWork] });
    };

    const removeWorkExperience = (id: string) => {
        updateFormData({
            workExperience: formData.workExperience.filter((work) => work.id !== id),
        });
    };

    const updateWork = (id: string, field: keyof WorkExperienceEntry, value: string) => {
        updateFormData({
            workExperience: formData.workExperience.map((work) =>
                work.id === id ? { ...work, [field]: value } : work
            ),
        });
    };

    return (
        <div className="grid gap-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Work Experience</h3>
                <Button onClick={addWorkExperience} size="sm" variant="outline">
                    <Plus className="mr-2 h-4 w-4" /> Add Position
                </Button>
            </div>

            {formData.workExperience.length === 0 && (
                <div className="text-center text-sm text-muted-foreground p-8 border rounded-md border-dashed">
                    No work experience added yet. Click "Add Position" to add your history.
                </div>
            )}

            {formData.workExperience.map((work) => (
                <div key={work.id} className="relative grid gap-4 rounded-md border p-4">
                    <div className="absolute right-4 top-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeWorkExperience(work.id)}
                            className="text-destructive"
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="grid gap-2">
                        <Label>Company</Label>
                        <Input
                            value={work.company}
                            onChange={(e) => updateWork(work.id, "company", e.target.value)}
                            placeholder="Acme Corp"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label>Position / Title</Label>
                        <Input
                            value={work.position}
                            onChange={(e) => updateWork(work.id, "position", e.target.value)}
                            placeholder="Software Engineer"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Start Date</Label>
                            <Input
                                type="date"
                                value={work.startDate}
                                onChange={(e) => updateWork(work.id, "startDate", e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label>End Date</Label>
                            <Input
                                type="date"
                                value={work.endDate}
                                onChange={(e) => updateWork(work.id, "endDate", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label>Description</Label>
                        <textarea
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={work.description}
                            onChange={(e) => updateWork(work.id, "description", e.target.value)}
                            placeholder="Describe your responsibilities..."
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
