import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface PromptDisplayProps {
    prompt: string;
}

export function PromptDisplay({ prompt }: PromptDisplayProps) {
    return (
        <Card className="border-2 border-gray-200">
            <CardHeader className="pb-2">
                <CardTitle>Generated Prompt</CardTitle>
                <CardDescription>
                    Use this prompt with any AI image generator
                </CardDescription>
            </CardHeader>
            <CardContent>
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
