import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ImagePreviewProps {
    imageUrl: string;
}

export function ImagePreview({ imageUrl }: ImagePreviewProps) {
    return (
        <Card>
            <CardHeader className="pb-2">
                <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
                {imageUrl ? (
                    <div className="aspect-square overflow-hidden rounded-md border border-gray-200">
                        <img
                            src={imageUrl || "/placeholder.svg"}
                            alt="Generated product"
                            className="w-full h-full object-cover"
                        />
                    </div>
                ) : (
                    <div className="aspect-square flex items-center justify-center rounded-md border border-gray-200 bg-gray-50">
                        <p className="text-gray-400 text-sm">
                            Image preview will appear here
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
