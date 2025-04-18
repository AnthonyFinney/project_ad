"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface PromptDisplayProps {
    prompt: string;
    bottleImage?: string;
    onCopy: () => void;
}

export function PromptDisplay({
    prompt,
    bottleImage,
    onCopy,
}: PromptDisplayProps) {
    return (
        <Card className="border-2 border-gray-200">
            <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle>Generated Prompt</CardTitle>
                        <CardDescription>
                            Use this prompt with any AI image generator
                        </CardDescription>
                    </div>
                    {prompt && (
                        <Button
                            onClick={onCopy}
                            variant="outline"
                            size="sm"
                            className="h-8"
                        >
                            <Copy className="h-4 w-4 mr-2" />
                            Copy
                        </Button>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                {bottleImage && (
                    <div className="mb-4">
                        <p className="text-sm font-medium mb-2">
                            Reference Image:
                        </p>
                        <div className="border border-gray-200 rounded-md overflow-hidden">
                            <img
                                src={bottleImage || "/placeholder.svg"}
                                alt="Bottle reference"
                                className="w-full h-auto max-h-[200px] object-contain"
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            This image will be used as a reference. Upload your
                            image to the AI tool separately.
                        </p>
                    </div>
                )}

                {prompt ? (
                    <div className="bg-gray-50 p-4 rounded-md text-sm font-mono overflow-auto max-h-[500px] border border-gray-200">
                        {prompt}
                    </div>
                ) : (
                    <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-400 border border-gray-200 min-h-[200px] flex items-center justify-center">
                        Configure your settings and click "Generate Prompt" to
                        create your AI image prompt
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
