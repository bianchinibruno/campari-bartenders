import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { sectionCopy, spiritTiers } from "@/lib/content";
import { media } from "@/lib/media";
import { cn } from "@/lib/utils";

export function SpiritTiers() {
  const copy = sectionCopy.tiers;

  return (
    <Section
      id="linhas"
      variant="dark"
      background={{ ...media.backgrounds.tiers }}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {spiritTiers.map((tier) => (
          <Card
            key={tier.id}
            className={cn(
              "glass-card-dark flex flex-col border-white/10 text-white transition-all duration-300 hover:border-campari-gold/30",
              tier.featured && "ring-1 ring-campari-gold/50",
            )}
          >
            <CardHeader>
              <div className="flex items-baseline justify-between gap-2">
                <CardTitle className="font-display text-2xl text-white">{tier.name}</CardTitle>
                <span className="rounded-full border border-campari-gold/40 bg-campari-gold/10 px-2.5 py-0.5 text-xs font-semibold text-campari-gold-light">
                  {tier.hours}
                </span>
              </div>
              <CardDescription className="text-base font-medium text-white/80">
                {tier.tagline}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-5">
              <ul className="space-y-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-campari-gold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto rounded-lg border border-white/10 bg-black/20 p-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-campari-gold">
                  Destilados da linha
                </p>
                <ul className="space-y-1">
                  {tier.spirits.map((spirit) => (
                    <li key={spirit} className="text-xs leading-relaxed text-white/60">
                      {spirit}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-white/65">
        {copy.footer}{" "}
        <a
          href="#orcamento"
          className="cursor-pointer font-medium text-campari-gold-light underline-offset-2 hover:underline"
        >
          {copy.footerLink}
        </a>
        .
      </p>
    </Section>
  );
}
