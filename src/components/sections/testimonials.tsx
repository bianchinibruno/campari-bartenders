import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { sectionCopy, testimonials } from "@/lib/content";
import { media } from "@/lib/media";

export function Testimonials() {
  const copy = sectionCopy.testimonials;

  return (
    <Section
      id="depoimentos"
      variant="dark"
      background={{ ...media.backgrounds.testimonials }}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            className="glass-card-dark cursor-default border-white/10 transition-colors duration-200 hover:border-campari-gold/20"
          >
            <CardContent className="p-6">
              <Quote className="mb-3 h-6 w-6 text-campari-gold/40" aria-hidden />
              <p className="text-sm leading-relaxed text-white/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="gold-line mt-5 w-12" />
              <p className="mt-4 font-display text-base font-semibold text-white">
                {testimonial.name}
              </p>
              <p className="text-xs text-campari-gold-light">{testimonial.event}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-white/55">
        Mais avaliações no{" "}
        <a
          href="https://www.google.com/search?q=Campari+Bartenders+Porto+Alegre+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer font-medium text-campari-gold-light underline-offset-2 hover:underline"
        >
          Google
        </a>{" "}
        e no Instagram{" "}
        <a
          href="https://www.instagram.com/campari_bartenders/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer font-medium text-campari-gold-light underline-offset-2 hover:underline"
        >
          @campari_bartenders
        </a>
        .
      </p>
    </Section>
  );
}
