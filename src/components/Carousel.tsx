"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import all images from the carousel folder
const images = [
  "/images/carrusel/20260707_193020.jpg",
  "/images/carrusel/20260707_193406.jpg",
  "/images/carrusel/20260707_193712.jpg",
  "/images/carrusel/20260707_203802.jpg",
  "/images/carrusel/20260707_204624.jpg",
  "/images/carrusel/okan-18-3.jpg",
  "/images/carrusel/okan-38-2.jpg",
  "/images/carrusel/okan-49-2.jpg",
  "/images/carrusel/okan-59-2.jpg",
  "/images/carrusel/okan-77-2.jpg",
  "/images/carrusel/okan-85.jpg",
] as const;

interface HeroCarouselProps {
  className?: string;
}

export default function HeroCarousel({ className }: HeroCarouselProps) {
  return (
    <div className={className}>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full"
              style={{ backgroundImage: `url(${src})` }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.4),rgba(10,10,10,0.6))]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}