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
import type { ProductSettings } from "../types/product-settings";

interface ProductTabProps {
    settings: ProductSettings;
    updateSettings: (settings: Partial<ProductSettings>) => void;
}

export function ProductTab({ settings, updateSettings }: ProductTabProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>
                    Define the core attributes of your product
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                <SelectItem value="3 ml">3 ml</SelectItem>
                                <SelectItem value="6 ml">6 ml</SelectItem>
                                <SelectItem value="12 ml">12 ml</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="labelText">Label Text</Label>
                        <Input
                            id="labelText"
                            type="text"
                            value={settings.labelText}
                            onChange={(e) =>
                                updateSettings({ labelText: e.target.value })
                            }
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="prop">Prop</Label>
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
                                <SelectItem value="none">None</SelectItem>
                                <SelectItem value="flower">Flower</SelectItem>
                                <SelectItem value="leaf">Leaf</SelectItem>
                                <SelectItem value="fabric">Fabric</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
