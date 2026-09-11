import Image from "next/image";

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

interface ImageMarqueeProps {
  className?: string;
}

export default function ImageMarquee({ className }: ImageMarqueeProps) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className="flex h-full w-max shrink-0 flex-nowrap animate-marquee">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex h-full w-max shrink-0 flex-nowrap"
          >
            {images.map((src, index) => (
              <div
                key={`${copy}-${src}`}
                className="flex h-full shrink-0 items-center justify-center"
              >
                <Image
                  src={src}
                  alt=""
                  width={1600}
                  height={1067}
                  priority={copy === 0 && index === 0}
                  className="block h-full w-auto max-w-none object-contain object-center"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}