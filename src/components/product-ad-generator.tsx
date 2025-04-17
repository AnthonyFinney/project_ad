"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    ImageIcon,
    Aperture,
    Layers,
    Sliders,
    Type,
    Palette,
    Download,
    Copy,
} from "lucide-react";

import { ProductTab } from "./product-tab";
import { CameraTab } from "./camera-tab";
import { EnvironmentTab } from "./environment-tab";
import { EffectsTab } from "./effects-tab";
import { AITab } from "./ai-tab";
import { TextTab } from "./text-tab";
import { PromptDisplay } from "./prompt-display";
import { ProductSettings } from "@/types/product-settings";
import { toast } from "sonner";

export default function ProductAdGenerator() {
    // Core product parameters
    const [settings, setSettings] = useState<ProductSettings>({
        // Product
        volume: "6 ml",
        labelText: "Beautiful Mind",
        prop: "none",

        // Camera
        focalLength: 100,
        aperture: 2.8,
        angle: 30,
        bokehShape: "circle",

        // Environment
        background: "white",
        hdriPreset: "studio1",
        hdrRotation: 30,
        goboPattern: "none",
        lightSetup: "three-point",
        shadowIntensity: 50,
        reflectionIntensity: 50,

        // Effects
        lut: "none",

        // AI
        useLoRA: true,
        loraWeight: 0.7,
        steps: 60,
        cfg: 8,
        negativePrompt: "",

        // Export
        resolution: "2048x2048",
        format: "PNG",
        dpi: 300,

        // Text
        headline: "",
        tagline: "",
        ctaText: "",
        ctaPosition: "bottom-right",
        watermark: false,
        watermarkText: "© MyBrand",
    });

    // Internal
    const [prompt, setPrompt] = useState<string>("");

    const updateSettings = (newSettings: Partial<ProductSettings>) => {
        setSettings({ ...settings, ...newSettings });
    };

    const buildPrompt = (): string => {
        const lines: string[] = [];
        if (settings.useLoRA) {
            lines.push(`<lora:brand_signature:${settings.loraWeight}>`);
        }
        lines.push(
            `A ${settings.volume} amber glass perfume bottle with a brushed-metal silver cap, labeled '${settings.labelText}'.`
        );
        lines.push(
            `Camera: full-frame ${settings.focalLength}mm macro lens at f/${settings.aperture}, ${settings.angle}° tilt.`
        );
        lines.push(
            `Environment: background ${settings.background}, HDRI ${settings.hdriPreset} rotated ${settings.hdrRotation}°, ${settings.lightSetup} lighting, gobo pattern ${settings.goboPattern}.`
        );
        lines.push(
            `Shadow intensity ${settings.shadowIntensity}%, reflection intensity ${settings.reflectionIntensity}%.`
        );
        lines.push(
            `Effects: LUT ${settings.lut}, bokeh shape ${settings.bokehShape}.`
        );
        if (settings.negativePrompt)
            lines.push(`Negative prompts: ${settings.negativePrompt}.`);
        if (settings.headline)
            lines.push(
                `Headline: '${settings.headline}' at ${settings.ctaPosition}.`
            );
        if (settings.tagline) lines.push(`Tagline: '${settings.tagline}'.`);
        if (settings.ctaText) lines.push(`CTA: '${settings.ctaText}'.`);
        if (settings.prop !== "none") lines.push(`Prop: ${settings.prop}.`);
        if (settings.watermark)
            lines.push(`Watermark: '${settings.watermarkText}'.`);
        lines.push(
            `Generate at ${settings.resolution} @ ${settings.dpi}dpi, format ${settings.format}. Steps ${settings.steps}, CFG ${settings.cfg}.`
        );
        lines.push(`Ultra-realistic, high-detail, HDR, luxury ad style.`);
        return lines.join(" ");
    };

    const generatePrompt = () => {
        const p = buildPrompt();
        setPrompt(p);
    };

    const copyPromptToClipboard = () => {
        if (prompt) {
            navigator.clipboard.writeText(prompt);
            toast(
                "Copied to clipboard,The prompt has been copied to your clipboard"
            );
        } else {
            toast("No prompt to copy Generate a prompt first destructive");
        }
    };

    return (
        <div className="container mx-auto p-6 max-w-6xl bg-white">
            <div className="mb-8">
                <h1 className="text-4xl font-bold tracking-tight mb-2">
                    Product Ad Prompt Generator
                </h1>
                <p className="text-gray-500">
                    Create detailed prompts for AI image generation of
                    professional product advertisements
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Tabs defaultValue="product" className="w-full">
                        <TabsList className="grid grid-cols-6 mb-6">
                            <TabsTrigger
                                value="product"
                                className="flex items-center gap-2"
                            >
                                <ImageIcon className="h-4 w-4" />
                                <span className="hidden sm:inline">
                                    Product
                                </span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="camera"
                                className="flex items-center gap-2"
                            >
                                <Aperture className="h-4 w-4" />
                                <span className="hidden sm:inline">Camera</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="environment"
                                className="flex items-center gap-2"
                            >
                                <Layers className="h-4 w-4" />
                                <span className="hidden sm:inline">
                                    Environment
                                </span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="effects"
                                className="flex items-center gap-2"
                            >
                                <Palette className="h-4 w-4" />
                                <span className="hidden sm:inline">
                                    Effects
                                </span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="ai"
                                className="flex items-center gap-2"
                            >
                                <Sliders className="h-4 w-4" />
                                <span className="hidden sm:inline">AI</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="text"
                                className="flex items-center gap-2"
                            >
                                <Type className="h-4 w-4" />
                                <span className="hidden sm:inline">Text</span>
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="product">
                            <ProductTab
                                settings={settings}
                                updateSettings={updateSettings}
                            />
                        </TabsContent>

                        <TabsContent value="camera">
                            <CameraTab
                                settings={settings}
                                updateSettings={updateSettings}
                            />
                        </TabsContent>

                        <TabsContent value="environment">
                            <EnvironmentTab
                                settings={settings}
                                updateSettings={updateSettings}
                            />
                        </TabsContent>

                        <TabsContent value="effects">
                            <EffectsTab
                                settings={settings}
                                updateSettings={updateSettings}
                            />
                        </TabsContent>

                        <TabsContent value="ai">
                            <AITab
                                settings={settings}
                                updateSettings={updateSettings}
                            />
                        </TabsContent>

                        <TabsContent value="text">
                            <TextTab
                                settings={settings}
                                updateSettings={updateSettings}
                            />
                        </TabsContent>
                    </Tabs>

                    <div className="mt-6 flex gap-4">
                        <Button
                            onClick={generatePrompt}
                            className="flex-1 py-6 text-lg"
                        >
                            Generate Prompt
                        </Button>
                        <Button
                            onClick={copyPromptToClipboard}
                            variant="outline"
                            className="py-6"
                            disabled={!prompt}
                        >
                            <Copy className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-6 space-y-6">
                        <PromptDisplay prompt={prompt} />
                        <div className="text-sm text-gray-500 mt-4">
                            <h3 className="font-medium mb-2">
                                How to use this prompt:
                            </h3>
                            <ol className="list-decimal pl-5 space-y-2">
                                <li>Configure all settings to your liking</li>
                                <li>
                                    Click "Generate Prompt" to create your
                                    prompt
                                </li>
                                <li>Copy the prompt using the copy button</li>
                                <li>
                                    Paste the prompt into your preferred AI
                                    image generation tool (Midjourney, DALL-E,
                                    Stable Diffusion, etc.)
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
