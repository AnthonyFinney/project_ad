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
    // Core product parameters with expanded defaults
    const [settings, setSettings] = useState<ProductSettings>({
        // Product - Perfume Specific
        volume: "6 ml",
        labelText: "Beautiful Mind",
        bottleType: "classic",
        bottleColor: "amber",
        capStyle: "brushed-metal",
        liquidColor: "amber",
        perfumeType: "attar",
        prop: "none",
        additionalDetails: "",

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
        const sections: { [key: string]: string[] } = {
            product: [],
            camera: [],
            environment: [],
            effects: [],
            text: [],
            technical: [],
            style: [],
        };

        // PRODUCT SECTION
        // Build detailed perfume description
        let perfumeDescription = `A ${settings.volume} ${settings.bottleColor} ${settings.bottleType} ${settings.perfumeType} bottle`;

        if (settings.capStyle) {
            perfumeDescription += ` with a ${settings.capStyle} cap`;
        }

        if (
            settings.liquidColor &&
            settings.liquidColor !== settings.bottleColor
        ) {
            perfumeDescription += `, containing ${settings.liquidColor} liquid`;
        }

        if (settings.labelText) {
            perfumeDescription += `, labeled '${settings.labelText}'`;
        }

        if (settings.additionalDetails) {
            perfumeDescription += `. ${settings.additionalDetails}`;
        } else {
            perfumeDescription += `.`;
        }

        sections.product.push(perfumeDescription);

        if (settings.prop !== "none") {
            sections.product.push(`Styled with ${settings.prop} as a prop.`);
        }

        // CAMERA SECTION
        let cameraDescription = `Shot with a ${
            settings.lensType || "macro"
        } lens at ${settings.focalLength}mm, f/${settings.aperture}`;

        if (settings.perspective) {
            cameraDescription += `, ${settings.perspective}`;
        }

        if (settings.angle) {
            cameraDescription += `, ${settings.angle}° angle`;
        }

        sections.camera.push(cameraDescription);

        if (settings.composition) {
            sections.camera.push(`Composition: ${settings.composition}`);
        }

        if (settings.depthOfField) {
            sections.camera.push(`Depth of field: ${settings.depthOfField}`);
        }

        if (settings.focusPoint) {
            sections.camera.push(`Focus point: ${settings.focusPoint}`);
        }

        if (settings.bokehShape && settings.bokehShape !== "circle") {
            sections.camera.push(`Bokeh shape: ${settings.bokehShape}`);
        }

        if (settings.framing) {
            sections.camera.push(`Framing: ${settings.framing}`);
        }

        if (settings.photographyStyle) {
            sections.camera.push(
                `Photography style: ${settings.photographyStyle}`
            );
        }

        if (
            settings.photographerReference &&
            settings.photographerReference !== "none"
        ) {
            sections.camera.push(`Style of ${settings.photographerReference}`);
        }

        if (settings.exposureStyle && settings.exposureStyle !== "normal") {
            sections.camera.push(`${settings.exposureStyle} exposure`);
        }

        if (settings.useFilmGrain) {
            sections.camera.push("With subtle film grain");
        }

        if (settings.useVignette) {
            sections.camera.push("With vignette effect");
        }

        // ENVIRONMENT SECTION
        let environmentDescription = `Environment: ${settings.background} background`;

        if (settings.backgroundStyle) {
            environmentDescription += `, ${settings.backgroundStyle} style`;
        }

        if (settings.setting && settings.setting !== "studio") {
            environmentDescription += `, ${settings.setting} setting`;
        }

        if (settings.surface) {
            environmentDescription += `, on a ${settings.surface} surface`;
        }

        sections.environment.push(environmentDescription);

        if (settings.lightSetup) {
            let lightingDescription = `Lighting: ${settings.lightSetup} lighting setup`;

            if (settings.lightQuality) {
                lightingDescription += `, ${settings.lightQuality}`;
            }

            if (settings.lightColor && settings.lightColor !== "neutral") {
                lightingDescription += `, ${settings.lightColor} temperature`;
            }

            sections.environment.push(lightingDescription);
        }

        if (settings.hdriPreset) {
            sections.environment.push(
                `HDRI environment: ${settings.hdriPreset}${
                    settings.hdrRotation
                        ? `, rotated ${settings.hdrRotation}°`
                        : ""
                }`
            );
        }

        if (settings.goboPattern && settings.goboPattern !== "none") {
            sections.environment.push(`Light pattern: ${settings.goboPattern}`);
        }

        if (settings.shadowIntensity) {
            sections.environment.push(
                `Shadow intensity: ${settings.shadowIntensity}%`
            );
        }

        if (settings.reflectionIntensity) {
            sections.environment.push(
                `Reflection intensity: ${settings.reflectionIntensity}%`
            );
        }

        if (settings.timeOfDay && settings.timeOfDay !== "studio") {
            sections.environment.push(`Time of day: ${settings.timeOfDay}`);
        }

        if (settings.atmosphere && settings.atmosphere !== "none") {
            sections.environment.push(
                `Atmospheric effect: ${settings.atmosphere}`
            );
        }

        if (settings.weatherEffect && settings.weatherEffect !== "none") {
            sections.environment.push(
                `Weather effect: ${settings.weatherEffect}`
            );
        }

        if (settings.particleEffect && settings.particleEffect !== "none") {
            sections.environment.push(
                `Particle effect: ${settings.particleEffect}`
            );
        }

        if (settings.mood) {
            sections.environment.push(`Mood: ${settings.mood}`);
        }

        if (settings.useReflection) {
            sections.environment.push("With mirror reflection");
        }

        if (settings.useWaterSurface) {
            sections.environment.push("With water surface reflection");
        }

        // EFFECTS SECTION
        if (settings.lut && settings.lut !== "none") {
            sections.effects.push(`Color grading: ${settings.lut} LUT`);
        }

        if (settings.colorScheme) {
            sections.effects.push(`Color scheme: ${settings.colorScheme}`);
        }

        if (settings.dominantColor) {
            sections.effects.push(`Dominant color: ${settings.dominantColor}`);
        }

        if (settings.toneMapping) {
            sections.effects.push(`Tone mapping: ${settings.toneMapping}`);
        }

        if (settings.saturation && settings.saturation !== 100) {
            sections.effects.push(`Saturation: ${settings.saturation}%`);
        }

        if (settings.contrast && settings.contrast !== 100) {
            sections.effects.push(`Contrast: ${settings.contrast}%`);
        }

        if (settings.visualStyle) {
            sections.effects.push(`Visual style: ${settings.visualStyle}`);
        }

        if (settings.artDirection) {
            sections.effects.push(`Art direction: ${settings.artDirection}`);
        }

        if (settings.renderStyle && settings.renderStyle !== "photography") {
            sections.effects.push(`Render style: ${settings.renderStyle}`);
        }

        if (settings.brandReference && settings.brandReference !== "none") {
            sections.effects.push(
                `Brand reference: ${settings.brandReference} style`
            );
        }

        if (settings.era && settings.era !== "contemporary") {
            sections.effects.push(`Era: ${settings.era}`);
        }

        if (settings.quality) {
            sections.effects.push(`Quality: ${settings.quality}`);
        }

        if (settings.specialEffect && settings.specialEffect !== "none") {
            sections.effects.push(`Special effect: ${settings.specialEffect}`);
        }

        if (settings.textureOverlay && settings.textureOverlay !== "none") {
            sections.effects.push(
                `Texture overlay: ${settings.textureOverlay}`
            );
        }

        if (settings.useGlow) {
            sections.effects.push("With subtle glow effect");
        }

        if (settings.useBloom) {
            sections.effects.push("With bloom effect");
        }

        if (settings.useShadows) {
            sections.effects.push("With drop shadows");
        }

        if (settings.useSharpening) {
            sections.effects.push("With image sharpening");
        }

        // TEXT SECTION
        if (settings.headline) {
            let headlineText = `Headline: "${settings.headline}"`;

            if (settings.ctaPosition) {
                headlineText += ` positioned at ${settings.ctaPosition}`;
            }

            sections.text.push(headlineText);
        }

        if (settings.tagline) {
            sections.text.push(`Tagline: "${settings.tagline}"`);
        }

        if (settings.ctaText) {
            sections.text.push(`Call to action: "${settings.ctaText}"`);
        }

        if (settings.bodyText) {
            sections.text.push(`Body text: "${settings.bodyText}"`);
        }

        if (settings.fontStyle) {
            let typographyText = `Typography: ${settings.fontStyle} font`;

            if (settings.fontWeight) {
                typographyText += `, ${settings.fontWeight} weight`;
            }

            if (settings.textColor) {
                typographyText += `, ${settings.textColor} color`;
            }

            if (settings.textEffect && settings.textEffect !== "none") {
                typographyText += `, with ${settings.textEffect} effect`;
            }

            sections.text.push(typographyText);
        }

        if (settings.watermark) {
            sections.text.push(`Watermark/logo: "${settings.watermarkText}"`);
        }

        if (settings.brandingStyle) {
            sections.text.push(`Branding style: ${settings.brandingStyle}`);
        }

        if (settings.brandIdentity) {
            sections.text.push(`Brand identity: ${settings.brandIdentity}`);
        }

        // TECHNICAL SECTION
        if (settings.useLoRA) {
            sections.technical.push(
                `<lora:brand_signature:${settings.loraWeight}>`
            );
        }

        sections.technical.push(`Resolution: ${settings.resolution}`);
        sections.technical.push(`Format: ${settings.format}`);
        sections.technical.push(`DPI: ${settings.dpi}`);
        sections.technical.push(`Steps: ${settings.steps}`);
        sections.technical.push(`CFG Scale: ${settings.cfg}`);

        if (settings.aiModel) {
            sections.technical.push(`Model: ${settings.aiModel}`);
        }

        if (settings.seed && settings.seed !== "random") {
            sections.technical.push(`Seed: ${settings.seed}`);
        }

        // STYLE SECTION
        if (settings.stylePreset) {
            sections.style.push(`Style preset: ${settings.stylePreset}`);
        }

        if (settings.styleModifier && settings.styleModifier !== "none") {
            sections.style.push(`Style modifier: ${settings.styleModifier}`);
        }

        if (settings.industryReference) {
            sections.style.push(
                `Industry reference: ${settings.industryReference}`
            );
        }

        if (
            settings.publicationReference &&
            settings.publicationReference !== "none"
        ) {
            sections.style.push(
                `Publication reference: ${settings.publicationReference}`
            );
        }

        if (settings.useHDR) {
            sections.style.push("HDR quality");
        }

        if (settings.use8K) {
            sections.style.push("8K ultra-detailed");
        }

        // Build the final prompt
        const lines: string[] = [];

        // Add product description first
        if (sections.product.length > 0) {
            lines.push(sections.product.join(". "));
        }

        // Add camera settings
        if (sections.camera.length > 0) {
            lines.push(sections.camera.join(". "));
        }

        // Add environment settings
        if (sections.environment.length > 0) {
            lines.push(sections.environment.join(". "));
        }

        // Add effects
        if (sections.effects.length > 0) {
            lines.push(sections.effects.join(". "));
        }

        // Add text elements
        if (sections.text.length > 0) {
            lines.push(sections.text.join(". "));
        }

        // Add style guidance
        if (sections.style.length > 0) {
            lines.push(sections.style.join(". "));
        }

        // Add technical parameters
        if (sections.technical.length > 0) {
            lines.push(sections.technical.join(". "));
        }

        // Add negative prompt if provided
        if (settings.negativePrompt) {
            lines.push(`Negative prompt: ${settings.negativePrompt}`);
        }

        // Add professional quality indicators
        lines.push(
            "Ultra-realistic, high-detail, professional advertising photography, luxury product advertisement"
        );

        return lines.join("\n\n");
    };

    const generatePrompt = () => {
        const p = buildPrompt();
        setPrompt(p);
    };

    const copyPromptToClipboard = () => {
        if (prompt) {
            navigator.clipboard.writeText(prompt);
            toast(
                "Copied to clipboard The prompt has been copied to your clipboard"
            );
        } else {
            toast("No prompt to copyGenerate a prompt first destructive");
        }
    };

    return (
        <div className="container mx-auto p-6 max-w-6xl bg-white">
            <div className="mb-8">
                <h1 className="text-4xl font-bold tracking-tight mb-2">
                    Professional Perfume & Attar Prompt Generator
                </h1>
                <p className="text-gray-500">
                    Create detailed prompts for AI image generation of luxury
                    perfume and attar advertisements
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
                            Generate Professional Prompt
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
                                    Click "Generate Professional Prompt" to
                                    create your prompt
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
