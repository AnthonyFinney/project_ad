"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Info } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ProductSettings } from "../types/product-settings";

interface AITabProps {
    settings: ProductSettings;
    updateSettings: (settings: Partial<ProductSettings>) => void;
}

export function AITab({ settings, updateSettings }: AITabProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>AI Settings</CardTitle>
                <CardDescription>
                    Configure AI generation parameters for your prompt
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="useLoRA"
                            checked={settings.useLoRA}
                            onCheckedChange={(checked) =>
                                updateSettings({ useLoRA: checked })
                            }
                        />
                        <div className="flex items-center gap-2">
                            <Label htmlFor="useLoRA">Use LoRA</Label>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info className="h-4 w-4 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="w-80">
                                            LoRA (Low-Rank Adaptation) helps
                                            fine-tune the AI model for specific
                                            styles
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="loraWeight">
                                LoRA Weight: {settings.loraWeight}
                            </Label>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info className="h-4 w-4 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="w-80">
                                            Controls how strongly the LoRA
                                            influences the generation
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <Slider
                            id="loraWeight"
                            min={0}
                            max={1}
                            step={0.05}
                            value={[settings.loraWeight]}
                            onValueChange={(value) =>
                                updateSettings({ loraWeight: value[0] })
                            }
                            disabled={!settings.useLoRA}
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="steps">
                                Steps: {settings.steps}
                            </Label>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info className="h-4 w-4 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="w-80">
                                            Higher values produce more refined
                                            images but take longer to generate
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <Slider
                            id="steps"
                            min={20}
                            max={150}
                            step={1}
                            value={[settings.steps]}
                            onValueChange={(value) =>
                                updateSettings({ steps: value[0] })
                            }
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="cfg">
                                CFG Scale: {settings.cfg}
                            </Label>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info className="h-4 w-4 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="w-80">
                                            Controls how closely the AI follows
                                            your prompt. Higher values = more
                                            literal
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <Slider
                            id="cfg"
                            min={1}
                            max={20}
                            step={0.5}
                            value={[settings.cfg]}
                            onValueChange={(value) =>
                                updateSettings({ cfg: value[0] })
                            }
                        />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="negativePrompt">
                                Negative Prompt
                            </Label>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info className="h-4 w-4 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="w-80">
                                            Elements you want to avoid in the
                                            generated image
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <Textarea
                            id="negativePrompt"
                            value={
                                (settings.negativePrompt,
                                "text overlays or typography")
                            }
                            onChange={(e) =>
                                updateSettings({
                                    negativePrompt: e.target.value,
                                })
                            }
                            placeholder="E.g., blurry, distorted, low quality, text, watermark"
                            className="resize-none h-20"
                        />
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md text-sm mt-4 border border-gray-200">
                    <h4 className="font-medium mb-2">AI Parameter Tips:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>
                            For product photography, a CFG of 7-10 usually works
                            well
                        </li>
                        <li>
                            40-60 steps is typically sufficient for most
                            generations
                        </li>
                        <li>
                            Common negative prompts: "blurry, distorted, low
                            quality, bad anatomy, text, watermark"
                        </li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
}
