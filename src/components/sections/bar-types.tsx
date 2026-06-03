"use client";

import { Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { barTypes, sectionCopy } from "@/lib/content";
import { media } from "@/lib/media";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

function buildBarWhatsAppMessage(barName: string) {
  return `Oi! Quero orçamento do *${barName}*.\n\nData:\nCidade:\nTipo de evento:`;
}

export function BarTypes() {
  const copy = sectionCopy.bars;

  return (
    <Section
      id="bares"
      variant="dark"
      background={{ ...media.backgrounds.bars }}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {barTypes.map((bar) => {
          const image = media.bars[bar.id];
          return (
            <Card
              key={bar.id}
              className={cn(
                "group relative flex cursor-default flex-col overflow-hidden border-white/10 bg-transparent transition-all duration-300 hover:border-campari-gold/30",
                bar.featured && "ring-1 ring-campari-gold/40",
              )}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={image}
                  alt={bar.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-campari-charcoal via-campari-charcoal/40 to-transparent" />
                {bar.featured && (
                  <span className="absolute left-4 top-4 rounded bg-campari-gold px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-campari-charcoal">
                    Mais pedido
                  </span>
                )}
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-xl text-white">{bar.name}</CardTitle>
                <CardDescription className="font-medium text-campari-gold">{bar.tagline}</CardDescription>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{bar.description}</p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/50">
                  Drinks inclusos
                </p>
                <ul className="mb-4 flex-1 space-y-2">
                  {bar.drinks.map((drink) => (
                    <li key={drink} className="flex items-start gap-2 text-sm text-white/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-campari-gold" />
                      <span>{drink}</span>
                    </li>
                  ))}
                </ul>
                {bar.extras && (
                  <div className="mb-5 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    {bar.extras.map((extra) => (
                      <p key={extra} className="text-xs text-white/55">
                        + {extra}
                      </p>
                    ))}
                  </div>
                )}
                <Button
                  asChild
                  variant={bar.featured ? "default" : "outline"}
                  className={cn(
                    "w-full cursor-pointer",
                    !bar.featured &&
                      "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white",
                  )}
                >
                  <a
                    href={buildWhatsAppLink(buildBarWhatsAppMessage(bar.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Orçar {bar.name}
                  </a>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
