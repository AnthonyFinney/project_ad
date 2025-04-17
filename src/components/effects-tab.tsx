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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import type { ProductSettings } from "../types/product-settings";

interface EffectsTabProps {
    settings: ProductSettings;
    updateSettings: (settings: Partial<ProductSettings>) => void;
}

export function EffectsTab({ settings, updateSettings }: EffectsTabProps) {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Visual Effects</CardTitle>
                    <CardDescription>
                        Professional post-processing and visual styling
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Tabs defaultValue="color" className="w-full">
                        <TabsList className="grid grid-cols-3 mb-4">
                            <TabsTrigger value="color">
                                Color Grading
                            </TabsTrigger>
                            <TabsTrigger value="style">Style</TabsTrigger>
                            <TabsTrigger value="effects">
                                Special Effects
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="color" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="lut">Color LUT/Grade</Label>
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
                                            <SelectItem value="none">
                                                None
                                            </SelectItem>
                                            <SelectItem value="cool">
                                                Cool
                                            </SelectItem>
                                            <SelectItem value="warm">
                                                Warm
                                            </SelectItem>
                                            <SelectItem value="cinematic">
                                                Cinematic
                                            </SelectItem>
                                            <SelectItem value="vintage">
                                                Vintage
                                            </SelectItem>
                                            <SelectItem value="film">
                                                Film
                                            </SelectItem>
                                            <SelectItem value="monochrome">
                                                Monochrome
                                            </SelectItem>
                                            <SelectItem value="sepia">
                                                Sepia
                                            </SelectItem>
                                            <SelectItem value="high-contrast">
                                                High Contrast
                                            </SelectItem>
                                            <SelectItem value="muted">
                                                Muted
                                            </SelectItem>
                                            <SelectItem value="vibrant">
                                                Vibrant
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="colorScheme">
                                        Color Scheme
                                    </Label>
                                    <Select
                                        value={
                                            settings.colorScheme ||
                                            "complementary"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                colorScheme: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="colorScheme">
                                            <SelectValue placeholder="Select color scheme" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="monochromatic">
                                                Monochromatic
                                            </SelectItem>
                                            <SelectItem value="analogous">
                                                Analogous
                                            </SelectItem>
                                            <SelectItem value="complementary">
                                                Complementary
                                            </SelectItem>
                                            <SelectItem value="triadic">
                                                Triadic
                                            </SelectItem>
                                            <SelectItem value="split-complementary">
                                                Split Complementary
                                            </SelectItem>
                                            <SelectItem value="neutral">
                                                Neutral
                                            </SelectItem>
                                            <SelectItem value="pastel">
                                                Pastel
                                            </SelectItem>
                                            <SelectItem value="jewel-tones">
                                                Jewel Tones
                                            </SelectItem>
                                            <SelectItem value="earth-tones">
                                                Earth Tones
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="dominantColor">
                                        Dominant Color
                                    </Label>
                                    <Select
                                        value={
                                            settings.dominantColor || "brand"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                dominantColor: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="dominantColor">
                                            <SelectValue placeholder="Select dominant color" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="brand">
                                                Brand Color
                                            </SelectItem>
                                            <SelectItem value="gold">
                                                Gold
                                            </SelectItem>
                                            <SelectItem value="silver">
                                                Silver
                                            </SelectItem>
                                            <SelectItem value="black">
                                                Black
                                            </SelectItem>
                                            <SelectItem value="white">
                                                White
                                            </SelectItem>
                                            <SelectItem value="blue">
                                                Blue
                                            </SelectItem>
                                            <SelectItem value="red">
                                                Red
                                            </SelectItem>
                                            <SelectItem value="green">
                                                Green
                                            </SelectItem>
                                            <SelectItem value="purple">
                                                Purple
                                            </SelectItem>
                                            <SelectItem value="pink">
                                                Pink
                                            </SelectItem>
                                            <SelectItem value="amber">
                                                Amber
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="toneMapping">
                                        Tone Mapping
                                    </Label>
                                    <Select
                                        value={
                                            settings.toneMapping || "balanced"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                toneMapping: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="toneMapping">
                                            <SelectValue placeholder="Select tone mapping" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="balanced">
                                                Balanced
                                            </SelectItem>
                                            <SelectItem value="high-contrast">
                                                High Contrast
                                            </SelectItem>
                                            <SelectItem value="low-contrast">
                                                Low Contrast
                                            </SelectItem>
                                            <SelectItem value="hdr">
                                                HDR Look
                                            </SelectItem>
                                            <SelectItem value="filmic">
                                                Filmic
                                            </SelectItem>
                                            <SelectItem value="aces">
                                                ACES
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="saturation">
                                            Saturation:{" "}
                                            {settings.saturation || 100}%
                                        </Label>
                                    </div>
                                    <Slider
                                        id="saturation"
                                        min={0}
                                        max={200}
                                        step={5}
                                        value={[settings.saturation || 100]}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                saturation: value[0],
                                            })
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="contrast">
                                            Contrast: {settings.contrast || 100}
                                            %
                                        </Label>
                                    </div>
                                    <Slider
                                        id="contrast"
                                        min={0}
                                        max={200}
                                        step={5}
                                        value={[settings.contrast || 100]}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                contrast: value[0],
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="style" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="visualStyle">
                                        Visual Style
                                    </Label>
                                    <Select
                                        value={
                                            settings.visualStyle ||
                                            "photorealistic"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                visualStyle: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="visualStyle">
                                            <SelectValue placeholder="Select visual style" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="photorealistic">
                                                Photorealistic
                                            </SelectItem>
                                            <SelectItem value="hyperrealistic">
                                                Hyperrealistic
                                            </SelectItem>
                                            <SelectItem value="cinematic">
                                                Cinematic
                                            </SelectItem>
                                            <SelectItem value="editorial">
                                                Editorial
                                            </SelectItem>
                                            <SelectItem value="fashion">
                                                Fashion
                                            </SelectItem>
                                            <SelectItem value="minimalist">
                                                Minimalist
                                            </SelectItem>
                                            <SelectItem value="luxury">
                                                Luxury
                                            </SelectItem>
                                            <SelectItem value="vintage">
                                                Vintage
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
                                <div className="space-y-2">
                                    <Label htmlFor="artDirection">
                                        Art Direction
                                    </Label>
                                    <Select
                                        value={
                                            settings.artDirection ||
                                            "commercial"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                artDirection: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="artDirection">
                                            <SelectValue placeholder="Select art direction" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="commercial">
                                                Commercial
                                            </SelectItem>
                                            <SelectItem value="editorial">
                                                Editorial
                                            </SelectItem>
                                            <SelectItem value="fine-art">
                                                Fine Art
                                            </SelectItem>
                                            <SelectItem value="conceptual">
                                                Conceptual
                                            </SelectItem>
                                            <SelectItem value="documentary">
                                                Documentary
                                            </SelectItem>
                                            <SelectItem value="abstract">
                                                Abstract
                                            </SelectItem>
                                            <SelectItem value="narrative">
                                                Narrative
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="renderStyle">
                                        Render Style
                                    </Label>
                                    <Select
                                        value={
                                            settings.renderStyle ||
                                            "photography"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                renderStyle: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="renderStyle">
                                            <SelectValue placeholder="Select render style" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="photography">
                                                Photography
                                            </SelectItem>
                                            <SelectItem value="3d-render">
                                                3D Render
                                            </SelectItem>
                                            <SelectItem value="mixed-media">
                                                Mixed Media
                                            </SelectItem>
                                            <SelectItem value="illustration">
                                                Illustration
                                            </SelectItem>
                                            <SelectItem value="painting">
                                                Painting
                                            </SelectItem>
                                            <SelectItem value="sketch">
                                                Sketch
                                            </SelectItem>
                                            <SelectItem value="watercolor">
                                                Watercolor
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="brandReference">
                                        Brand Reference
                                    </Label>
                                    <Select
                                        value={
                                            settings.brandReference || "none"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                brandReference: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="brandReference">
                                            <SelectValue placeholder="Select brand reference" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">
                                                None
                                            </SelectItem>
                                            <SelectItem value="chanel">
                                                Chanel
                                            </SelectItem>
                                            <SelectItem value="dior">
                                                Dior
                                            </SelectItem>
                                            <SelectItem value="gucci">
                                                Gucci
                                            </SelectItem>
                                            <SelectItem value="tom-ford">
                                                Tom Ford
                                            </SelectItem>
                                            <SelectItem value="jo-malone">
                                                Jo Malone
                                            </SelectItem>
                                            <SelectItem value="creed">
                                                Creed
                                            </SelectItem>
                                            <SelectItem value="byredo">
                                                Byredo
                                            </SelectItem>
                                            <SelectItem value="hermes">
                                                Hermès
                                            </SelectItem>
                                            <SelectItem value="armani">
                                                Armani
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="era">Era/Period</Label>
                                    <Select
                                        value={settings.era || "contemporary"}
                                        onValueChange={(value) =>
                                            updateSettings({ era: value })
                                        }
                                    >
                                        <SelectTrigger id="era">
                                            <SelectValue placeholder="Select era" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="contemporary">
                                                Contemporary
                                            </SelectItem>
                                            <SelectItem value="retro">
                                                Retro
                                            </SelectItem>
                                            <SelectItem value="vintage">
                                                Vintage
                                            </SelectItem>
                                            <SelectItem value="art-deco">
                                                Art Deco
                                            </SelectItem>
                                            <SelectItem value="victorian">
                                                Victorian
                                            </SelectItem>
                                            <SelectItem value="futuristic">
                                                Futuristic
                                            </SelectItem>
                                            <SelectItem value="80s">
                                                80s
                                            </SelectItem>
                                            <SelectItem value="90s">
                                                90s
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="quality">
                                        Quality Level
                                    </Label>
                                    <Select
                                        value={
                                            settings.quality || "ultra-premium"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({ quality: value })
                                        }
                                    >
                                        <SelectTrigger id="quality">
                                            <SelectValue placeholder="Select quality level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ultra-premium">
                                                Ultra Premium
                                            </SelectItem>
                                            <SelectItem value="premium">
                                                Premium
                                            </SelectItem>
                                            <SelectItem value="high-end">
                                                High-End
                                            </SelectItem>
                                            <SelectItem value="professional">
                                                Professional
                                            </SelectItem>
                                            <SelectItem value="commercial">
                                                Commercial
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="effects" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="specialEffect">
                                        Special Effect
                                    </Label>
                                    <Select
                                        value={settings.specialEffect || "none"}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                specialEffect: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="specialEffect">
                                            <SelectValue placeholder="Select special effect" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">
                                                None
                                            </SelectItem>
                                            <SelectItem value="lens-flare">
                                                Lens Flare
                                            </SelectItem>
                                            <SelectItem value="light-leaks">
                                                Light Leaks
                                            </SelectItem>
                                            <SelectItem value="prism">
                                                Prism Effect
                                            </SelectItem>
                                            <SelectItem value="double-exposure">
                                                Double Exposure
                                            </SelectItem>
                                            <SelectItem value="glitch">
                                                Glitch
                                            </SelectItem>
                                            <SelectItem value="holographic">
                                                Holographic
                                            </SelectItem>
                                            <SelectItem value="neon">
                                                Neon
                                            </SelectItem>
                                            <SelectItem value="chromatic-aberration">
                                                Chromatic Aberration
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="textureOverlay">
                                        Texture Overlay
                                    </Label>
                                    <Select
                                        value={
                                            settings.textureOverlay || "none"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                textureOverlay: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="textureOverlay">
                                            <SelectValue placeholder="Select texture overlay" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">
                                                None
                                            </SelectItem>
                                            <SelectItem value="film-grain">
                                                Film Grain
                                            </SelectItem>
                                            <SelectItem value="noise">
                                                Noise
                                            </SelectItem>
                                            <SelectItem value="dust">
                                                Dust
                                            </SelectItem>
                                            <SelectItem value="scratches">
                                                Scratches
                                            </SelectItem>
                                            <SelectItem value="paper">
                                                Paper
                                            </SelectItem>
                                            <SelectItem value="canvas">
                                                Canvas
                                            </SelectItem>
                                            <SelectItem value="concrete">
                                                Concrete
                                            </SelectItem>
                                            <SelectItem value="marble">
                                                Marble
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2 flex items-center gap-2">
                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            id="useGlow"
                                            checked={settings.useGlow || false}
                                            onCheckedChange={(checked) =>
                                                updateSettings({
                                                    useGlow: checked,
                                                })
                                            }
                                        />
                                        <Label htmlFor="useGlow">
                                            Subtle Glow
                                        </Label>
                                    </div>
                                </div>
                                <div className="space-y-2 flex items-center gap-2">
                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            id="useBloom"
                                            checked={settings.useBloom || false}
                                            onCheckedChange={(checked) =>
                                                updateSettings({
                                                    useBloom: checked,
                                                })
                                            }
                                        />
                                        <Label htmlFor="useBloom">
                                            Bloom Effect
                                        </Label>
                                    </div>
                                </div>
                                <div className="space-y-2 flex items-center gap-2">
                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            id="useShadows"
                                            checked={
                                                settings.useShadows || true
                                            }
                                            onCheckedChange={(checked) =>
                                                updateSettings({
                                                    useShadows: checked,
                                                })
                                            }
                                        />
                                        <Label htmlFor="useShadows">
                                            Drop Shadows
                                        </Label>
                                    </div>
                                </div>
                                <div className="space-y-2 flex items-center gap-2">
                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            id="useSharpening"
                                            checked={
                                                settings.useSharpening || true
                                            }
                                            onCheckedChange={(checked) =>
                                                updateSettings({
                                                    useSharpening: checked,
                                                })
                                            }
                                        />
                                        <Label htmlFor="useSharpening">
                                            Sharpening
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
