"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectFade, Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export interface ProductionItem {
  title: string;
  desc?: string | string[];
  date?: string;
  image?: string;
  video?: string;
  poster?: string;
}

export function ProductionCarousel({
  items,
  showDetails,
}: {
  items: ProductionItem[];
  showDetails: boolean;
}) {
  return (
    <Swiper
      modules={[A11y, EffectFade, Keyboard, Navigation]}
      a11y={{ enabled: true }}
      keyboard={{ enabled: true }}
      navigation
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop={items.length > 1}
      slidesPerView={1}
      className="production-carousel !h-[min(75svh,48rem)] min-h-[22rem] md:!h-[100svh] md:min-h-[34rem] [&_.swiper-wrapper]:!h-full"
    >
      {items.map((item, index) => (
        <SwiperSlide key={`${item.title}-${index}`} className="!h-full">
          <article className="relative h-full overflow-hidden bg-zinc-950 text-white">
            {item.video ? (
              <video
                controls
                preload="metadata"
                poster={item.poster}
                className="h-full w-full object-cover"
              >
                <source src={item.video} />
              </video>
            ) : item.image || item.poster ? (
              <Image
                src={item.image ?? item.poster ?? ""}
                alt={item.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            ) : (
              <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,#4c1d95_0%,#18181b_65%)]" />
            )}
            <div className="pointer-events-none absolute inset-0 bg-black/35" />
            <div
              className={`absolute inset-y-0 right-0 flex max-h-full w-full flex-col overflow-y-auto break-words bg-gradient-to-l from-black/95 via-black/80 to-transparent p-4 sm:w-3/5 sm:p-8 md:w-1/2 md:p-14 ${showDetails && !item.video ? "pointer-events-auto" : "pointer-events-none"}`}
            >
              <h2
                className={`font-display max-w-md text-2xl font-semibold leading-[0.95] tracking-tight sm:text-4xl md:text-6xl ${showDetails ? "mt-auto text-white" : "text-brand-600"}`}
              >
                {item.title}
              </h2>
              {showDetails && item.desc && (
                <div className="mt-2 max-w-md space-y-2 text-sm leading-snug text-zinc-200 sm:mt-6 sm:space-y-3 sm:text-lg sm:leading-relaxed">
                  {(Array.isArray(item.desc) ? item.desc : [item.desc]).map(
                    (paragraph, index) => (
                      <p key={`${item.title}-desc-${index}`}>{paragraph}</p>
                    ),
                  )}
                </div>
              )}
              {showDetails && item.date && (
                <p className="text-brand-300 mt-3 text-xs font-semibold tracking-[0.18em] uppercase sm:mt-6 sm:text-sm">
                  {item.date}
                </p>
              )}
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
