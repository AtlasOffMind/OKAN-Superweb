"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import type { FacultyMember } from "@/lib/faculty";

interface FacultyCarouselProps {
    members: FacultyMember[];
    locale: string;
    aboutHref: string;
}

export default function FacultyCarousel({
    members,
    locale,
    aboutHref,
}: FacultyCarouselProps) {
    return (
        <Swiper
            modules={[A11y, Keyboard, Navigation]}
            a11y={{ enabled: true }}
            keyboard={{ enabled: true }}
            navigation
            loop
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
            }}
            className="faculty-carousel !overflow-hidden"
        >
            {members.map((member) => (
                <SwiperSlide key={member.file} className="!h-auto">
                    <Link
                        href={aboutHref}
                        className="group relative block h-full min-h-[30rem] overflow-hidden bg-zinc-950 text-white focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
                        aria-label={`${member.name}, ${locale === "es" ? member.role : member.roleEn}`}
                    >
                        <div className="absolute inset-0 overflow-hidden">
                            <Image
                                src={member.file}
                                alt={member.name}
                                fill
                                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 47vw, 87vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 max-h-36 overflow-hidden bg-black/55 p-5 backdrop-blur-[2px] transition-[max-height,background-color] duration-700 ease-out group-hover:max-h-full group-hover:bg-black/75 md:p-6">
                            <p className="text-brand-300 text-xs font-semibold tracking-[0.2em] uppercase">
                                {locale === "es" ? member.role : member.roleEn}
                            </p>
                            <h3 className="font-display mt-3 text-2xl font-semibold leading-tight">
                                {member.name}
                            </h3>
                            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                                {locale === "es" ? member.bio : member.bioEn}
                            </p>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
