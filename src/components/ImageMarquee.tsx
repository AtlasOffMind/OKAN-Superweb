import Image from "next/image";

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

const marqueeImages = [...images, ...images];

interface ImageMarqueeProps {
  className?: string;
}

export default function ImageMarquee({ className }: ImageMarqueeProps) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className="flex h-full w-max min-w-full flex-nowrap animate-marquee">
        {marqueeImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="flex h-full shrink-0 items-center justify-center"
          >
            <Image
              src={src}
              alt=""
              width={1600}
              height={1067}
              priority={index === 0}
              className="h-full w-auto max-w-none object-contain object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}