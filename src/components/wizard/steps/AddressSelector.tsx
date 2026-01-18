import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserProfileData } from "@/types";

interface StepProps {
    formData: UserProfileData;
    updateFormData: (data: Partial<UserProfileData>) => void;
}

export function AddressSelector({ formData, updateFormData }: StepProps) {
    return (
        <div className="grid gap-6">
            <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => updateFormData({ country: e.target.value })}
                    placeholder="Select Country"
                />
                <p className="text-xs text-muted-foreground">We will use a dropdown here in the future.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="state">State / Province</Label>
                    <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => updateFormData({ state: e.target.value })}
                        placeholder="State"
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => updateFormData({ city: e.target.value })}
                        placeholder="City"
                    />
                </div>
            </div>
        </div>
    );
}
