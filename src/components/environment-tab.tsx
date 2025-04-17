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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
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
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Environment Settings</CardTitle>
                    <CardDescription>
                        Professional lighting and scene setup for luxury product
                        photography
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Tabs defaultValue="lighting" className="w-full">
                        <TabsList className="grid grid-cols-3 mb-4">
                            <TabsTrigger value="lighting">Lighting</TabsTrigger>
                            <TabsTrigger value="scene">Scene</TabsTrigger>
                            <TabsTrigger value="atmosphere">
                                Atmosphere
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="lighting" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="lightSetup">
                                        Lighting Setup
                                    </Label>
                                    <Select
                                        value={settings.lightSetup}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                lightSetup: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="lightSetup">
                                            <SelectValue placeholder="Select setup" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="three-point">
                                                Three-Point
                                            </SelectItem>
                                            <SelectItem value="rembrandt">
                                                Rembrandt
                                            </SelectItem>
                                            <SelectItem value="butterfly">
                                                Butterfly/Paramount
                                            </SelectItem>
                                            <SelectItem value="loop">
                                                Loop Lighting
                                            </SelectItem>
                                            <SelectItem value="split">
                                                Split Lighting
                                            </SelectItem>
                                            <SelectItem value="rim">
                                                Rim/Edge Lighting
                                            </SelectItem>
                                            <SelectItem value="broad">
                                                Broad Lighting
                                            </SelectItem>
                                            <SelectItem value="natural">
                                                Natural Light
                                            </SelectItem>
                                            <SelectItem value="soft-box">
                                                Soft Box
                                            </SelectItem>
                                            <SelectItem value="beauty-dish">
                                                Beauty Dish
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lightQuality">
                                        Light Quality
                                    </Label>
                                    <Select
                                        value={settings.lightQuality || "soft"}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                lightQuality: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="lightQuality">
                                            <SelectValue placeholder="Select light quality" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="soft">
                                                Soft Light
                                            </SelectItem>
                                            <SelectItem value="hard">
                                                Hard Light
                                            </SelectItem>
                                            <SelectItem value="diffused">
                                                Diffused Light
                                            </SelectItem>
                                            <SelectItem value="directional">
                                                Directional Light
                                            </SelectItem>
                                            <SelectItem value="dramatic">
                                                Dramatic Light
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lightColor">
                                        Light Color Temperature
                                    </Label>
                                    <Select
                                        value={settings.lightColor || "neutral"}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                lightColor: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="lightColor">
                                            <SelectValue placeholder="Select light color" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="warm">
                                                Warm (3000K)
                                            </SelectItem>
                                            <SelectItem value="neutral">
                                                Neutral (5000K)
                                            </SelectItem>
                                            <SelectItem value="cool">
                                                Cool (7000K)
                                            </SelectItem>
                                            <SelectItem value="golden-hour">
                                                Golden Hour
                                            </SelectItem>
                                            <SelectItem value="blue-hour">
                                                Blue Hour
                                            </SelectItem>
                                            <SelectItem value="tungsten">
                                                Tungsten
                                            </SelectItem>
                                            <SelectItem value="fluorescent">
                                                Fluorescent
                                            </SelectItem>
                                            <SelectItem value="daylight">
                                                Daylight
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="hdriPreset">
                                        HDRI Environment
                                    </Label>
                                    <Select
                                        value={settings.hdriPreset}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                hdriPreset: value,
                                            })
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
                                            <SelectItem value="outdoor">
                                                Outdoor
                                            </SelectItem>
                                            <SelectItem value="sunset">
                                                Sunset
                                            </SelectItem>
                                            <SelectItem value="night">
                                                Night
                                            </SelectItem>
                                            <SelectItem value="indoor">
                                                Indoor
                                            </SelectItem>
                                            <SelectItem value="showroom">
                                                Showroom
                                            </SelectItem>
                                            <SelectItem value="jewelry-studio">
                                                Jewelry Studio
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="hdrRotation">
                                            HDRI Rotation:{" "}
                                            {settings.hdrRotation}°
                                        </Label>
                                    </div>
                                    <Slider
                                        id="hdrRotation"
                                        min={0}
                                        max={359}
                                        step={1}
                                        value={[settings.hdrRotation]}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                hdrRotation: value[0],
                                            })
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="goboPattern">
                                        Gobo/Light Pattern
                                    </Label>
                                    <Select
                                        value={settings.goboPattern}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                goboPattern: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="goboPattern">
                                            <SelectValue placeholder="Select pattern" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">
                                                None
                                            </SelectItem>
                                            <SelectItem value="window">
                                                Window Light
                                            </SelectItem>
                                            <SelectItem value="venetian-blinds">
                                                Venetian Blinds
                                            </SelectItem>
                                            <SelectItem value="dappled">
                                                Dappled Light
                                            </SelectItem>
                                            <SelectItem value="geometric">
                                                Geometric Pattern
                                            </SelectItem>
                                            <SelectItem value="organic">
                                                Organic Pattern
                                            </SelectItem>
                                            <SelectItem value="prism">
                                                Prism/Rainbow
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="shadowIntensity">
                                            Shadow Intensity:{" "}
                                            {settings.shadowIntensity}%
                                        </Label>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Info className="h-4 w-4 text-gray-400" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="w-80">
                                                        Controls the darkness
                                                        and definition of
                                                        shadows
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                    <Slider
                                        id="shadowIntensity"
                                        min={0}
                                        max={100}
                                        step={1}
                                        value={[settings.shadowIntensity]}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                shadowIntensity: value[0],
                                            })
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="reflectionIntensity">
                                            Reflection Intensity:{" "}
                                            {settings.reflectionIntensity}%
                                        </Label>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Info className="h-4 w-4 text-gray-400" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="w-80">
                                                        Controls the strength of
                                                        reflections on glass and
                                                        shiny surfaces
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
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
                        </TabsContent>

                        <TabsContent value="scene" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="background">
                                        Background Type
                                    </Label>
                                    <Select
                                        value={settings.background}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                background: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="background">
                                            <SelectValue placeholder="Select background" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="white">
                                                White
                                            </SelectItem>
                                            <SelectItem value="black">
                                                Black
                                            </SelectItem>
                                            <SelectItem value="gray">
                                                Gray
                                            </SelectItem>
                                            <SelectItem value="gradient">
                                                Gradient
                                            </SelectItem>
                                            <SelectItem value="colored">
                                                Colored
                                            </SelectItem>
                                            <SelectItem value="textured">
                                                Textured
                                            </SelectItem>
                                            <SelectItem value="marble">
                                                Marble
                                            </SelectItem>
                                            <SelectItem value="wood">
                                                Wood
                                            </SelectItem>
                                            <SelectItem value="fabric">
                                                Fabric
                                            </SelectItem>
                                            <SelectItem value="transparent">
                                                Transparent
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="backgroundStyle">
                                        Background Style
                                    </Label>
                                    <Select
                                        value={
                                            settings.backgroundStyle ||
                                            "seamless"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                backgroundStyle: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="backgroundStyle">
                                            <SelectValue placeholder="Select background style" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="seamless">
                                                Seamless
                                            </SelectItem>
                                            <SelectItem value="sweep">
                                                Sweep/Infinity
                                            </SelectItem>
                                            <SelectItem value="studio">
                                                Studio Setup
                                            </SelectItem>
                                            <SelectItem value="environmental">
                                                Environmental
                                            </SelectItem>
                                            <SelectItem value="abstract">
                                                Abstract
                                            </SelectItem>
                                            <SelectItem value="minimalist">
                                                Minimalist
                                            </SelectItem>
                                            <SelectItem value="luxury">
                                                Luxury
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="setting">
                                        Setting/Environment
                                    </Label>
                                    <Select
                                        value={settings.setting || "studio"}
                                        onValueChange={(value) =>
                                            updateSettings({ setting: value })
                                        }
                                    >
                                        <SelectTrigger id="setting">
                                            <SelectValue placeholder="Select setting" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="studio">
                                                Studio
                                            </SelectItem>
                                            <SelectItem value="luxury-interior">
                                                Luxury Interior
                                            </SelectItem>
                                            <SelectItem value="desert">
                                                Desert
                                            </SelectItem>
                                            <SelectItem value="forest">
                                                Forest
                                            </SelectItem>
                                            <SelectItem value="beach">
                                                Beach
                                            </SelectItem>
                                            <SelectItem value="urban">
                                                Urban
                                            </SelectItem>
                                            <SelectItem value="abstract">
                                                Abstract
                                            </SelectItem>
                                            <SelectItem value="ethereal">
                                                Ethereal
                                            </SelectItem>
                                            <SelectItem value="cosmic">
                                                Cosmic
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="surface">
                                        Surface/Pedestal
                                    </Label>
                                    <Select
                                        value={settings.surface || "reflective"}
                                        onValueChange={(value) =>
                                            updateSettings({ surface: value })
                                        }
                                    >
                                        <SelectTrigger id="surface">
                                            <SelectValue placeholder="Select surface" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="reflective">
                                                Reflective
                                            </SelectItem>
                                            <SelectItem value="matte">
                                                Matte
                                            </SelectItem>
                                            <SelectItem value="glass">
                                                Glass
                                            </SelectItem>
                                            <SelectItem value="marble">
                                                Marble
                                            </SelectItem>
                                            <SelectItem value="wood">
                                                Wood
                                            </SelectItem>
                                            <SelectItem value="metal">
                                                Metal
                                            </SelectItem>
                                            <SelectItem value="water">
                                                Water
                                            </SelectItem>
                                            <SelectItem value="fabric">
                                                Fabric
                                            </SelectItem>
                                            <SelectItem value="sand">
                                                Sand
                                            </SelectItem>
                                            <SelectItem value="floating">
                                                Floating/Levitating
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="timeOfDay">
                                        Time of Day
                                    </Label>
                                    <Select
                                        value={settings.timeOfDay || "studio"}
                                        onValueChange={(value) =>
                                            updateSettings({ timeOfDay: value })
                                        }
                                    >
                                        <SelectTrigger id="timeOfDay">
                                            <SelectValue placeholder="Select time of day" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="studio">
                                                Studio (Timeless)
                                            </SelectItem>
                                            <SelectItem value="golden-hour">
                                                Golden Hour
                                            </SelectItem>
                                            <SelectItem value="blue-hour">
                                                Blue Hour
                                            </SelectItem>
                                            <SelectItem value="midday">
                                                Midday
                                            </SelectItem>
                                            <SelectItem value="sunset">
                                                Sunset
                                            </SelectItem>
                                            <SelectItem value="night">
                                                Night
                                            </SelectItem>
                                            <SelectItem value="dawn">
                                                Dawn
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="sceneStyle">
                                        Scene Style
                                    </Label>
                                    <Select
                                        value={settings.sceneStyle || "clean"}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                sceneStyle: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="sceneStyle">
                                            <SelectValue placeholder="Select scene style" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="clean">
                                                Clean & Minimal
                                            </SelectItem>
                                            <SelectItem value="luxury">
                                                Luxury & Opulent
                                            </SelectItem>
                                            <SelectItem value="editorial">
                                                Editorial
                                            </SelectItem>
                                            <SelectItem value="lifestyle">
                                                Lifestyle
                                            </SelectItem>
                                            <SelectItem value="dramatic">
                                                Dramatic
                                            </SelectItem>
                                            <SelectItem value="artistic">
                                                Artistic
                                            </SelectItem>
                                            <SelectItem value="surreal">
                                                Surreal
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="atmosphere" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="atmosphere">
                                        Atmospheric Effect
                                    </Label>
                                    <Select
                                        value={settings.atmosphere || "none"}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                atmosphere: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="atmosphere">
                                            <SelectValue placeholder="Select atmosphere" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">
                                                None
                                            </SelectItem>
                                            <SelectItem value="fog">
                                                Fog/Mist
                                            </SelectItem>
                                            <SelectItem value="smoke">
                                                Smoke
                                            </SelectItem>
                                            <SelectItem value="haze">
                                                Haze
                                            </SelectItem>
                                            <SelectItem value="dust">
                                                Dust Particles
                                            </SelectItem>
                                            <SelectItem value="steam">
                                                Steam
                                            </SelectItem>
                                            <SelectItem value="water-droplets">
                                                Water Droplets
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="weatherEffect">
                                        Weather Effect
                                    </Label>
                                    <Select
                                        value={settings.weatherEffect || "none"}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                weatherEffect: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="weatherEffect">
                                            <SelectValue placeholder="Select weather effect" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">
                                                None
                                            </SelectItem>
                                            <SelectItem value="rain">
                                                Rain
                                            </SelectItem>
                                            <SelectItem value="snow">
                                                Snow
                                            </SelectItem>
                                            <SelectItem value="wind">
                                                Wind
                                            </SelectItem>
                                            <SelectItem value="sunbeams">
                                                Sunbeams
                                            </SelectItem>
                                            <SelectItem value="clouds">
                                                Clouds
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="particleEffect">
                                        Particle Effect
                                    </Label>
                                    <Select
                                        value={
                                            settings.particleEffect || "none"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                particleEffect: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="particleEffect">
                                            <SelectValue placeholder="Select particle effect" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">
                                                None
                                            </SelectItem>
                                            <SelectItem value="sparkles">
                                                Sparkles
                                            </SelectItem>
                                            <SelectItem value="glitter">
                                                Glitter
                                            </SelectItem>
                                            <SelectItem value="bubbles">
                                                Bubbles
                                            </SelectItem>
                                            <SelectItem value="petals">
                                                Flower Petals
                                            </SelectItem>
                                            <SelectItem value="dust">
                                                Dust Motes
                                            </SelectItem>
                                            <SelectItem value="embers">
                                                Embers
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="mood">Mood/Ambiance</Label>
                                    <Select
                                        value={settings.mood || "elegant"}
                                        onValueChange={(value) =>
                                            updateSettings({ mood: value })
                                        }
                                    >
                                        <SelectTrigger id="mood">
                                            <SelectValue placeholder="Select mood" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="elegant">
                                                Elegant
                                            </SelectItem>
                                            <SelectItem value="mysterious">
                                                Mysterious
                                            </SelectItem>
                                            <SelectItem value="romantic">
                                                Romantic
                                            </SelectItem>
                                            <SelectItem value="serene">
                                                Serene
                                            </SelectItem>
                                            <SelectItem value="dramatic">
                                                Dramatic
                                            </SelectItem>
                                            <SelectItem value="energetic">
                                                Energetic
                                            </SelectItem>
                                            <SelectItem value="luxurious">
                                                Luxurious
                                            </SelectItem>
                                            <SelectItem value="ethereal">
                                                Ethereal
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2 flex items-center gap-2">
                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            id="useReflection"
                                            checked={
                                                settings.useReflection || false
                                            }
                                            onCheckedChange={(checked) =>
                                                updateSettings({
                                                    useReflection: checked,
                                                })
                                            }
                                        />
                                        <Label htmlFor="useReflection">
                                            Mirror Reflection
                                        </Label>
                                    </div>
                                </div>
                                <div className="space-y-2 flex items-center gap-2">
                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            id="useWaterSurface"
                                            checked={
                                                settings.useWaterSurface ||
                                                false
                                            }
                                            onCheckedChange={(checked) =>
                                                updateSettings({
                                                    useWaterSurface: checked,
                                                })
                                            }
                                        />
                                        <Label htmlFor="useWaterSurface">
                                            Water Surface
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
