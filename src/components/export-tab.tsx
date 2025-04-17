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
import { Slider } from "@/components/ui/slider";
import type { ProductSettings } from "../types/product-settings";

interface ExportTabProps {
    settings: ProductSettings;
    updateSettings: (settings: Partial<ProductSettings>) => void;
}

export function ExportTab({ settings, updateSettings }: ExportTabProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Export Settings</CardTitle>
                <CardDescription>
                    Configure output format and quality
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="resolution">Resolution</Label>
                        <Select
                            value={settings.resolution}
                            onValueChange={(value) =>
                                updateSettings({ resolution: value })
                            }
                        >
                            <SelectTrigger id="resolution">
                                <SelectValue placeholder="Select resolution" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="512x512">512x512</SelectItem>
                                <SelectItem value="1024x1024">
                                    1024x1024
                                </SelectItem>
                                <SelectItem value="2048x2048">
                                    2048x2048
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="format">Format</Label>
                        <Select
                            value={settings.format}
                            onValueChange={(value) =>
                                updateSettings({ format: value })
                            }
                        >
                            <SelectTrigger id="format">
                                <SelectValue placeholder="Select format" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="PNG">PNG</SelectItem>
                                <SelectItem value="JPG">JPG</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="dpi">DPI: {settings.dpi}</Label>
                        </div>
                        <Slider
                            id="dpi"
                            min={72}
                            max={600}
                            step={1}
                            value={[settings.dpi]}
                            onValueChange={(value) =>
                                updateSettings({ dpi: value[0] })
                            }
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
