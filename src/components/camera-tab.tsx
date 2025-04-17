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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import type { ProductSettings } from "../types/product-settings";

interface CameraTabProps {
    settings: ProductSettings;
    updateSettings: (settings: Partial<ProductSettings>) => void;
}

export function CameraTab({ settings, updateSettings }: CameraTabProps) {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Camera Settings</CardTitle>
                    <CardDescription>
                        Professional photography parameters for product shots
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Tabs defaultValue="lens" className="w-full">
                        <TabsList className="grid grid-cols-3 mb-4">
                            <TabsTrigger value="lens">Lens & Focus</TabsTrigger>
                            <TabsTrigger value="composition">
                                Composition
                            </TabsTrigger>
                            <TabsTrigger value="technique">
                                Technique
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="lens" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="focalLength">
                                            Focal Length: {settings.focalLength}
                                            mm
                                        </Label>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Info className="h-4 w-4 text-gray-400" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="w-80">
                                                        Higher values create
                                                        more compression and
                                                        background blur. Product
                                                        photography often uses
                                                        85-100mm.
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
                                            updateSettings({
                                                focalLength: value[0],
                                            })
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
                                                        Lower values create more
                                                        background blur. Product
                                                        shots often use f/8-f/11
                                                        for sharpness.
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
                                            updateSettings({
                                                aperture: value[0],
                                            })
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lensType">Lens Type</Label>
                                    <Select
                                        value={settings.lensType || "macro"}
                                        onValueChange={(value) =>
                                            updateSettings({ lensType: value })
                                        }
                                    >
                                        <SelectTrigger id="lensType">
                                            <SelectValue placeholder="Select lens type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="macro">
                                                Macro Lens
                                            </SelectItem>
                                            <SelectItem value="prime">
                                                Prime Lens
                                            </SelectItem>
                                            <SelectItem value="telephoto">
                                                Telephoto Lens
                                            </SelectItem>
                                            <SelectItem value="wide-angle">
                                                Wide Angle Lens
                                            </SelectItem>
                                            <SelectItem value="tilt-shift">
                                                Tilt-Shift Lens
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="bokehShape">
                                        Bokeh Shape
                                    </Label>
                                    <Select
                                        value={settings.bokehShape}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                bokehShape: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="bokehShape">
                                            <SelectValue placeholder="Select shape" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="circle">
                                                Circle
                                            </SelectItem>
                                            <SelectItem value="hexagon">
                                                Hexagon
                                            </SelectItem>
                                            <SelectItem value="octagon">
                                                Octagon
                                            </SelectItem>
                                            <SelectItem value="star">
                                                Star
                                            </SelectItem>
                                            <SelectItem value="heart">
                                                Heart
                                            </SelectItem>
                                            <SelectItem value="creamy">
                                                Creamy
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="focusPoint">
                                            Focus Point
                                        </Label>
                                    </div>
                                    <Select
                                        value={settings.focusPoint || "center"}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                focusPoint: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="focusPoint">
                                            <SelectValue placeholder="Select focus point" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="center">
                                                Center
                                            </SelectItem>
                                            <SelectItem value="cap">
                                                Bottle Cap
                                            </SelectItem>
                                            <SelectItem value="label">
                                                Label
                                            </SelectItem>
                                            <SelectItem value="liquid">
                                                Liquid
                                            </SelectItem>
                                            <SelectItem value="reflection">
                                                Reflection
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="depthOfField">
                                            Depth of Field
                                        </Label>
                                    </div>
                                    <Select
                                        value={
                                            settings.depthOfField || "medium"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                depthOfField: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="depthOfField">
                                            <SelectValue placeholder="Select depth of field" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="shallow">
                                                Shallow (Blurred Background)
                                            </SelectItem>
                                            <SelectItem value="medium">
                                                Medium
                                            </SelectItem>
                                            <SelectItem value="deep">
                                                Deep (Everything in Focus)
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="composition" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                    <Label htmlFor="perspective">
                                        Perspective
                                    </Label>
                                    <Select
                                        value={
                                            settings.perspective || "front-view"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                perspective: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="perspective">
                                            <SelectValue placeholder="Select perspective" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="front-view">
                                                Front View
                                            </SelectItem>
                                            <SelectItem value="three-quarter">
                                                Three-Quarter View
                                            </SelectItem>
                                            <SelectItem value="side-view">
                                                Side View
                                            </SelectItem>
                                            <SelectItem value="top-down">
                                                Top Down
                                            </SelectItem>
                                            <SelectItem value="bottom-up">
                                                Bottom Up
                                            </SelectItem>
                                            <SelectItem value="dutch-angle">
                                                Dutch Angle
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="composition">
                                        Composition
                                    </Label>
                                    <Select
                                        value={
                                            settings.composition || "centered"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                composition: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="composition">
                                            <SelectValue placeholder="Select composition" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="centered">
                                                Centered
                                            </SelectItem>
                                            <SelectItem value="rule-of-thirds">
                                                Rule of Thirds
                                            </SelectItem>
                                            <SelectItem value="golden-ratio">
                                                Golden Ratio
                                            </SelectItem>
                                            <SelectItem value="diagonal">
                                                Diagonal
                                            </SelectItem>
                                            <SelectItem value="symmetrical">
                                                Symmetrical
                                            </SelectItem>
                                            <SelectItem value="asymmetrical">
                                                Asymmetrical
                                            </SelectItem>
                                            <SelectItem value="negative-space">
                                                Negative Space
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="framing">Framing</Label>
                                    <Select
                                        value={settings.framing || "tight"}
                                        onValueChange={(value) =>
                                            updateSettings({ framing: value })
                                        }
                                    >
                                        <SelectTrigger id="framing">
                                            <SelectValue placeholder="Select framing" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="tight">
                                                Tight (Close-up)
                                            </SelectItem>
                                            <SelectItem value="medium">
                                                Medium
                                            </SelectItem>
                                            <SelectItem value="wide">
                                                Wide
                                            </SelectItem>
                                            <SelectItem value="extreme-close-up">
                                                Extreme Close-up
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="foreground">
                                        Foreground Elements
                                    </Label>
                                    <Select
                                        value={settings.foreground || "none"}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                foreground: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="foreground">
                                            <SelectValue placeholder="Select foreground elements" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">
                                                None
                                            </SelectItem>
                                            <SelectItem value="blur">
                                                Blur/Bokeh
                                            </SelectItem>
                                            <SelectItem value="glass">
                                                Glass Elements
                                            </SelectItem>
                                            <SelectItem value="fabric">
                                                Fabric
                                            </SelectItem>
                                            <SelectItem value="water-droplets">
                                                Water Droplets
                                            </SelectItem>
                                            <SelectItem value="flowers">
                                                Flowers
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="background">
                                        Background Elements
                                    </Label>
                                    <Select
                                        value={
                                            settings.backgroundElements ||
                                            "none"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                backgroundElements: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="background">
                                            <SelectValue placeholder="Select background elements" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">
                                                None
                                            </SelectItem>
                                            <SelectItem value="blur">
                                                Blur/Bokeh
                                            </SelectItem>
                                            <SelectItem value="gradient">
                                                Gradient
                                            </SelectItem>
                                            <SelectItem value="abstract">
                                                Abstract
                                            </SelectItem>
                                            <SelectItem value="nature">
                                                Nature
                                            </SelectItem>
                                            <SelectItem value="luxury">
                                                Luxury Interior
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="technique" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="cameraMovement">
                                        Camera Movement
                                    </Label>
                                    <Select
                                        value={
                                            settings.cameraMovement || "static"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                cameraMovement: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="cameraMovement">
                                            <SelectValue placeholder="Select camera movement" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="static">
                                                Static
                                            </SelectItem>
                                            <SelectItem value="dolly-zoom">
                                                Dolly Zoom
                                            </SelectItem>
                                            <SelectItem value="tracking">
                                                Tracking Shot
                                            </SelectItem>
                                            <SelectItem value="panning">
                                                Panning
                                            </SelectItem>
                                            <SelectItem value="rotating">
                                                Rotating
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="photographyStyle">
                                        Photography Style
                                    </Label>
                                    <Select
                                        value={
                                            settings.photographyStyle ||
                                            "product"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                photographyStyle: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="photographyStyle">
                                            <SelectValue placeholder="Select photography style" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="product">
                                                Product Photography
                                            </SelectItem>
                                            <SelectItem value="still-life">
                                                Still Life
                                            </SelectItem>
                                            <SelectItem value="fashion">
                                                Fashion Editorial
                                            </SelectItem>
                                            <SelectItem value="commercial">
                                                Commercial
                                            </SelectItem>
                                            <SelectItem value="minimalist">
                                                Minimalist
                                            </SelectItem>
                                            <SelectItem value="lifestyle">
                                                Lifestyle
                                            </SelectItem>
                                            <SelectItem value="fine-art">
                                                Fine Art
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="photographerReference">
                                        Photographer Reference
                                    </Label>
                                    <Select
                                        value={
                                            settings.photographerReference ||
                                            "none"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                photographerReference: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="photographerReference">
                                            <SelectValue placeholder="Select photographer style" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">
                                                None
                                            </SelectItem>
                                            <SelectItem value="irving-penn">
                                                Irving Penn
                                            </SelectItem>
                                            <SelectItem value="richard-avedon">
                                                Richard Avedon
                                            </SelectItem>
                                            <SelectItem value="annie-leibovitz">
                                                Annie Leibovitz
                                            </SelectItem>
                                            <SelectItem value="tim-walker">
                                                Tim Walker
                                            </SelectItem>
                                            <SelectItem value="nick-knight">
                                                Nick Knight
                                            </SelectItem>
                                            <SelectItem value="mario-testino">
                                                Mario Testino
                                            </SelectItem>
                                            <SelectItem value="peter-lippmann">
                                                Peter Lippmann
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="exposureStyle">
                                        Exposure Style
                                    </Label>
                                    <Select
                                        value={
                                            settings.exposureStyle || "normal"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                exposureStyle: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="exposureStyle">
                                            <SelectValue placeholder="Select exposure style" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="normal">
                                                Normal
                                            </SelectItem>
                                            <SelectItem value="high-key">
                                                High Key
                                            </SelectItem>
                                            <SelectItem value="low-key">
                                                Low Key
                                            </SelectItem>
                                            <SelectItem value="overexposed">
                                                Overexposed
                                            </SelectItem>
                                            <SelectItem value="underexposed">
                                                Underexposed
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2 flex items-center gap-2">
                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            id="useFilmGrain"
                                            checked={
                                                settings.useFilmGrain || false
                                            }
                                            onCheckedChange={(checked) =>
                                                updateSettings({
                                                    useFilmGrain: checked,
                                                })
                                            }
                                        />
                                        <Label htmlFor="useFilmGrain">
                                            Film Grain
                                        </Label>
                                    </div>
                                </div>
                                <div className="space-y-2 flex items-center gap-2">
                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            id="useVignette"
                                            checked={
                                                settings.useVignette || false
                                            }
                                            onCheckedChange={(checked) =>
                                                updateSettings({
                                                    useVignette: checked,
                                                })
                                            }
                                        />
                                        <Label htmlFor="useVignette">
                                            Vignette
                                        </Label>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}
