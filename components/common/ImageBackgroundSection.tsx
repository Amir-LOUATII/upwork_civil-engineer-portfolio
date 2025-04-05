import type React from "react";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

interface ImageBackgroundSectionProps {
  children: React.ReactNode;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  className?: string;
  height?: string; // Custom height (e.g., "h-screen", "h-[500px]")
  width?: string; // Custom width (e.g., "w-full", "w-[800px]")
  overlayColor?: string; // Custom overlay color class (e.g., "bg-black", "bg-blue-900")
  overlayOpacity?: string; // Custom overlay opacity (e.g., "opacity-50", "opacity-75")
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  priority?: boolean;
  containerClassName?: string;
}

export default function ImageBackgroundSection({
  children,
  imageSrc,
  imageAlt,
  className = "",
  height = "h-screen",
  width = "w-full",
  overlayColor = "bg-black",
  overlayOpacity = "opacity-50",
  objectFit = "cover",
  priority = false,
  containerClassName = "container mx-auto",
}: ImageBackgroundSectionProps) {
  return (
    <section className={twMerge(`relative ${width} ${height}`, className)}>
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          fill
          alt={imageAlt}
          priority={priority}
          className={`object-${objectFit}`}
        />
      </div>

      <div
        className={`absolute inset-0 w-full h-full ${overlayColor} ${overlayOpacity}`}
      />

      <div
        className={twMerge("relative z-10 w-full h-full", containerClassName)}
      >
        {children}
      </div>
    </section>
  );
}
