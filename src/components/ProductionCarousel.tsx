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
      className="production-carousel !h-[100svh] min-h-[34rem] [&_.swiper-button-next]:h-12 [&_.swiper-button-next]:w-12 [&_.swiper-button-prev]:h-12 [&_.swiper-button-prev]:w-12 [&_.swiper-wrapper]:!h-full"
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
            <div className="absolute inset-0 bg-black/35" />
            <div
              className={`absolute inset-y-0 right-0 flex w-full flex-col justify-end bg-gradient-to-l from-black/95 via-black/80 to-transparent p-8 sm:w-3/5 md:w-1/2 md:p-14 ${showDetails ? "" : "justify-start"}`}
            >
              <h2
                className={`font-display max-w-md text-4xl font-semibold leading-[0.95] tracking-tight md:text-6xl ${showDetails ? "text-white" : "text-brand-600"}`}
              >
                {item.title}
              </h2>
              {showDetails && item.desc && (
                <div className="mt-6 max-w-md space-y-3 text-lg leading-relaxed text-zinc-200">
                  {(Array.isArray(item.desc) ? item.desc : [item.desc]).map(
                    (paragraph, index) => (
                      <p key={`${item.title}-desc-${index}`}>{paragraph}</p>
                    ),
                  )}
                </div>
              )}
              {showDetails && item.date && (
                <p className="text-brand-300 mt-6 text-sm font-semibold tracking-[0.18em] uppercase">
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
