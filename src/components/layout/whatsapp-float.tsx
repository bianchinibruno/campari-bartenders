"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const whatsappLink = buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform hover:scale-105"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
