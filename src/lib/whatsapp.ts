const WHATSAPP_NUMBER = "5551994080351";

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Oi! Quero orçamento Campari Bartenders.\n\nEvento:\nData:\nCidade:\nBar:\nLinha (Flex/Gold/Premium):";

export { WHATSAPP_NUMBER };
