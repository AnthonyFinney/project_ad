"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import type { ProductSettings } from "../types/product-settings";

interface TextTabProps {
    settings: ProductSettings;
    updateSettings: (settings: Partial<ProductSettings>) => void;
}

export function TextTab({ settings, updateSettings }: TextTabProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Text Overlay</CardTitle>
                <CardDescription>
                    Add text elements to your advertisement
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="headline">Headline</Label>
                        <Input
                            id="headline"
                            type="text"
                            value={settings.headline}
                            onChange={(e) =>
                                updateSettings({ headline: e.target.value })
                            }
                            placeholder="Main headline text"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="tagline">Tagline</Label>
                        <Input
                            id="tagline"
                            type="text"
                            value={settings.tagline}
                            onChange={(e) =>
                                updateSettings({ tagline: e.target.value })
                            }
                            placeholder="Supporting tagline"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="ctaText">CTA Text</Label>
                        <Input
                            id="ctaText"
                            type="text"
                            value={settings.ctaText}
                            onChange={(e) =>
                                updateSettings({ ctaText: e.target.value })
                            }
                            placeholder="Call to action text"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="ctaPosition">CTA Position</Label>
                        <Select
                            value={settings.ctaPosition}
                            onValueChange={(value) =>
                                updateSettings({ ctaPosition: value })
                            }
                        >
                            <SelectTrigger id="ctaPosition">
                                <SelectValue placeholder="Select position" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="bottom-right">
                                    Bottom Right
                                </SelectItem>
                                <SelectItem value="bottom-left">
                                    Bottom Left
                                </SelectItem>
                                <SelectItem value="top-right">
                                    Top Right
                                </SelectItem>
                                <SelectItem value="top-left">
                                    Top Left
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-2 pt-2">
                        <Switch
                            id="watermark"
                            checked={settings.watermark}
                            onCheckedChange={(checked) =>
                                updateSettings({ watermark: checked })
                            }
                        />
                        <Label htmlFor="watermark">Add Watermark</Label>
                    </div>
                    {settings.watermark && (
                        <div className="space-y-2">
                            <Label htmlFor="watermarkText">
                                Watermark Text
                            </Label>
                            <Input
                                id="watermarkText"
                                type="text"
                                value={settings.watermarkText}
                                onChange={(e) =>
                                    updateSettings({
                                        watermarkText: e.target.value,
                                    })
                                }
                                placeholder="Watermark Text"
                            />
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
