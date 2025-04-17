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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import type { ProductSettings } from "../types/product-settings";

interface TextTabProps {
    settings: ProductSettings;
    updateSettings: (settings: Partial<ProductSettings>) => void;
}

export function TextTab({ settings, updateSettings }: TextTabProps) {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Text & Typography</CardTitle>
                    <CardDescription>
                        Professional text elements for your advertisement
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Tabs defaultValue="content" className="w-full">
                        <TabsList className="grid grid-cols-3 mb-4">
                            <TabsTrigger value="content">Content</TabsTrigger>
                            <TabsTrigger value="typography">
                                Typography
                            </TabsTrigger>
                            <TabsTrigger value="branding">Branding</TabsTrigger>
                        </TabsList>

                        <TabsContent value="content" className="space-y-4">
                            <div className="grid grid-cols-1 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="headline">Headline</Label>
                                    <Input
                                        id="headline"
                                        type="text"
                                        value={settings.headline}
                                        onChange={(e) =>
                                            updateSettings({
                                                headline: e.target.value,
                                            })
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
                                            updateSettings({
                                                tagline: e.target.value,
                                            })
                                        }
                                        placeholder="Supporting tagline"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="ctaText">
                                        Call to Action
                                    </Label>
                                    <Input
                                        id="ctaText"
                                        type="text"
                                        value={settings.ctaText}
                                        onChange={(e) =>
                                            updateSettings({
                                                ctaText: e.target.value,
                                            })
                                        }
                                        placeholder="Call to action text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="bodyText">Body Text</Label>
                                    <Textarea
                                        id="bodyText"
                                        value={settings.bodyText || ""}
                                        onChange={(e) =>
                                            updateSettings({
                                                bodyText: e.target.value,
                                            })
                                        }
                                        placeholder="Optional body text for the advertisement"
                                        className="resize-none h-20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="ctaPosition">
                                        Text Position
                                    </Label>
                                    <Select
                                        value={settings.ctaPosition}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                ctaPosition: value,
                                            })
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
                                            <SelectItem value="center">
                                                Center
                                            </SelectItem>
                                            <SelectItem value="bottom-center">
                                                Bottom Center
                                            </SelectItem>
                                            <SelectItem value="top-center">
                                                Top Center
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="typography" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="fontStyle">
                                        Font Style
                                    </Label>
                                    <Select
                                        value={settings.fontStyle || "serif"}
                                        onValueChange={(value) =>
                                            updateSettings({ fontStyle: value })
                                        }
                                    >
                                        <SelectTrigger id="fontStyle">
                                            <SelectValue placeholder="Select font style" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="serif">
                                                Serif
                                            </SelectItem>
                                            <SelectItem value="sans-serif">
                                                Sans Serif
                                            </SelectItem>
                                            <SelectItem value="display">
                                                Display
                                            </SelectItem>
                                            <SelectItem value="handwritten">
                                                Handwritten
                                            </SelectItem>
                                            <SelectItem value="monospace">
                                                Monospace
                                            </SelectItem>
                                            <SelectItem value="decorative">
                                                Decorative
                                            </SelectItem>
                                            <SelectItem value="minimal">
                                                Minimal
                                            </SelectItem>
                                            <SelectItem value="elegant">
                                                Elegant
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="fontWeight">
                                        Font Weight
                                    </Label>
                                    <Select
                                        value={settings.fontWeight || "regular"}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                fontWeight: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="fontWeight">
                                            <SelectValue placeholder="Select font weight" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                Light
                                            </SelectItem>
                                            <SelectItem value="regular">
                                                Regular
                                            </SelectItem>
                                            <SelectItem value="medium">
                                                Medium
                                            </SelectItem>
                                            <SelectItem value="bold">
                                                Bold
                                            </SelectItem>
                                            <SelectItem value="black">
                                                Black/Heavy
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="textColor">
                                        Text Color
                                    </Label>
                                    <Select
                                        value={settings.textColor || "white"}
                                        onValueChange={(value) =>
                                            updateSettings({ textColor: value })
                                        }
                                    >
                                        <SelectTrigger id="textColor">
                                            <SelectValue placeholder="Select text color" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="white">
                                                White
                                            </SelectItem>
                                            <SelectItem value="black">
                                                Black
                                            </SelectItem>
                                            <SelectItem value="gold">
                                                Gold
                                            </SelectItem>
                                            <SelectItem value="silver">
                                                Silver
                                            </SelectItem>
                                            <SelectItem value="brand">
                                                Brand Color
                                            </SelectItem>
                                            <SelectItem value="contrast">
                                                Contrast Color
                                            </SelectItem>
                                            <SelectItem value="complementary">
                                                Complementary Color
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="textEffect">
                                        Text Effect
                                    </Label>
                                    <Select
                                        value={settings.textEffect || "none"}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                textEffect: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="textEffect">
                                            <SelectValue placeholder="Select text effect" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">
                                                None
                                            </SelectItem>
                                            <SelectItem value="shadow">
                                                Shadow
                                            </SelectItem>
                                            <SelectItem value="glow">
                                                Glow
                                            </SelectItem>
                                            <SelectItem value="outline">
                                                Outline
                                            </SelectItem>
                                            <SelectItem value="emboss">
                                                Emboss
                                            </SelectItem>
                                            <SelectItem value="gradient">
                                                Gradient
                                            </SelectItem>
                                            <SelectItem value="metallic">
                                                Metallic
                                            </SelectItem>
                                            <SelectItem value="neon">
                                                Neon
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="textAlignment">
                                        Text Alignment
                                    </Label>
                                    <Select
                                        value={settings.textAlignment || "left"}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                textAlignment: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="textAlignment">
                                            <SelectValue placeholder="Select text alignment" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="left">
                                                Left
                                            </SelectItem>
                                            <SelectItem value="center">
                                                Center
                                            </SelectItem>
                                            <SelectItem value="right">
                                                Right
                                            </SelectItem>
                                            <SelectItem value="justified">
                                                Justified
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="textCase">Text Case</Label>
                                    <Select
                                        value={settings.textCase || "sentence"}
                                        onValueChange={(value) =>
                                            updateSettings({ textCase: value })
                                        }
                                    >
                                        <SelectTrigger id="textCase">
                                            <SelectValue placeholder="Select text case" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="sentence">
                                                Sentence case
                                            </SelectItem>
                                            <SelectItem value="uppercase">
                                                UPPERCASE
                                            </SelectItem>
                                            <SelectItem value="lowercase">
                                                lowercase
                                            </SelectItem>
                                            <SelectItem value="capitalize">
                                                Capitalize Each Word
                                            </SelectItem>
                                            <SelectItem value="small-caps">
                                                Small Caps
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="branding" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-2">
                                    <Switch
                                        id="watermark"
                                        checked={settings.watermark}
                                        onCheckedChange={(checked) =>
                                            updateSettings({
                                                watermark: checked,
                                            })
                                        }
                                    />
                                    <Label htmlFor="watermark">
                                        Add Watermark/Logo
                                    </Label>
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
                                                    watermarkText:
                                                        e.target.value,
                                                })
                                            }
                                            placeholder="Watermark Text"
                                        />
                                    </div>
                                )}
                                <div className="space-y-2">
                                    <Label htmlFor="brandingStyle">
                                        Branding Style
                                    </Label>
                                    <Select
                                        value={
                                            settings.brandingStyle || "minimal"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                brandingStyle: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="brandingStyle">
                                            <SelectValue placeholder="Select branding style" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="minimal">
                                                Minimal
                                            </SelectItem>
                                            <SelectItem value="prominent">
                                                Prominent
                                            </SelectItem>
                                            <SelectItem value="subtle">
                                                Subtle
                                            </SelectItem>
                                            <SelectItem value="integrated">
                                                Integrated
                                            </SelectItem>
                                            <SelectItem value="luxury">
                                                Luxury
                                            </SelectItem>
                                            <SelectItem value="modern">
                                                Modern
                                            </SelectItem>
                                            <SelectItem value="classic">
                                                Classic
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="logoPosition">
                                        Logo Position
                                    </Label>
                                    <Select
                                        value={
                                            settings.logoPosition ||
                                            "bottom-right"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                logoPosition: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="logoPosition">
                                            <SelectValue placeholder="Select logo position" />
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
                                            <SelectItem value="center">
                                                Center
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="brandIdentity">
                                        Brand Identity
                                    </Label>
                                    <Select
                                        value={
                                            settings.brandIdentity || "premium"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                brandIdentity: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="brandIdentity">
                                            <SelectValue placeholder="Select brand identity" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="premium">
                                                Premium/Luxury
                                            </SelectItem>
                                            <SelectItem value="artisanal">
                                                Artisanal/Handcrafted
                                            </SelectItem>
                                            <SelectItem value="modern">
                                                Modern/Contemporary
                                            </SelectItem>
                                            <SelectItem value="traditional">
                                                Traditional/Classic
                                            </SelectItem>
                                            <SelectItem value="minimalist">
                                                Minimalist
                                            </SelectItem>
                                            <SelectItem value="elegant">
                                                Elegant
                                            </SelectItem>
                                            <SelectItem value="exotic">
                                                Exotic
                                            </SelectItem>
                                            <SelectItem value="natural">
                                                Natural/Organic
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="brandingElements">
                                        Branding Elements
                                    </Label>
                                    <Select
                                        value={
                                            settings.brandingElements || "logo"
                                        }
                                        onValueChange={(value) =>
                                            updateSettings({
                                                brandingElements: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="brandingElements">
                                            <SelectValue placeholder="Select branding elements" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="logo">
                                                Logo Only
                                            </SelectItem>
                                            <SelectItem value="logo-tagline">
                                                Logo with Tagline
                                            </SelectItem>
                                            <SelectItem value="monogram">
                                                Monogram
                                            </SelectItem>
                                            <SelectItem value="signature">
                                                Signature
                                            </SelectItem>
                                            <SelectItem value="emblem">
                                                Emblem
                                            </SelectItem>
                                            <SelectItem value="pattern">
                                                Brand Pattern
                                            </SelectItem>
                                            <SelectItem value="color-scheme">
                                                Color Scheme Only
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2 flex items-center gap-2">
                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            id="useTagline"
                                            checked={
                                                settings.useTagline || false
                                            }
                                            onCheckedChange={(checked) =>
                                                updateSettings({
                                                    useTagline: checked,
                                                })
                                            }
                                        />
                                        <Label htmlFor="useTagline">
                                            Include Brand Tagline
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
