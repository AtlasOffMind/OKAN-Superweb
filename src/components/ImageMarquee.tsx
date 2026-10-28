// =============================================================================
// COMPONENTE: CARRUSEL INFINITO DEL HERO (FONDO EN MOVIMIENTO DE LA PORTADA)
// - Muestra las fotos de los estudiantes en escena desplazándose continuamente.
// - Para agregar, quitar o cambiar fotos del fondo del Hero, modifica la lista 'images' abajo.
// - Las fotos físicas están guardadas en: public/images/Hero/
// =============================================================================

import Image from "next/image";

// Lista de rutas de las imágenes que se muestran en el carrusel del Hero
const images = [
  "/images/Hero/20260707_193020.webp",
  "/images/Hero/20260707_193406.webp",
  "/images/Hero/20260707_193712.webp",
  "/images/Hero/20260707_203802.webp",
  "/images/Hero/20260707_204624.webp",
  "/images/Hero/okan-18-3.webp",
  "/images/Hero/okan-38-2.webp",
  "/images/Hero/okan-49-2.webp",
  "/images/Hero/okan-59-2.webp",
  "/images/Hero/okan-77-2.webp",
  "/images/Hero/okan-85.webp",
] as const;

interface ImageMarqueeProps {
  className?: string;
}

export default function ImageMarquee({ className }: ImageMarqueeProps) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      {/* Pista animada que contiene dos copias idénticas para hacer el loop infinito */}
      <div className="animate-marquee flex h-full w-max shrink-0 flex-nowrap">
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
                  loading={copy === 0 && index === 0 ? "eager" : "lazy"}
                  sizes={
                    index < 5
                      ? "(max-width: 767px) 75vh, 100vw"
                      : index === 5
                        ? "(max-width: 767px) 67vh, 100vw"
                        : "(max-width: 767px) 150vh, 100vw"
                  }
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
