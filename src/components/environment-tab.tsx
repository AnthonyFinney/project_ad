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

interface EnvironmentTabProps {
    settings: ProductSettings;
    updateSettings: (settings: Partial<ProductSettings>) => void;
}

export function EnvironmentTab({
    settings,
    updateSettings,
}: EnvironmentTabProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Environment Settings</CardTitle>
                <CardDescription>
                    Configure lighting and background
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="background">Background</Label>
                        <Select
                            value={settings.background}
                            onValueChange={(value) =>
                                updateSettings({ background: value })
                            }
                        >
                            <SelectTrigger id="background">
                                <SelectValue placeholder="Select background" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="white">White</SelectItem>
                                <SelectItem value="black">Black</SelectItem>
                                <SelectItem value="gray">Gray</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="hdriPreset">HDRI Preset</Label>
                        <Select
                            value={settings.hdriPreset}
                            onValueChange={(value) =>
                                updateSettings({ hdriPreset: value })
                            }
                        >
                            <SelectTrigger id="hdriPreset">
                                <SelectValue placeholder="Select HDRI" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="studio1">
                                    Studio 1
                                </SelectItem>
                                <SelectItem value="studio2">
                                    Studio 2
                                </SelectItem>
                                <SelectItem value="outdoor">Outdoor</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="hdrRotation">
                                HDR Rotation: {settings.hdrRotation}°
                            </Label>
                        </div>
                        <Slider
                            id="hdrRotation"
                            min={0}
                            max={359}
                            step={1}
                            value={[settings.hdrRotation]}
                            onValueChange={(value) =>
                                updateSettings({ hdrRotation: value[0] })
                            }
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lightSetup">Light Setup</Label>
                        <Select
                            value={settings.lightSetup}
                            onValueChange={(value) =>
                                updateSettings({ lightSetup: value })
                            }
                        >
                            <SelectTrigger id="lightSetup">
                                <SelectValue placeholder="Select setup" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="three-point">
                                    Three-Point
                                </SelectItem>
                                <SelectItem value="natural">Natural</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="goboPattern">Gobo Pattern</Label>
                        <Select
                            value={settings.goboPattern}
                            onValueChange={(value) =>
                                updateSettings({ goboPattern: value })
                            }
                        >
                            <SelectTrigger id="goboPattern">
                                <SelectValue placeholder="Select pattern" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="none">None</SelectItem>
                                <SelectItem value="pattern1">
                                    Pattern 1
                                </SelectItem>
                                <SelectItem value="pattern2">
                                    Pattern 2
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="shadowIntensity">
                                Shadow Intensity: {settings.shadowIntensity}%
                            </Label>
                        </div>
                        <Slider
                            id="shadowIntensity"
                            min={0}
                            max={100}
                            step={1}
                            value={[settings.shadowIntensity]}
                            onValueChange={(value) =>
                                updateSettings({ shadowIntensity: value[0] })
                            }
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="reflectionIntensity">
                                Reflection Intensity:{" "}
                                {settings.reflectionIntensity}%
                            </Label>
                        </div>
                        <Slider
                            id="reflectionIntensity"
                            min={0}
                            max={100}
                            step={1}
                            value={[settings.reflectionIntensity]}
                            onValueChange={(value) =>
                                updateSettings({
                                    reflectionIntensity: value[0],
                                })
                            }
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
