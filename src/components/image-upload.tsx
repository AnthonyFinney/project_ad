"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ImageUploadProps {
    onImageUpload: (imageData: string) => void;
    onImageRemove: () => void;
    currentImage?: string;
    label: string;
}

export function ImageUpload({
    onImageUpload,
    onImageRemove,
    currentImage,
    label,
}: ImageUploadProps) {
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (file: File) => {
        if (!file.type.match("image.*")) {
            alert("Please select an image file");
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target && typeof e.target.result === "string") {
                onImageUpload(e.target.result);
            }
        };
        reader.readAsDataURL(file);
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleRemoveImage = () => {
        onImageRemove();
    };

    return (
        <div className="w-full">
            {!currentImage ? (
                <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                        isDragging
                            ? "border-primary bg-primary/5"
                            : "border-gray-300 hover:border-primary"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={handleButtonClick}
                >
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/*"
                    />
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm font-medium">{label}</p>
                    <p className="mt-1 text-xs text-gray-500">
                        Drag and drop or click to upload (PNG, JPG)
                    </p>
                </div>
            ) : (
                <Card className="relative overflow-hidden">
                    <div className="aspect-square w-full overflow-hidden">
                        <img
                            src={currentImage || "/placeholder.svg"}
                            alt="Uploaded bottle"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <Button
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2 h-8 w-8 p-0"
                        onClick={handleRemoveImage}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </Card>
            )}
        </div>
    );
}
