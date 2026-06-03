"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { spicesExperience } from "@/lib/content";
import { media } from "@/lib/media";

export function SpicesExperience() {
  return (
    <Section
      id="especiarias"
      variant="warm"
      background={{ ...media.backgrounds.spices }}
      eyebrow={spicesExperience.subtitle}
      title={spicesExperience.title}
      description={spicesExperience.description}
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={media.sections.spices}
            alt="Estação de especiarias interativas Campari Bartenders"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-campari-charcoal/40 to-transparent" />
        </div>

        <ol className="space-y-6">
          {spicesExperience.steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-campari text-sm font-bold text-white shadow-md">
                {index + 1}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
