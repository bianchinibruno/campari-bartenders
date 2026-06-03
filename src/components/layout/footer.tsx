"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { SectionBackground } from "@/components/ui/section-background";
import { siteConfig } from "@/lib/content";
import { media } from "@/lib/media";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

export function Footer() {
  const whatsappLink = buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 text-white">
      <SectionBackground
        image={media.sections.footer}
        overlay="dark"
        animateImage
      />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-display text-lg font-semibold uppercase tracking-[0.12em] text-campari-gold-light">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-xs text-sm text-white/60">{siteConfig.serviceArea}</p>
          </div>

          <ul className="space-y-2.5 text-sm text-white/75">
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 transition-colors hover:text-campari-gold-light"
              >
                <Phone className="h-4 w-4" />
                WhatsApp: {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex cursor-pointer items-center gap-2 transition-colors hover:text-campari-gold-light"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </li>
            <li className="inline-flex items-center justify-center gap-2 md:justify-start">
              <MapPin className="h-4 w-4 shrink-0" />
              Rio Grande do Sul
            </li>
          </ul>

          <div className="flex gap-4">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-sm font-medium text-campari-gold-light transition-colors hover:text-white"
            >
              Instagram
            </a>
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-sm font-medium text-campari-gold-light transition-colors hover:text-white"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="gold-line mx-auto mt-10 md:mx-0" />
        <p className="mt-6 text-center text-xs text-white/40 md:text-left">
          © {new Date().getFullYear()} {siteConfig.name}. Open bar de coquetéis para eventos no RS.
        </p>
      </div>
    </footer>
  );
}
