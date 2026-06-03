import { Clock, Package, Truck, UtensilsCrossed } from "lucide-react";
import { Section } from "@/components/ui/section";
import { sectionCopy, serviceInclusions } from "@/lib/content";
import { media } from "@/lib/media";

const highlights = [
  {
    icon: Clock,
    title: "Horas no contrato",
    description: "Flex: 4 h. Gold e Premium: 5 h. Hora extra combinamos antes de fechar.",
  },
  {
    icon: Package,
    title: "Pacote fechado",
    description: "Equipe, frutas, insumos, cardápio, gelo e deslocamento — conforme a linha.",
  },
  {
    icon: Truck,
    title: "Chegada antecipada",
    description: "Até 2 h antes da abertura do bar para montar tudo no local.",
  },
  {
    icon: UtensilsCrossed,
    title: "Estrutura do espaço",
    description: "Bancada de ~3 m no evento — ou locamos balcão Campari.",
  },
];

export function ServiceInclusions() {
  const copy = sectionCopy.inclusions;

  return (
    <Section
      id="incluso"
      variant="warm"
      background={{ ...media.backgrounds.inclusions }}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
    >
      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="glass-card cursor-default rounded-2xl p-5 transition-shadow duration-200 hover:shadow-md"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-campari/10">
              <Icon className="h-5 w-5 text-campari" />
            </div>
            <h3 className="font-display text-lg font-semibold">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-campari/15 bg-gradient-to-br from-campari-cream to-white p-6 shadow-sm">
          <h3 className="mb-4 font-display text-lg font-semibold text-campari">A Campari leva</h3>
          <ul className="space-y-2">
            {serviceInclusions.campariProvides.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-campari" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <h3 className="mb-4 font-display text-lg font-semibold">Você providencia no local</h3>
          <ul className="space-y-2">
            {serviceInclusions.clientProvides.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
        {serviceInclusions.logistics.map((note) => (
          <li key={note}>• {note}</li>
        ))}
      </ul>
    </Section>
  );
}
