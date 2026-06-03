"use client";

import { CheckCircle2, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Section } from "@/components/ui/section";
import { Textarea } from "@/components/ui/textarea";
import { barTypes, sectionCopy, siteConfig, spiritTiers } from "@/lib/content";
import { media } from "@/lib/media";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const eventTypeOptions = [
  "Casamento",
  "15 anos",
  "Formatura",
  "Corporativo",
  "Aniversário",
  "Outro",
];

const selectClassName =
  "flex h-11 w-full cursor-pointer rounded-xl border border-white/15 bg-white/95 px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-campari-gold";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    city: "",
    barType: "",
    spiritTier: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function buildMessage() {
    return [
      "Oi! Quero orçamento Campari Bartenders.",
      "",
      `*Nome:* ${form.name}`,
      `*E-mail:* ${form.email}`,
      `*WhatsApp:* ${form.phone}`,
      `*Tipo de evento:* ${form.eventType}`,
      `*Data:* ${form.eventDate}`,
      `*Convidados (aprox.):* ${form.guests}`,
      `*Cidade:* ${form.city}`,
      form.barType ? `*Bar de interesse:* ${form.barType}` : "",
      form.spiritTier ? `*Linha de destilados:* ${form.spiritTier}` : "",
      form.message ? `*Observações:* ${form.message}` : "",
      "",
      "Aguardo retorno. Obrigado!",
    ]
      .filter(Boolean)
      .join("\n");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    window.open(buildWhatsAppLink(buildMessage()), "_blank");
  }

  if (submitted) {
    const copy = sectionCopy.quote;

    return (
      <Section
        id="orcamento"
        variant="dark"
        background={{ ...media.backgrounds.quote }}
        eyebrow={copy.eyebrow}
        title={copy.successTitle}
      >
        <div className="glass-card-dark mx-auto max-w-lg rounded-2xl p-8 text-center">
          <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-campari-gold-light" />
          <h3 className="font-display text-xl text-white">{copy.successHeadline(form.name)}</h3>
          <p className="mt-2 text-white/70">{copy.successBody}</p>
          <Button asChild variant="whatsapp" className="mt-6 cursor-pointer">
            <a href={buildWhatsAppLink(buildMessage())} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Confirmar no WhatsApp
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 block w-full cursor-pointer text-sm text-white/55 underline hover:text-campari-gold-light"
          >
            Enviar outra solicitação
          </button>
        </div>
      </Section>
    );
  }

  return (
    <Section
      id="orcamento"
      variant="dark"
      background={{ ...media.backgrounds.quote }}
      eyebrow={sectionCopy.quote.eyebrow}
      title={sectionCopy.quote.title}
      description={sectionCopy.quote.description}
    >
      <form
        onSubmit={handleSubmit}
        className="glass-card mx-auto max-w-2xl space-y-5 rounded-2xl p-6 shadow-xl md:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo *</Label>
            <Input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Seu nome"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="seu@email.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone / WhatsApp *</Label>
            <Input
              id="phone"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="(51) 99999-9999"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="eventType">Tipo de evento *</Label>
            <select
              id="eventType"
              name="eventType"
              required
              value={form.eventType}
              onChange={handleChange}
              className={selectClassName}
            >
              <option value="">Selecione...</option>
              {eventTypeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="eventDate">Data do evento *</Label>
            <Input
              id="eventDate"
              name="eventDate"
              type="date"
              required
              value={form.eventDate}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="guests">Convidados (aprox.) *</Label>
            <Input
              id="guests"
              name="guests"
              type="number"
              min="1"
              required
              value={form.guests}
              onChange={handleChange}
              placeholder="Ex: 120"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">Cidade do evento *</Label>
            <Input
              id="city"
              name="city"
              required
              value={form.city}
              onChange={handleChange}
              placeholder="Ex: Novo Hamburgo"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="barType">Bar de interesse</Label>
            <select
              id="barType"
              name="barType"
              value={form.barType}
              onChange={handleChange}
              className={selectClassName}
            >
              <option value="">Ainda não sei — me ajudem</option>
              {barTypes.map((bar) => (
                <option key={bar.id} value={bar.name}>
                  {bar.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="spiritTier">Linha de destilados</Label>
            <select
              id="spiritTier"
              name="spiritTier"
              value={form.spiritTier}
              onChange={handleChange}
              className={selectClassName}
            >
              <option value="">Ainda não sei — me ajudem</option>
              {spiritTiers.map((tier) => (
                <option key={tier.id} value={tier.name}>
                  {tier.name} — {tier.hours}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Observações</Label>
          <Textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Ex: degustação, drink do casal, bar abre às 21h..."
          />
        </div>

        <Button type="submit" variant="whatsapp" size="lg" className="w-full cursor-pointer">
          <MessageCircle className="h-5 w-5" />
          Enviar e abrir WhatsApp
        </Button>

        <p className="text-center text-xs text-muted">
          * Campos obrigatórios. Ao enviar, você será direcionado ao WhatsApp{" "}
          {siteConfig.phone} para confirmar a mensagem.
        </p>
      </form>
    </Section>
  );
}
