# Campari Bartenders — Protótipo

Protótipo do site [Campari Bartenders](https://www.camparibartenders.com/). Readaptado ao conteúdo e estrutura do site atual (Wix), com melhorias de organização, visual premium e conversão.

## Preview (GitHub Pages)

**https://bianchinibruno.github.io/campari-bartenders/**

Site estático publicado na branch `gh-pages`. Para republicar após mudanças:

```bash
npm run deploy:pages
```

## Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- Componentes estilo shadcn/ui (Radix + CVA)
- TypeScript

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Estrutura do site

Single-page com seções:

| Seção | ID | Objetivo |
|---|---|---|
| Hero | `#hero` | Proposta de valor + CTAs |
| Barra de confiança | — | WhatsApp, área, tipos de evento |
| Por que Campari | `#por-que-campari` | 4 pilares + tipos de evento |
| Pacotes | `#pacotes` | Essencial / Completo / Premium |
| Especiarias | `#especiarias` | Diferencial interativo |
| Carta de drinks | `#carta-drinks` | Tabs: clássicos, autorais, sem álcool |
| Galeria | `#galeria` | 20 fotos filtráveis por evento |
| Depoimentos | `#depoimentos` | Prova social (placeholders) |
| FAQ | `#faq` | 8 perguntas de orçamento |
| Orçamento | `#orcamento` | Formulário → WhatsApp deep link |
| Validação | `#validacao` | Checklist vs 10 concorrentes |

## Conteúdo placeholder

Itens marcados para substituição antes de produção:

- **Galeria**: fotos do Unsplash (substituir por fotos reais do Instagram)
- **Depoimentos**: textos ilustrativos (substituir por avaliações reais)
- **Pacotes/preços**: valores sob consulta (sem preços fixos no protótipo)

## Checklist de conversão (10/10)

| Critério | Status |
|---|---|
| Hero com promessa + prova social | ✅ |
| Pacotes nomeados e comparáveis | ✅ |
| Tipos de evento segmentados | ✅ |
| Depoimentos com nome e contexto | ✅ |
| CTA WhatsApp + formulário | ✅ |
| Consultoria (pacote Premium) | ✅ |
| Galeria curada por evento | ✅ |
| Área de atendimento explícita | ✅ |
| Diferencial visual (especiarias) | ✅ |
| FAQ de orçamento | ✅ |

## Benchmark de concorrentes

Mint Open Bar, Fera Bartenders, Operação Open Bar, Inove Bartenders, Flavor Wedding Bar, Severo Drinks, Bahrtenders, Dms Drinks, Suprema Caipira, TNT Bartender's.

## Lighthouse (validação local)

Após `npm run build && npm start`, rode no Chrome DevTools:

1. Abra `http://localhost:3000`
2. DevTools → Lighthouse → Mobile
3. Verifique Performance, Accessibility, Best Practices, SEO

Meta do protótipo: Accessibility e SEO acima de 90; Performance depende de rede (imagens Unsplash).

## Nota legal

Campari Bartenders é apresentada como marca independente de bartenders para eventos, sem vínculo com Campari Group.
