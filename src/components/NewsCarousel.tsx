"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export interface NewsItem {
    date: string;
    title: string;
    desc: string;
    image?: string;
    href?: string;
}

// El carrusel avanza solo cada 5s (AUTOPLAY_DELAY_MS); cambia este valor para
// ajustar la velocidad automática. También se puede desplazar manualmente.
const AUTOPLAY_DELAY_MS = 5000;

// =============================================================================
// COMPONENTE: CARRUSEL DE NOTICIAS (AGENDA OKAN)
// - Muestra una noticia a la vez, con foto de fondo, fecha, título y descripción
//   siempre visibles (no requiere pasar el puntero encima).
// - Avanza automáticamente cada AUTOPLAY_DELAY_MS y también se puede
//   desplazar manualmente con las flechas, el teclado o arrastrando.
// - Si un item no tiene "image", se usa un degradado morado de respaldo.
// - Si un item no tiene "href", la tarjeta no es clicable.
// =============================================================================

export default function NewsCarousel({ items }: { items: NewsItem[] }) {
    return (
        <Swiper
            modules={[A11y, Autoplay, Keyboard, Navigation]}
            a11y={{ enabled: true }}
            keyboard={{ enabled: true }}
            navigation
            loop
            autoplay={{
                delay: AUTOPLAY_DELAY_MS,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            slidesPerView={1}
            className="news-carousel !overflow-hidden"
        >
            {items.map((item, index) => {
                const background = item.image ? (
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#3b0764_0%,#0a0a0a_70%)]" />
                );

                const info = (
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
                        <p className="text-brand-300 text-xs font-semibold tracking-[0.25em] uppercase">
                            {item.date}
                        </p>
                        <h3 className="font-display mt-3 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
                            {item.title}
                        </h3>
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
                            {item.desc}
                        </p>
                    </div>
                );

                return (
                    <SwiperSlide key={`${item.title}-${index}`}>
                        {item.href ? (
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="relative block h-[70svh] min-h-[28rem] overflow-hidden bg-zinc-950 text-white"
                            >
                                {background}
                                <div className="absolute inset-0 bg-black/55" />
                                {info}
                            </a>
                        ) : (
                            <div className="relative h-[70svh] min-h-[28rem] overflow-hidden bg-zinc-950 text-white">
                                {background}
                                <div className="absolute inset-0 bg-black/55" />
                                {info}
                            </div>
                        )}
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
