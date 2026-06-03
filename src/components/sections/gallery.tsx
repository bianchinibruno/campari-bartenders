"use client";

import Image from "next/image";
import { useState } from "react";
import { Section } from "@/components/ui/section";
import { galleryFilters, galleryItems, sectionCopy, type GalleryCategory } from "@/lib/content";
import { media } from "@/lib/media";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory>("todos");
  const copy = sectionCopy.gallery;

  const filtered =
    filter === "todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const heroImage = filtered[0] ?? galleryItems[0];

  return (
    <Section
      id="galeria"
      variant="warm"
      background={{ ...media.backgrounds.gallery }}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {galleryFilters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={cn(
              "cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
              filter === f.value
                ? "bg-campari text-white shadow-md"
                : "bg-white/80 text-muted hover:bg-campari/10 hover:text-foreground",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-12">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lg md:col-span-8 md:aspect-auto md:min-h-[360px]">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 66vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-campari-charcoal/70 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 font-display text-xl text-white md:text-2xl">
            {heroImage.alt}
          </p>
        </div>
        <div
          className="relative hidden overflow-hidden rounded-2xl md:col-span-4 md:block"
          style={{ backgroundImage: `url(${media.sections.gallery})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="flex h-full min-h-[360px] flex-col justify-end bg-campari-charcoal/60 p-6">
            <p className="font-display text-lg text-campari-gold-light">{copy.instagramHandle}</p>
            <p className="mt-2 text-sm text-white/75">{copy.instagramBody}</p>
            <a
              href="https://www.instagram.com/campari_bartenders/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex cursor-pointer text-sm font-medium text-white underline-offset-2 hover:underline"
            >
              Ver no Instagram →
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {filtered.slice(1).map((item) => (
          <div
            key={item.id}
            className="group relative aspect-square cursor-default overflow-hidden rounded-xl bg-campari-cream shadow-sm"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-campari-charcoal/80 via-campari-charcoal/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="absolute bottom-3 left-3 right-3 text-xs font-medium text-white">
                {item.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
