import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { eventTypes, sectionCopy, whyCampari } from "@/lib/content";
import { media } from "@/lib/media";

export function WhyCampari() {
  const copy = sectionCopy.about;

  return (
    <Section
      id="sobre"
      variant="warm"
      background={{ ...media.backgrounds.about }}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl lg:aspect-[3/4]">
          <Image
            src={media.sections.about}
            alt="Casamento com open bar Campari Bartenders"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-campari-charcoal/50 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-display text-xl text-white">
            {copy.imageCaption}
          </p>
        </div>

        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyCampari.map((item) => (
              <Card key={item.title} className="glass-card cursor-default border-border/60">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-campari">
              {copy.eventsHeading}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {eventTypes.map((event) => (
                <Link
                  key={event.label}
                  href={event.href}
                  className="group cursor-pointer rounded-xl border border-border/80 bg-white/80 p-4 backdrop-blur-sm transition-all duration-200 hover:border-campari/30 hover:shadow-md"
                >
                  <p className="font-semibold group-hover:text-campari">{event.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{event.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
