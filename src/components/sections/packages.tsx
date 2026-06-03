import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { packages } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Packages() {
  return (
    <Section
      id="pacotes"
      eyebrow="Pacotes"
      title="Pacotes"
      description="Consulte disponibilidade e valores conforme seu evento."
    >
      <div className="grid gap-8 lg:grid-cols-3">
        {packages.map((pkg) => (
          <Card
            key={pkg.id}
            className={cn(
              "relative flex flex-col transition-shadow hover:shadow-lg",
              pkg.featured && "border-campari ring-2 ring-campari/20",
            )}
          >
            {pkg.featured && (
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded bg-campari px-3 py-0.5 text-xs font-medium text-white">
                Destaque
              </span>
            )}
            <CardHeader>
              <CardTitle>{pkg.name}</CardTitle>
              <CardDescription className="font-medium text-campari">{pkg.tagline}</CardDescription>
              <p className="mt-2 text-sm leading-relaxed text-muted">{pkg.description}</p>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <ul className="mb-6 flex-1 space-y-3">
                {pkg.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-campari" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant={pkg.featured ? "default" : "outline"} className="w-full">
                <Link href="#orcamento">Solicitar orçamento — {pkg.name}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
