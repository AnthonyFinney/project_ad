"use client";

import { Info } from "lucide-react";
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
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ProductSettings } from "../types/product-settings";

interface CameraTabProps {
    settings: ProductSettings;
    updateSettings: (settings: Partial<ProductSettings>) => void;
}

export function CameraTab({ settings, updateSettings }: CameraTabProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Camera Settings</CardTitle>
                <CardDescription>
                    Configure the virtual camera parameters
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="focalLength">
                                Focal Length: {settings.focalLength}mm
                            </Label>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info className="h-4 w-4 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="w-80">
                                            Higher values create more
                                            compression and background blur
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <Slider
                            id="focalLength"
                            min={24}
                            max={200}
                            step={1}
                            value={[settings.focalLength]}
                            onValueChange={(value) =>
                                updateSettings({ focalLength: value[0] })
                            }
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="aperture">
                                Aperture: f/{settings.aperture}
                            </Label>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info className="h-4 w-4 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="w-80">
                                            Lower values create more background
                                            blur
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <Slider
                            id="aperture"
                            min={1.4}
                            max={16}
                            step={0.1}
                            value={[settings.aperture]}
                            onValueChange={(value) =>
                                updateSettings({ aperture: value[0] })
                            }
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="angle">
                                Camera Angle: {settings.angle}°
                            </Label>
                        </div>
                        <Slider
                            id="angle"
                            min={0}
                            max={90}
                            step={1}
                            value={[settings.angle]}
                            onValueChange={(value) =>
                                updateSettings({ angle: value[0] })
                            }
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="bokehShape">Bokeh Shape</Label>
                        <Select
                            value={settings.bokehShape}
                            onValueChange={(value) =>
                                updateSettings({ bokehShape: value })
                            }
                        >
                            <SelectTrigger id="bokehShape">
                                <SelectValue placeholder="Select shape" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="circle">Circle</SelectItem>
                                <SelectItem value="hexagon">Hexagon</SelectItem>
                                <SelectItem value="star">Star</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
