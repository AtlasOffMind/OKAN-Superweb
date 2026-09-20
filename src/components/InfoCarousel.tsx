"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export interface InfoCarouselItem {
    date: string;
    title: string;
    desc: string;
    href: string;
}

interface InfoCarouselProps {
    items: InfoCarouselItem[];
    linkLabel: string;
}

// =============================================================================
// COMPONENTE: CARRUSEL GENÉRICO DE TARJETAS INFORMATIVAS (BITÁCORA OKAN)
// - Se usa tanto para "Noticias OKAN" como para "Biblioteca".
// - Cada tarjeta muestra fecha, título, descripción y un botón con link propio.
// - Basado en el mismo patrón que src/components/FacultyCarousel.tsx.
// =============================================================================

export default function InfoCarousel({ items, linkLabel }: InfoCarouselProps) {
    return (
        <Swiper
            modules={[A11y, Keyboard, Navigation]}
            a11y={{ enabled: true }}
            keyboard={{ enabled: true }}
            navigation
            loop={items.length > 3}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="info-carousel !overflow-hidden !px-1 !py-2 [&_.swiper-button-next]:h-11 [&_.swiper-button-next]:w-11 [&_.swiper-button-prev]:h-11 [&_.swiper-button-prev]:w-11"
        >
            {items.map((item, index) => (
                <SwiperSlide key={`${item.title}-${index}`} className="!h-auto">
                    <article className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                        <div>
                            <p className="text-brand-300 text-xs font-semibold tracking-[0.2em] uppercase">
                                {item.date}
                            </p>
                            <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-white">
                                {item.title}
                            </h3>
                            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                                {item.desc}
                            </p>
                        </div>
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-brand-300 hover:text-white inline-flex w-fit items-center gap-2 text-sm font-semibold transition-colors"
                        >
                            {linkLabel}
                            <span aria-hidden="true">-&gt;</span>
                        </a>
                    </article>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
