"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/Hero/20260707_193020.jpg",
  "/images/Hero/20260707_193406.jpg",
  "/images/Hero/20260707_193712.jpg",
  "/images/Hero/20260707_203802.jpg",
  "/images/Hero/20260707_204624.jpg",
  "/images/Hero/okan-18-3.jpg",
  "/images/Hero/okan-38-2.jpg",
  "/images/Hero/okan-49-2.jpg",
  "/images/Hero/okan-59-2.jpg",
  "/images/Hero/okan-77-2.jpg",
  "/images/Hero/okan-85.jpg",
] as const;

interface AutoCarouselProps {
  className?: string;
}

export default function AutoCarousel({ className }: AutoCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000); // change every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={className}>
      <img
        src={images[index]}
        alt=""
        className="absolute inset-0 w-full h-full object-contain"
      />
      {/* Optional: subtle dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}