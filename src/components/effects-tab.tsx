"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import type { ProductSettings } from "../types/product-settings";

interface EffectsTabProps {
    settings: ProductSettings;
    updateSettings: (settings: Partial<ProductSettings>) => void;
}

export function EffectsTab({ settings, updateSettings }: EffectsTabProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Effects</CardTitle>
                <CardDescription>
                    Configure visual effects and styling
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="lut">LUT</Label>
                        <Select
                            value={settings.lut}
                            onValueChange={(value) =>
                                updateSettings({ lut: value })
                            }
                        >
                            <SelectTrigger id="lut">
                                <SelectValue placeholder="Select LUT" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="none">None</SelectItem>
                                <SelectItem value="cool">Cool</SelectItem>
                                <SelectItem value="warm">Warm</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
