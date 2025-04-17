export interface ProductSettings {
    // Product
    volume: string;
    labelText: string;
    prop: string;

    // Camera
    focalLength: number;
    aperture: number;
    angle: number;
    bokehShape: string;

    // Environment
    background: string;
    hdriPreset: string;
    hdrRotation: number;
    goboPattern: string;
    lightSetup: string;
    shadowIntensity: number;
    reflectionIntensity: number;

    // Effects
    lut: string;

    // AI
    useLoRA: boolean;
    loraWeight: number;
    steps: number;
    cfg: number;
    negativePrompt: string;

    // Export
    resolution: string;
    format: string;
    dpi: number;

    // Text
    headline: string;
    tagline: string;
    ctaText: string;
    ctaPosition: string;
    watermark: boolean;
    watermarkText: string;
}
