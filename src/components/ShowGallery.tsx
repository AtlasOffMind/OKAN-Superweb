"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type GallerySection =
    | { type: "grid"; imageNumbers: number[]; columns: 2 | 3 }
    | { type: "feature"; imageNumbers: [number] };

const gallerySections: GallerySection[] = [
    { type: "feature", imageNumbers: [2] },
    { type: "grid", imageNumbers: [4, 5], columns: 2 },
    { type: "feature", imageNumbers: [3] },
    { type: "grid", imageNumbers: [7, 8], columns: 2 },
    { type: "feature", imageNumbers: [6] },
    { type: "grid", imageNumbers: [9, 10], columns: 2 },
    { type: "feature", imageNumbers: [11] },
    { type: "grid", imageNumbers: [12, 13, 14, 15, 16, 17], columns: 3 },
    { type: "grid", imageNumbers: [18, 19, 20, 21, 22, 23], columns: 3 },
    { type: "grid", imageNumbers: [24, 25, 26, 27, 28, 29], columns: 3 },
    { type: "feature", imageNumbers: [30] },
];

function imagePath(imageNumber: number) {
    return `/images/OKAN%20en%20accion/Shows/${imageNumber}.webp`;
}

export function ShowGallery({
    galleryTitle,
    imageAltPrefix,
    expandLabel,
    closeLabel,
}: {
    galleryTitle: string;
    imageAltPrefix: string;
    expandLabel: string;
    closeLabel: string;
}) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (selectedImage !== null && dialogRef.current && !dialogRef.current.open) {
            dialogRef.current.showModal();
        }
    }, [selectedImage]);

    return (
        <section aria-labelledby="show-gallery-heading" className="w-full bg-zinc-950">
            <h2 id="show-gallery-heading" className="sr-only">
                {galleryTitle}
            </h2>
            <div className="flex flex-col gap-1 sm:gap-2">
                {gallerySections.map((section, sectionIndex) =>
                    section.type === "feature" ? (
                        <button
                            key={`feature-${section.imageNumbers[0]}`}
                            type="button"
                            onClick={() => setSelectedImage(section.imageNumbers[0])}
                            aria-label={`${expandLabel} ${section.imageNumbers[0]}`}
                            className="relative block aspect-video w-full overflow-hidden bg-zinc-900 focus-visible:z-10 focus-visible:outline-4 focus-visible:outline-brand-400"
                        >
                            <Image
                                src={imagePath(section.imageNumbers[0])}
                                alt={`${imageAltPrefix} ${section.imageNumbers[0]}`}
                                fill
                                sizes="100vw"
                                className="object-cover transition-transform duration-500 hover:scale-[1.015]"
                            />
                        </button>
                    ) : (
                        <div
                            key={`grid-${sectionIndex}`}
                            className={`grid grid-cols-2 gap-1 sm:gap-2 ${section.columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}
                        >
                            {section.imageNumbers.map((imageNumber) => (
                                <button
                                    key={imageNumber}
                                    type="button"
                                    onClick={() => setSelectedImage(imageNumber)}
                                    aria-label={`${expandLabel} ${imageNumber}`}
                                    className="relative block aspect-video w-full overflow-hidden bg-zinc-900 focus-visible:z-10 focus-visible:outline-4 focus-visible:outline-brand-400"
                                >
                                    <Image
                                        src={imagePath(imageNumber)}
                                        alt={`${imageAltPrefix} ${imageNumber}`}
                                        fill
                                        sizes={section.columns === 2 ? "50vw" : "(min-width: 640px) 33vw, 50vw"}
                                        className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                                    />
                                </button>
                            ))}
                        </div>
                    ),
                )}
            </div>

            <dialog
                ref={dialogRef}
                onClose={() => setSelectedImage(null)}
                onClick={(event) => {
                    if (event.target === dialogRef.current) {
                        dialogRef.current.close();
                    }
                }}
                className="m-auto h-[min(92dvh,900px)] w-[min(96vw,1600px)] max-h-none max-w-none bg-transparent p-0 text-white backdrop:bg-black/90"
            >
                {selectedImage !== null && (
                    <div className="relative h-full w-full">
                        <Image
                            src={imagePath(selectedImage)}
                            alt={`${imageAltPrefix} ${selectedImage}`}
                            fill
                            sizes="96vw"
                            className="object-contain"
                        />
                        <button
                            type="button"
                            onClick={() => dialogRef.current?.close()}
                            className="absolute right-3 top-3 z-10 bg-black/70 px-4 py-2 text-sm font-semibold text-white hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            {closeLabel}
                        </button>
                    </div>
                )}
            </dialog>
        </section>
    );
}