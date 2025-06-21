"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

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

  return (
    <>
      {/* Skeleton loader */}
      {isLoading && (
        <Skeleton className="absolute inset-0" />
      )}
      
      {/* Actual image */}
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
        sizes={sizes}
        priority={priority}
      />
    </>
  );
}