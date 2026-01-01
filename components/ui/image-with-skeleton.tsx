"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { ImageOff } from "lucide-react";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function ImageWithSkeleton({
  src,
  alt,
  fill = true,
  className,
  sizes,
  priority = false,
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="absolute inset-0 bg-muted flex flex-col items-center justify-center gap-2">
        <ImageOff className="size-8 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Image unavailable</span>
      </div>
    );
  }

  return (
    <>
      {isLoading && <Skeleton className="absolute inset-0" />}

      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        sizes={sizes}
        priority={priority}
      />
    </>
  );
}
