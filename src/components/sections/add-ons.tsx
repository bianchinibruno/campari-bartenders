"use client";

import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { addOns, sectionCopy } from "@/lib/content";
import { media } from "@/lib/media";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function AddOns() {
  const copy = sectionCopy.addOns;

  return (
    <Section
      id="adicionais"
      variant="dark"
      background={{ ...media.backgrounds.addOns }}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
    >
      <div className="glass-card-dark mb-8 flex flex-col gap-6 rounded-2xl p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4">
          <Sparkles className="h-8 w-8 shrink-0 text-campari-gold-light" />
          <div>
            <h3 className="font-display text-xl text-white">{copy.tastingTitle}</h3>
            <p className="mt-1 text-sm text-white/70">{copy.tastingBody}</p>
          </div>
        </div>
        <Button asChild variant="secondary" className="shrink-0 cursor-pointer">
          <a
            href={buildWhatsAppLink("Oi! Quero agendar degustação Campari Bartenders.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar degustação
          </a>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {addOns.slice(1).map((addon) => (
          <Card
            key={addon.name}
            className="glass-card-dark cursor-default border-white/10 text-white transition-colors duration-200 hover:border-campari-gold/25"
          >
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-base text-white">{addon.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm leading-relaxed text-white/65">{addon.description}</p>
              <a
                href={buildWhatsAppLink(`Oi! Tenho interesse em: ${addon.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-sm font-medium text-campari-gold-light underline-offset-2 hover:underline"
              >
                {addon.cta} →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
