import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserProfileData } from "@/types";

interface StepProps {
    formData: UserProfileData;
    updateFormData: (data: Partial<UserProfileData>) => void;
}

export function Skills({ formData, updateFormData }: StepProps) {
    // Simple comma separated handling for now
    const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const skillsString = e.target.value;
        // We store it as an array in the state
        const skillsArray = skillsString.split(",").map((s) => s.trim()).filter(Boolean);
        updateFormData({ skills: skillsArray });
    };

    return (
        <div className="grid gap-6">
            <div className="grid gap-2">
                <Label htmlFor="skills">Skills</Label>
                <p className="text-sm text-muted-foreground">
                    Enter your skills separated by commas (e.g. React, TypeScript, Node.js)
                </p>
                <Input
                    id="skills"
                    defaultValue={formData.skills.join(", ")}
                    onChange={handleSkillsChange}
                    placeholder="React, TypeScript, CSS..."
                />
            </div>

            <div className="mt-4">
                <Label>Preview of Skills:</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                    {formData.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                        >
                            {skill}
                        </span>
                    ))}
                    {formData.skills.length === 0 && (
                        <span className="text-sm text-muted-foreground italic">No skills added yet</span>
                    )}
                </div>
            </div>
        </div>
    );
}
