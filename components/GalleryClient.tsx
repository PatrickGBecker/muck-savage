"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryPhoto {
  url: string;
  thumbUrl: string;
  caption?: string;
  year?: number;
  venue?: string;
}

export default function GalleryClient({ photos }: { photos: GalleryPhoto[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const close = useCallback(() => setSelectedIndex(null), []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % photos.length : null
    );
  }, [photos.length]);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + photos.length) % photos.length : null
    );
  }, [photos.length]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedIndex, close, goNext, goPrev]);

  const selected = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <>
      {/* ─── Photo Grid ────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className="group relative aspect-square overflow-hidden border border-peat-800/20 hover:border-copper/40 transition-all duration-300 cursor-pointer"
          >
            <Image
              src={photo.thumbUrl}
              alt={photo.caption || `Gallery photo ${i + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300" />

            {/* Caption overlay on hover */}
            {(photo.caption || photo.venue) && (
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-ink/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs text-cream/80 font-display italic truncate">
                  {photo.caption || photo.venue}
                </p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* ─── Lightbox Modal ────────────────────────────────────── */}
      {selected && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex items-center justify-center"
          onClick={close}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 flex items-center justify-center text-cream/60 hover:text-cream transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-cream/40 hover:text-copper transition-colors"
            aria-label="Previous"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-cream/40 hover:text-copper transition-colors"
            aria-label="Next"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-4 md:mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[75vh]">
              <Image
                src={selected.url}
                alt={selected.caption || `Gallery photo ${selectedIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Caption bar */}
            <div className="mt-4 text-center">
              {selected.caption && (
                <p className="font-display text-base md:text-lg text-cream/80 italic">
                  {selected.caption}
                </p>
              )}
              <div className="flex items-center justify-center gap-3 mt-1">
                {selected.venue && (
                  <span className="text-xs text-cream/40 tracking-wider">
                    {selected.venue}
                  </span>
                )}
                {selected.venue && selected.year && (
                  <span className="text-cream/20">·</span>
                )}
                {selected.year && (
                  <span className="text-xs text-cream/40 tracking-wider">
                    {selected.year}
                  </span>
                )}
              </div>
              <p className="text-xs text-cream/25 mt-2 tracking-wider">
                {selectedIndex + 1} / {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
