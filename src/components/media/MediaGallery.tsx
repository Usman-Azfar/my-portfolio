"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { MediaImage } from "@/types";
import { AnimatePresence, motion } from "framer-motion";

export function MediaGallery({ images }: { images?: MediaImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const count = images?.length ?? 0;

  const close = () => setOpenIndex(null);
  const next = () => setOpenIndex((i) => (i === null ? null : (i + 1) % count));
  const prev = () => setOpenIndex((i) => (i === null ? null : (i - 1 + count) % count));

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex, count]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-video overflow-hidden rounded-xl border border-border bg-surface-secondary"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close lightbox"
              className="absolute right-6 top-6 rounded-full border border-border-strong p-2 text-text"
            >
              <X size={18} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-4 rounded-full border border-border-strong p-2 text-text sm:left-8"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-4 rounded-full border border-border-strong p-2 text-text sm:right-8"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-h-[80vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <Image
                  src={images[openIndex].src}
                  alt={images[openIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              {images[openIndex].caption && (
                <p className="mt-3 text-center text-sm text-muted">{images[openIndex].caption}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
