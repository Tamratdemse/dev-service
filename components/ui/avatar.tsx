import React from "react";
import Image from "next/image";
export function Avatar({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full bg-muted ${className}`}
    >
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      className="h-full w-full rounded-full object-cover"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

export function AvatarFallback({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center h-full w-full text-sm font-medium text-muted-foreground">
      {children}
    </div>
  );
}
