import { MessageCircle, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { VideoBackground } from "@/components/ui/video-background";
import { founderStory, siteConfig } from "@/lib/content";
import { media } from "@/lib/media";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

export function Hero() {
  const whatsappLink = buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <section id="hero" className="relative min-h-[92vh] pt-16">
      <VideoBackground
        src={media.hero.video}
        poster={media.hero.poster}
        className="absolute inset-0 min-h-[92vh]"
        overlayClassName="from-campari-charcoal/80 via-campari-charcoal/55 to-campari-charcoal/95"
      />

      <div className="relative mx-auto flex min-h-[calc(92vh-4rem)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="gold-line mb-6" />
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-campari-gold-light">
            {siteConfig.yearsExperience} anos · Coquetelaria · Rio Grande do Sul
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="whatsapp" className="hero-glow">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Quero orçamento no WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
            >
              <Link href="#experiencia">
                <Play className="h-4 w-4 fill-current" />
                Ver como funciona
              </Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-white/55">
            Resposta em {siteConfig.responseTime} · {siteConfig.serviceArea}
          </p>
        </div>

        <div className="glass-card-dark mt-16 max-w-2xl rounded-2xl p-6 md:p-8">
          <p className="font-display text-lg text-campari-gold-light">{founderStory.headline}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/75">{founderStory.body}</p>
        </div>
      </div>
    </section>
  );
}
