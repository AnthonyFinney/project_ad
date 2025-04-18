"use client";

import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageUpload } from "./image-upload";
import type { ProductSettings } from "../types/product-settings";
import { Checkbox } from "@/components/ui/checkbox";

interface ProductTabProps {
    settings: ProductSettings;
    updateSettings: (settings: Partial<ProductSettings>) => void;
}

export function ProductTab({ settings, updateSettings }: ProductTabProps) {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Perfume & Attar Details</CardTitle>
                    <CardDescription>
                        Define the core attributes of your fragrance product
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Tabs defaultValue="bottle" className="w-full">
                        <TabsList className="grid grid-cols-4 mb-4">
                            <TabsTrigger value="bottle">Bottle</TabsTrigger>
                            <TabsTrigger value="content">Content</TabsTrigger>
                            <TabsTrigger value="styling">Styling</TabsTrigger>
                            <TabsTrigger value="image">
                                Bottle Image
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="bottle" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="bottleType">
                                        Bottle Type
                                    </Label>
                                    <Select
                                        value={settings.bottleType}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                bottleType: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="bottleType">
                                            <SelectValue placeholder="Select bottle type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="classic">
                                                Classic
                                            </SelectItem>
                                            <SelectItem value="modern">
                                                Modern
                                            </SelectItem>
                                            <SelectItem value="vintage">
                                                Vintage
                                            </SelectItem>
                                            <SelectItem value="crystal">
                                                Crystal
                                            </SelectItem>
                                            <SelectItem value="decorative">
                                                Decorative
                                            </SelectItem>
                                            <SelectItem value="minimalist">
                                                Minimalist
                                            </SelectItem>
                                            <SelectItem value="attar">
                                                Traditional Attar
                                            </SelectItem>
                                            <SelectItem value="luxury">
                                                Luxury
                                            </SelectItem>
                                            <SelectItem value="artistic">
                                                Artistic
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="bottleColor">
                                        Bottle Color
                                    </Label>
                                    <Select
                                        value={settings.bottleColor}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                bottleColor: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="bottleColor">
                                            <SelectValue placeholder="Select bottle color" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="clear">
                                                Clear Glass
                                            </SelectItem>
                                            <SelectItem value="amber">
                                                Amber
                                            </SelectItem>
                                            <SelectItem value="blue">
                                                Blue
                                            </SelectItem>
                                            <SelectItem value="green">
                                                Green
                                            </SelectItem>
                                            <SelectItem value="purple">
                                                Purple
                                            </SelectItem>
                                            <SelectItem value="black">
                                                Black
                                            </SelectItem>
                                            <SelectItem value="white">
                                                White
                                            </SelectItem>
                                            <SelectItem value="gold">
                                                Gold
                                            </SelectItem>
                                            <SelectItem value="silver">
                                                Silver
                                            </SelectItem>
                                            <SelectItem value="rose-gold">
                                                Rose Gold
                                            </SelectItem>
                                            <SelectItem value="frosted">
                                                Frosted
                                            </SelectItem>
                                            <SelectItem value="iridescent">
                                                Iridescent
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="capStyle">Cap Style</Label>
                                    <Select
                                        value={settings.capStyle}
                                        onValueChange={(value) =>
                                            updateSettings({ capStyle: value })
                                        }
                                    >
                                        <SelectTrigger id="capStyle">
                                            <SelectValue placeholder="Select cap style" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="brushed-metal">
                                                Brushed Metal
                                            </SelectItem>
                                            <SelectItem value="gold">
                                                Gold
                                            </SelectItem>
                                            <SelectItem value="silver">
                                                Silver
                                            </SelectItem>
                                            <SelectItem value="crystal">
                                                Crystal
                                            </SelectItem>
                                            <SelectItem value="wooden">
                                                Wooden
                                            </SelectItem>
                                            <SelectItem value="ornate">
                                                Ornate
                                            </SelectItem>
                                            <SelectItem value="minimalist">
                                                Minimalist
                                            </SelectItem>
                                            <SelectItem value="tassel">
                                                Tassel (Attar)
                                            </SelectItem>
                                            <SelectItem value="dropper">
                                                Dropper
                                            </SelectItem>
                                            <SelectItem value="spray">
                                                Spray
                                            </SelectItem>
                                            <SelectItem value="decorative">
                                                Decorative
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="volume">Volume</Label>
                                    <Select
                                        value={settings.volume}
                                        onValueChange={(value) =>
                                            updateSettings({ volume: value })
                                        }
                                    >
                                        <SelectTrigger id="volume">
                                            <SelectValue placeholder="Select volume" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="3 ml">
                                                3 ml (Attar)
                                            </SelectItem>
                                            <SelectItem value="6 ml">
                                                6 ml (Attar)
                                            </SelectItem>
                                            <SelectItem value="10 ml">
                                                10 ml
                                            </SelectItem>
                                            <SelectItem value="15 ml">
                                                15 ml
                                            </SelectItem>
                                            <SelectItem value="30 ml">
                                                30 ml
                                            </SelectItem>
                                            <SelectItem value="50 ml">
                                                50 ml
                                            </SelectItem>
                                            <SelectItem value="100 ml">
                                                100 ml
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="content" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="liquidColor">
                                        Liquid Color
                                    </Label>
                                    <Select
                                        value={settings.liquidColor}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                liquidColor: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="liquidColor">
                                            <SelectValue placeholder="Select liquid color" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="clear">
                                                Clear
                                            </SelectItem>
                                            <SelectItem value="amber">
                                                Amber
                                            </SelectItem>
                                            <SelectItem value="golden">
                                                Golden
                                            </SelectItem>
                                            <SelectItem value="light-yellow">
                                                Light Yellow
                                            </SelectItem>
                                            <SelectItem value="pink">
                                                Pink
                                            </SelectItem>
                                            <SelectItem value="light-blue">
                                                Light Blue
                                            </SelectItem>
                                            <SelectItem value="blue">
                                                Blue
                                            </SelectItem>
                                            <SelectItem value="green">
                                                Green
                                            </SelectItem>
                                            <SelectItem value="purple">
                                                Purple
                                            </SelectItem>
                                            <SelectItem value="red">
                                                Red
                                            </SelectItem>
                                            <SelectItem value="brown">
                                                Brown
                                            </SelectItem>
                                            <SelectItem value="black">
                                                Black
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="perfumeType">
                                        Product Type
                                    </Label>
                                    <Select
                                        value={settings.perfumeType}
                                        onValueChange={(value) =>
                                            updateSettings({
                                                perfumeType: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger id="perfumeType">
                                            <SelectValue placeholder="Select product type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="attar">
                                                Attar (Concentrated Oil)
                                            </SelectItem>
                                            <SelectItem value="perfume">
                                                Perfume
                                            </SelectItem>
                                            <SelectItem value="eau-de-parfum">
                                                Eau de Parfum
                                            </SelectItem>
                                            <SelectItem value="eau-de-toilette">
                                                Eau de Toilette
                                            </SelectItem>
                                            <SelectItem value="cologne">
                                                Cologne
                                            </SelectItem>
                                            <SelectItem value="body-mist">
                                                Body Mist
                                            </SelectItem>
                                            <SelectItem value="essential-oil">
                                                Essential Oil
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="styling" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="labelText">
                                        Label Text
                                    </Label>
                                    <Input
                                        id="labelText"
                                        type="text"
                                        value={settings.labelText}
                                        onChange={(e) =>
                                            updateSettings({
                                                labelText: e.target.value,
                                            })
                                        }
                                        placeholder="Product name or brand"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="prop">Prop/Accessory</Label>
                                    <Select
                                        value={settings.prop}
                                        onValueChange={(value) =>
                                            updateSettings({ prop: value })
                                        }
                                    >
                                        <SelectTrigger id="prop">
                                            <SelectValue placeholder="Select prop" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">
                                                None
                                            </SelectItem>
                                            <SelectItem value="flower">
                                                Flower
                                            </SelectItem>
                                            <SelectItem value="rose">
                                                Rose
                                            </SelectItem>
                                            <SelectItem value="jasmine">
                                                Jasmine
                                            </SelectItem>
                                            <SelectItem value="oud">
                                                Oud Wood
                                            </SelectItem>
                                            <SelectItem value="sandalwood">
                                                Sandalwood
                                            </SelectItem>
                                            <SelectItem value="cinnamon">
                                                Cinnamon Sticks
                                            </SelectItem>
                                            <SelectItem value="vanilla">
                                                Vanilla Pods
                                            </SelectItem>
                                            <SelectItem value="leaf">
                                                Leaf
                                            </SelectItem>
                                            <SelectItem value="fabric">
                                                Silk Fabric
                                            </SelectItem>
                                            <SelectItem value="velvet">
                                                Velvet
                                            </SelectItem>
                                            <SelectItem value="pearls">
                                                Pearls
                                            </SelectItem>
                                            <SelectItem value="crystals">
                                                Crystals
                                            </SelectItem>
                                            <SelectItem value="gift-box">
                                                Gift Box
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="additionalDetails">
                                        Additional Details
                                    </Label>
                                    <Textarea
                                        id="additionalDetails"
                                        value={settings.additionalDetails}
                                        onChange={(e) =>
                                            updateSettings({
                                                additionalDetails:
                                                    e.target.value,
                                            })
                                        }
                                        placeholder="Additional details about the product (e.g., engraving, special finish, packaging)"
                                        className="resize-none h-20"
                                    />
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="image" className="space-y-4">
                            <div className="grid grid-cols-1 gap-4">
                                <div className="space-y-2">
                                    <Label>Bottle Reference Image</Label>
                                    <p className="text-sm text-gray-500 mb-4">
                                        Upload an image of your bottle to use as
                                        a reference. This will be included in
                                        the prompt.
                                    </p>
                                    <ImageUpload
                                        onImageUpload={(imageData) =>
                                            updateSettings({
                                                bottleImage: imageData,
                                            })
                                        }
                                        onImageRemove={() =>
                                            updateSettings({
                                                bottleImage: undefined,
                                            })
                                        }
                                        currentImage={settings.bottleImage}
                                        label="Upload Bottle Image"
                                    />
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox
                                            id="useImageAsMainReference"
                                            checked={
                                                settings.useImageAsMainReference ||
                                                false
                                            }
                                            onCheckedChange={(checked) =>
                                                updateSettings({
                                                    useImageAsMainReference:
                                                        checked === true,
                                                })
                                            }
                                        />
                                        <Label htmlFor="useImageAsMainReference">
                                            Use image as primary reference
                                            (override bottle settings)
                                        </Label>
                                    </div>
                                </div>
                                {settings.bottleImage && (
                                    <div className="space-y-2">
                                        <Label htmlFor="bottleImageDescription">
                                            Image Description
                                        </Label>
                                        <Textarea
                                            id="bottleImageDescription"
                                            value={
                                                settings.bottleImageDescription ||
                                                ""
                                            }
                                            onChange={(e) =>
                                                updateSettings({
                                                    bottleImageDescription:
                                                        e.target.value,
                                                })
                                            }
                                            placeholder="Describe the bottle in the image (e.g., 'crystal bottle with gold cap')"
                                            className="resize-none h-20"
                                        />
                                        <p className="text-xs text-gray-500">
                                            Adding a description helps the AI
                                            understand the key features of your
                                            bottle image.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Preset Styles</CardTitle>
                    <CardDescription>
                        Quick templates for common perfume and attar styles
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <Button
                            variant="outline"
                            className="h-auto py-5 px-3 flex flex-col items-center text-center"
                            onClick={() =>
                                updateSettings({
                                    bottleType: "attar",
                                    bottleColor: "clear",
                                    capStyle: "tassel",
                                    volume: "6 ml",
                                    liquidColor: "amber",
                                    perfumeType: "attar",
                                    prop: "oud",
                                })
                            }
                        >
                            <span className="font-medium text-base">
                                Traditional Attar
                            </span>
                            <span className="text-xs md:text-sm text-gray-500 mt-2">
                                Small decorative bottle with tassel cap
                            </span>
                        </Button>

                        <Button
                            variant="outline"
                            className="h-auto py-5 px-3 flex flex-col items-center text-center"
                            onClick={() =>
                                updateSettings({
                                    bottleType: "luxury",
                                    bottleColor: "clear",
                                    capStyle: "gold",
                                    volume: "50 ml",
                                    liquidColor: "light-yellow",
                                    perfumeType: "eau-de-parfum",
                                    prop: "flower",
                                })
                            }
                        >
                            <span className="font-medium text-base">
                                Luxury Perfume
                            </span>
                            <span className="text-xs md:text-sm text-gray-500 mt-2">
                                Elegant bottle with gold accents
                            </span>
                        </Button>

                        <Button
                            variant="outline"
                            className="h-auto py-5 px-3 flex flex-col items-center text-center"
                            onClick={() =>
                                updateSettings({
                                    bottleType: "minimalist",
                                    bottleColor: "frosted",
                                    capStyle: "minimalist",
                                    volume: "100 ml",
                                    liquidColor: "clear",
                                    perfumeType: "eau-de-toilette",
                                    prop: "none",
                                })
                            }
                        >
                            <span className="font-medium text-base">
                                Modern Minimal
                            </span>
                            <span className="text-xs md:text-sm text-gray-500 mt-2">
                                Clean lines with frosted glass
                            </span>
                        </Button>

                        <Button
                            variant="outline"
                            className="h-auto py-5 px-3 flex flex-col items-center text-center"
                            onClick={() =>
                                updateSettings({
                                    bottleType: "vintage",
                                    bottleColor: "amber",
                                    capStyle: "ornate",
                                    volume: "30 ml",
                                    liquidColor: "amber",
                                    perfumeType: "perfume",
                                    prop: "velvet",
                                })
                            }
                        >
                            <span className="font-medium text-base">
                                Vintage Style
                            </span>
                            <span className="text-xs md:text-sm text-gray-500 mt-2">
                                Ornate bottle with antique finish
                            </span>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
