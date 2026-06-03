"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionBackground } from "@/components/ui/section-background";
import { sectionCopy } from "@/lib/content";
import { media } from "@/lib/media";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

export function ExperienceShowcase() {
  const whatsappLink = buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE);
  const copy = sectionCopy.experience;
  const bg = media.backgrounds.experience;

  return (
    <section id="experiencia" className="relative isolate overflow-hidden bg-campari-charcoal py-16 text-white md:py-24">
      <SectionBackground
        video={bg.video}
        poster={bg.poster}
        overlay={bg.overlay}
        animateImage={false}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="gold-line mb-4" />
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-campari-gold">
            {copy.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">{copy.description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:col-span-7 lg:aspect-auto lg:min-h-[480px]">
            <Image
              src={media.experience.poster}
              alt="Bar Campari em evento"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-campari-charcoal/80 via-campari-charcoal/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="font-display text-xl text-white md:text-2xl">{copy.videoCaption}</p>
              <p className="mt-2 max-w-md text-sm text-white/70">{copy.videoSubcaption}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5 lg:min-h-[480px]">
            {media.showcase.map((item, index) => (
              <div
                key={item.alt}
                className="group relative min-h-[140px] flex-1 cursor-default overflow-hidden rounded-2xl"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-campari-charcoal/90 via-campari-charcoal/30 to-transparent" />
                <p className="absolute bottom-4 left-4 font-medium text-white">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild variant="whatsapp" size="lg" className="cursor-pointer">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              {copy.cta}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="cursor-pointer border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            <a href="#galeria">{copy.ctaSecondary}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
