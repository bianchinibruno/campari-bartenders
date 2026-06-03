export const siteConfig = {
  name: "Campari Bartenders",
  tagline: "Open bar de coquetéis para quem leva a festa a sério",
  description:
    "Casamentos, 15 anos, formaturas e corporativos. Você escolhe o bar e a linha de destilados — mandamos a proposta completa no WhatsApp.",
  email: "camparibartenders@gmail.com",
  phone: "(51) 99408-0351",
  phoneRaw: "5551994080351",
  serviceArea: "Porto Alegre, Região Metropolitana e Vale dos Sinos",
  instagram: "https://www.instagram.com/campari_bartenders/",
  facebook: "https://www.facebook.com/campari.bartenders",
  yearsExperience: "10+",
  responseTime: "até 24 horas úteis",
};

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Bares", href: "#bares" },
  { label: "Linhas", href: "#linhas" },
  { label: "Carta de drinks", href: "#carta-drinks" },
  { label: "Galeria", href: "#galeria" },
  { label: "Orçamento", href: "#orcamento" },
];

export const trustItems = [
  {
    label: "Gold e Premium: 5 horas de bar contínuo",
    icon: "clock" as const,
  },
  {
    label: "Degustação com valor revertido no contrato",
    icon: "sparkles" as const,
  },
  {
    label: "Versões sem álcool em todos os bares",
    icon: "leaf" as const,
  },
  {
    label: "Deslocamento incluso na RM e Vale dos Sinos",
    icon: "map" as const,
  },
];

export const founderStory = {
  headline: "Há mais de 10 anos fazendo bar para festa — e só isso",
  body: "A Campari nasceu da coquetelaria, não de pacote pronto. Drink na hora, fruta fresca, equipe que conhece cada carta. A gente cuida do bar; você brinda com quem importa.",
};

export const whyCampari = [
  {
    title: "Horas combinadas, sem adivinhação",
    description:
      "Flex: 4 horas de bar. Gold e Premium: 5 horas. Precisa estender? Falamos antes de fechar o contrato.",
  },
  {
    title: "Equipe e insumos no pacote",
    description:
      "Bartenders, frutas, especiarias, copos, gelo e deslocamento — tudo conforme a linha que você escolher.",
  },
  {
    title: "Drink na hora, na taça certa",
    description:
      "Clássicos, tropicais, autorais e caipirinhas. Cada um preparado na hora, do jeito que convidado de festa boa espera.",
  },
  {
    title: "Especiarias na mesa",
    description:
      "Pimenta-rosa, canela e anis-estrelado à disposição. Quem quiser monta o drink do jeito dele — e volta na fila.",
  },
];

export const eventTypes = [
  {
    label: "Casamentos",
    description: "Carta autoral, drink do casal e serviço que acompanha o timing da festa",
    href: "#galeria",
  },
  {
    label: "15 anos",
    description: "Drinks coloridos, bar animado e opções sem álcool para toda a família",
    href: "#galeria",
  },
  {
    label: "Formaturas",
    description: "Open bar para brindar a conquista com coquetéis de verdade",
    href: "#galeria",
  },
  {
    label: "Corporativos",
    description: "Serviço pontual, apresentação cuidada e fluxo que não trava o evento",
    href: "#galeria",
  },
  {
    label: "Aniversários",
    description: "Bar completo para festa que vai até tarde",
    href: "#galeria",
  },
];

export type SpiritTierId = "flex" | "gold" | "premium";

export const spiritTiers: {
  id: SpiritTierId;
  name: string;
  tagline: string;
  hours: string;
  features: string[];
  spirits: string[];
  featured?: boolean;
}[] = [
  {
    id: "flex",
    name: "Flex",
    tagline: "4 horas, copos descartáveis, destilados selecionados",
    hours: "4 horas de bar",
    features: [
      "4 horas de bar contínuo",
      "Copos descartáveis",
      "Gelo incluso",
      "Deslocamento na RM e Vale dos Sinos",
      "Opções sem álcool disponíveis",
    ],
    spirits: ["Destilados Flex — marcas selecionadas para eventos"],
  },
  {
    id: "gold",
    name: "Gold",
    tagline: "5 horas, copos de vidro — a linha mais contratada",
    hours: "5 horas de bar",
    featured: true,
    features: [
      "5 horas de bar contínuo",
      "Copos e taças de vidro",
      "Gelo incluso",
      "Deslocamento na RM e Vale dos Sinos",
      "Opções sem álcool disponíveis",
    ],
    spirits: [
      "Vodka Smirnoff / Vorús",
      "Cachaça Ypioca / Piracicaba",
      "Gin Seagers / Rocks",
      "Rum Montilla",
      "Aperol e espumante Salton Series Brut (bares aplicáveis)",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "5 horas com destilados top shelf",
    hours: "5 horas de bar",
    features: [
      "5 horas de bar contínuo",
      "Copos e taças de vidro",
      "Gelo incluso",
      "Deslocamento na RM e Vale dos Sinos",
      "Opções sem álcool disponíveis",
    ],
    spirits: [
      "Vodka Absolut",
      "Cachaça Weber Haus",
      "Gin Tanqueray",
      "Rum Bacardi",
      "Johnnie Walker Blonde e Tequila Jose Cuervo (bares aplicáveis)",
      "Salton Ouro Brut (bares aplicáveis)",
    ],
  },
];

export type BarTypeId = "caipirinhas" | "tradicional" | "tropical" | "personalizado";

export const barTypes: {
  id: BarTypeId;
  name: string;
  tagline: string;
  description: string;
  drinks: string[];
  extras?: string[];
  featured?: boolean;
}[] = [
  {
    id: "caipirinhas",
    name: "Bar de Caipirinhas",
    tagline: "Fruta fresca, vodka ou cachaça",
    description:
      "Caipirinhas clássicas e autorais — morango, maracujá, abacaxi e receitas da casa. A escolha certa quando a festa pede o sabor brasileiro.",
    drinks: [
      "Tropical Love — morango e maracujá",
      "Limão, Morango, Maracujá e Abacaxi",
      "Tropicália — abacaxi e canela",
      "Blossom — morango e cereja",
      "Abacaxi Breeze — abacaxi e hortelã",
      "Melancia",
    ],
    extras: ["Opções sem álcool em todos os sabores"],
  },
  {
    id: "tradicional",
    name: "Bar Tradicional",
    tagline: "Clássicos bem feitos",
    description:
      "Moscow Mule, Gin Tônica, Mojito e caipirinhas no cardápio. Para quem quer reconhecer o drink na taça — e gostar do primeiro gole.",
    drinks: [
      "Moscow Mule",
      "Gin Tônica",
      "Mojito",
      "London Mule",
      "Tropical Love e Tropicália",
      "Caipirinhas — Limão, Morango, Maracujá e Abacaxi",
      "Blossom",
    ],
    extras: [
      "Especiarias: pimenta-rosa, canela e anis-estrelado",
      "Opções sem álcool disponíveis",
    ],
    featured: true,
  },
  {
    id: "tropical",
    name: "Bar Tropical",
    tagline: "Clima de verão o evento inteiro",
    description:
      "Sex on the Beach, Aperol Spritz, Piña Colada e frutas tropicais. Festa quente, drink gelado, fila que anda.",
    drinks: [
      "Sex on the Beach",
      "Aperol Spritz",
      "Tropical Gin",
      "Mimosa",
      "Piña Colada",
      "Mojito",
      "Abacaxi Breeze",
      "Moscow Mule",
      "Caipirinhas — Limão, Morango, Maracujá e Abacaxi",
    ],
    extras: [
      "Especiarias: pimenta-rosa, canela e anis-estrelado",
      "Opções sem álcool disponíveis",
    ],
  },
  {
    id: "personalizado",
    name: "Bar Personalizado",
    tagline: "Sua carta, suas frutas, seus drinks",
    description:
      "Escolha frutas da estação e monte uma seleção de 9 drinks especiais. Para casamento, formatura ou evento com identidade própria.",
    drinks: [
      "4 frutas da estação à escolha",
      "9 drinks especiais da carta Campari",
      "Carta ampliada com clássicos e autorais",
    ],
    extras: [
      "Frutas conforme estação: morango, maracujá, limão, abacaxi, melancia, kiwi, uva, bergamota, mirtilo",
      "Whiskey e tequila conforme linha Gold ou Premium",
    ],
  },
];

export const serviceInclusions = {
  campariProvides: [
    "Bartenders e auxiliares",
    "Utensílios de bar",
    "Frutas e hortaliças frescas",
    "Águas, energéticos ou sodas para drinks",
    "Baldes para gelo",
    "Vidros decorativos com frutas",
    "Placa com cardápio",
    "Canudos e espuma cítrica",
  ],
  clientProvides: [
    "Estrutura do bar — bancada de ~3 m ou 2 m com prateleira inferior (ou locação com a Campari)",
    "Alimentação da equipe no buffet do evento",
    "Freezer para armazenamento do gelo no local",
    "Gelo fora da área de cobertura inclusa (consulte cidades atendidas)",
  ],
  logistics: [
    "Equipe chega até 2 horas antes da abertura do bar",
    "Gelo incluso em POA, Canoas, Estância Velha, Esteio, Sapucaia, São Leopoldo, NH, Cachoeirinha, Portão e Gravataí",
    "Hora extra disponível — fale com nosso atendimento",
  ],
};

export const addOns = [
  {
    name: "Degustação presencial",
    description:
      "Prove os drinks antes de fechar. O valor da degustação volta integralmente no contrato.",
    cta: "Agendar degustação",
  },
  {
    name: "Drink personalizado do evento",
    description:
      "Drink com nome do noivo, da noiva, da formanda ou do aniversariante — receita e identidade só de vocês.",
    cta: "Criar drink do evento",
  },
  {
    name: "Tags para drinks",
    description: "Nome, frase ou tema nas taças. Detalhe que aparece nas fotos.",
    cta: "Consultar tags",
  },
  {
    name: "Doses de whiskey",
    description: "Três rótulos selecionados servidos no evento.",
    cta: "Ver opções de whiskey",
  },
  {
    name: "Locação de balcão bar",
    description: "Bancadas Campari para quando o espaço não tem estrutura. Consulte disponibilidade.",
    cta: "Consultar balcão",
  },
  {
    name: "Hora extra de bar",
    description: "Festa passou do horário? Estendemos o serviço conforme disponibilidade.",
    cta: "Falar sobre horário",
  },
];

export const spicesExperience = {
  title: "Especiarias na mesa — o convidado monta, a gente finaliza",
  subtitle: "Diferencial Campari",
  description:
    "Pimenta-rosa, canela e anis-estrelado em estação aberta. O convidado escolhe; o bartender fecha na técnica. É o que faz a fila do bar andar.",
  steps: [
    {
      title: "Escolhe a base",
      description: "Caipirinha, gin tônica, mojito, mule ou autoral da carta.",
    },
    {
      title: "Monta o sabor",
      description: "Frutas frescas, especiarias e ervas na hora.",
    },
    {
      title: "Leva na taça",
      description: "Finalizado pelo bartender — pronto para brindar.",
    },
  ],
};

export const drinkMenu = {
  classicos: [
    { name: "Mojito", description: "Limão, hortelã, rum e água gaseificada" },
    { name: "Moscow Mule", description: "Limão, vodka, gengibre, água gaseificada e espuma cítrica" },
    { name: "Gin Tônica", description: "Limão, gin e água tônica" },
    { name: "Aperol Spritz", description: "Aperol, espumante brut e água com gás" },
    { name: "Piña Colada", description: "Suco de abacaxi, rum, leite de coco e leite condensado" },
    { name: "Cosmopolitan", description: "Vodka, licor de laranja, cranberry e limão" },
    { name: "Negroni", description: "Gin, vermouth e Campari" },
    { name: "Margarita", description: "Tequila, licor de laranja, limão e sal na borda" },
    { name: "Sex on the Beach", description: "Vodka, licor de pêssego, suco de laranja e groselha" },
    { name: "Mimosa", description: "Suco de laranja e espumante brut" },
    { name: "Espresso Martini", description: "Vodka, licor de café e café passado" },
    { name: "Caipirinhas", description: "Limão, morango, maracujá, abacaxi e sabores autorais" },
  ],
  autorais: [
    { name: "Bergajito", description: "Bergamota, hortelã, rum e água gaseificada" },
    { name: "Pink Mojito", description: "Morango, limão, hortelã, rum e água gaseificada" },
    { name: "Strawberry Mule", description: "Morango, vodka, gengibre e espuma cítrica" },
    { name: "Tropicália", description: "Abacaxi, canela, açúcar, vodka ou cachaça" },
    { name: "Blossom", description: "Morango, cereja, açúcar, vodka ou cachaça" },
    { name: "Barbie Malibu", description: "Abacaxi, coco, rum, siciliano, framboesa e borda rosa" },
    { name: "Gauchinha", description: "Bergamota, laranja, açúcar, vodka ou cachaça" },
    { name: "Passion Cream", description: "Maracujá, rum, limão siciliano e leite condensado" },
    { name: "Sunset 43", description: "Licor 43, vodka, abacaxi e suco de laranja" },
    { name: "Drink na Banheira", description: "Formato especial — consulte seleção e disponibilidade" },
  ],
  semAlcool: [
    { name: "Virgin Mojito", description: "Hortelã, limão, açúcar e água com gás" },
    { name: "Soda Italiana", description: "Xarope e água com gás — maçã verde, morango, bergamota, toranja" },
    { name: "Pink Lemonade", description: "Xarope de morango e toranja, limão e água com gás" },
    { name: "Tropical Love Zero", description: "Morango, maracujá, açúcar — versão sem álcool" },
    { name: "Tônica Botanical", description: "Água tônica com ervas e frutas frescas" },
    { name: "Todas as bases dos bares", description: "Opção sem álcool disponível nos sabores do pacote" },
  ],
};

export type GalleryCategory = "todos" | "casamentos" | "15-anos" | "corporativos" | "aniversarios";

export const galleryItems = [
  { id: 1, category: "casamentos" as const, alt: "Bar montado em casamento", src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80" },
  { id: 2, category: "casamentos" as const, alt: "Drinks servidos em casamento", src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80" },
  { id: 3, category: "casamentos" as const, alt: "Coquetéis para noivos", src: "https://images.unsplash.com/photo-1567222371219-0db904b70369?w=800&q=80" },
  { id: 4, category: "15-anos" as const, alt: "Bar colorido em festa de 15 anos", src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80" },
  { id: 5, category: "15-anos" as const, alt: "Drinks vibrantes para debutante", src: "https://images.unsplash.com/photo-1551024709-8f23f66e45e0?w=800&q=80" },
  { id: 6, category: "15-anos" as const, alt: "Bartender animando a festa", src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80" },
  { id: 7, category: "corporativos" as const, alt: "Open bar em evento corporativo", src: "https://images.unsplash.com/photo-1519671482749-fd09fe7dcc57?w=800&q=80" },
  { id: 8, category: "corporativos" as const, alt: "Coquetel corporativo elegante", src: "https://images.unsplash.com/photo-1541532713591-79a037e7250c?w=800&q=80" },
  { id: 9, category: "corporativos" as const, alt: "Drinks autorais em networking", src: "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800&q=80" },
  { id: 10, category: "aniversarios" as const, alt: "Bar em festa de aniversário", src: "https://images.unsplash.com/photo-1537633552985-df842636e6ee?w=800&q=80" },
  { id: 11, category: "aniversarios" as const, alt: "Especiarias interativas", src: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&q=80" },
  { id: 12, category: "aniversarios" as const, alt: "Convidados personalizando drinks", src: "https://images.unsplash.com/photo-1556679343-719586c83d20?w=800&q=80" },
  { id: 13, category: "casamentos" as const, alt: "Taças em brinde de casamento", src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80" },
  { id: 14, category: "15-anos" as const, alt: "Drink autoral com frutas", src: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80" },
  { id: 15, category: "corporativos" as const, alt: "Equipe Campari em ação", src: "https://images.unsplash.com/photo-1575037614876-38ff34aa8323?w=800&q=80" },
  { id: 16, category: "aniversarios" as const, alt: "Bar iluminado à noite", src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80" },
  { id: 17, category: "casamentos" as const, alt: "Detalhe de coquetel artesanal", src: "https://images.unsplash.com/photo-1527281170677-1fff22b6b835?w=800&q=80" },
  { id: 18, category: "15-anos" as const, alt: "Estação de especiarias", src: "https://images.unsplash.com/photo-1567696911988-3d4277a06781?w=800&q=80" },
  { id: 19, category: "corporativos" as const, alt: "Serviço de bar em evento", src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" },
  { id: 20, category: "aniversarios" as const, alt: "Convidados no bar", src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80" },
];

export const galleryFilters: { value: GalleryCategory; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "casamentos", label: "Casamentos" },
  { value: "15-anos", label: "15 anos" },
  { value: "corporativos", label: "Corporativos" },
  { value: "aniversarios", label: "Aniversários" },
];

export const testimonials = [
  {
    name: "Clau Brixner",
    event: "Casamento · fev/2026",
    quote:
      "Drinks maravilhosos — só elogios dos convidados. Tudo impecável. Bartenders muito simpáticos e atenciosos. Melhor escolha para eternizar um momento tão importante.",
  },
  {
    name: "Isadora de Mello Bühler",
    event: "Evento social",
    quote:
      "Indico de olhos fechados. Sucesso absoluto. Atendimento impecável do início ao fim. Daqui pra frente, todo evento com drinks será com vocês.",
  },
  {
    name: "Vinícius Schneider",
    event: "Casamento",
    quote:
      "Desde a contratação, sempre muito atenciosos. Na degustação o Alisson foi impecável. Cuidaram dos drinks do casamento do começo ao fim.",
  },
  {
    name: "Michele Moura",
    event: "Festa",
    quote:
      "Bebidas excelentes, super elogiadas. Atendimento ágil, simpático e clima ainda mais animado. Recomendo de olhos fechados!",
  },
  {
    name: "Adrielly Alves",
    event: "Evento recorrente",
    quote: "Experiência maravilhosa — equipe simpática, divertida e prestativa. Amamos, que venham as próximas!",
  },
  {
    name: "Fly on the Wind",
    event: "Porto Alegre",
    quote:
      "Pontualidade, profissionalismo e atenção aos detalhes. Coquetéis deliciosos, bem apresentados e adaptados ao gosto dos convidados. 100% recomendados.",
  },
];

export const faqItems = [
  {
    question: "Como escolho o bar e a linha (Flex, Gold ou Premium)?",
    answer:
      "Comece pelo estilo: Caipirinhas, Tradicional, Tropical ou Personalizado. Depois, defina a linha — Flex (4 h, copos descartáveis), Gold (5 h, copos de vidro) ou Premium (5 h, destilados top shelf). Mande bar + linha no WhatsApp e montamos a proposta.",
  },
  {
    question: "Quantas horas de bar estão inclusas?",
    answer:
      "Flex: 4 horas contínuas. Gold e Premium: 5 horas contínuas. Hora extra dá para contratar — combinamos antes de fechar.",
  },
  {
    question: "Tem opção sem álcool?",
    answer:
      "Sim, em todos os bares. Avise na solicitação se quiser destacar no cardápio — útil para festas com crianças ou convidados que não bebem.",
  },
  {
    question: "O que a Campari leva e o que eu preciso ter no local?",
    answer:
      "Levamos equipe, utensílios, frutas, insumos, gelo (nas cidades de cobertura), deslocamento na RM e Vale dos Sinos, cardápio e estrutura de serviço. No local: bancada de bar (~3 m ou 2 m com prateleira), alimentação da equipe no buffet e freezer para o gelo.",
  },
  {
    question: "Como funciona a degustação?",
    answer:
      "Marcamos uma visita para você provar drinks e ver a apresentação. O valor pago na degustação volta integralmente quando fechar o contrato.",
  },
  {
    question: "Dá para criar drink ou tag personalizada?",
    answer:
      "Sim — drink com nome do casal, formanda ou aniversariante, e tags nas taças. Veja a seção de extras ou fale direto no WhatsApp.",
  },
  {
    question: "Atendem minha cidade?",
    answer:
      "Porto Alegre, Região Metropolitana e Vale dos Sinos, com deslocamento incluso. Gelo incluso em POA, Canoas, Estância Velha, Esteio, Sapucaia, São Leopoldo, Novo Hamburgo, Cachoeirinha, Portão e Gravataí. Outras regiões: consulte.",
  },
  {
    question: "Como peço orçamento?",
    answer:
      "Formulário abaixo ou WhatsApp (51) 99408-0351. Informe data, tipo de evento, cidade, bar e linha. Respondemos em até 24 horas úteis.",
  },
];

/** @deprecated Use barTypes + spiritTiers — kept for type compatibility during migration */
export const packages = barTypes.map((bar) => ({
  id: bar.id,
  name: bar.name,
  tagline: bar.tagline,
  description: bar.description,
  highlights: bar.drinks,
  featured: bar.featured ?? false,
}));

export const sectionCopy = {
  experience: {
    eyebrow: "Como funciona",
    title: "O bar vira fila — no bom sentido",
    description:
      "Drink montado na hora, fruta cortada na hora, especiarias na mesa. Casamento, 15 anos ou corporativo: o convidado volta porque gostou do primeiro.",
    videoCaption: "Bar montado antes dos convidados chegarem",
    videoSubcaption: "Equipe, insumos e estrutura — você só abre a festa.",
    cta: "Quero orçamento para meu evento",
    ctaSecondary: "Ver fotos de eventos",
  },
  about: {
    eyebrow: "A Campari",
    title: "Bar completo, sem surpresa na hora H",
    description:
      "Horas definidas, equipe própria, insumos no pacote. Escolha o formato — mandamos a proposta detalhada no WhatsApp.",
    imageCaption: "Casamentos e festas no RS desde 2014",
    eventsHeading: "Eventos que atendemos",
  },
  bars: {
    eyebrow: "Formatos de bar",
    title: "Quatro bares, cartas diferentes",
    description:
      "Do clássico ao tropical — ou monte a sua carta. Combine com Flex, Gold ou Premium e receba o orçamento.",
  },
  tiers: {
    eyebrow: "Linhas de destilados",
    title: "Flex, Gold ou Premium",
    description:
      "Define horas, copos e destilados. O valor depende do bar e do evento — mande a combinação no WhatsApp.",
    footer: "Qualquer bar combina com qualquer linha.",
    footerLink: "Pedir orçamento",
  },
  drinkMenu: {
    eyebrow: "Carta de drinks",
    title: "Clássicos, autorais e sem álcool",
    description:
      "Parte da carta Campari. No Bar Personalizado, você escolhe 9 drinks + frutas da estação.",
    imageCaption: "Cada drink, na hora",
  },
  inclusions: {
    eyebrow: "O pacote",
    title: "O que entra — e o que fica por sua conta",
    description: "Leia antes de fechar. Sem letra miúda escondida.",
  },
  addOns: {
    eyebrow: "Extras",
    title: "Para ir além do pacote",
    description: "Degustação, drink com nome do casal, tags nas taças e mais.",
    tastingTitle: "Prove antes de fechar",
    tastingBody: "Degustação presencial. O valor volta integralmente no contrato.",
  },
  gallery: {
    eyebrow: "Galeria",
    title: "Fotos de eventos reais",
    description: "Casamentos, 15 anos, corporativos — o bar no dia, não em render.",
    instagramHandle: "@campari_bartenders",
    instagramBody: "Bastidores, drinks e eventos no Instagram.",
  },
  testimonials: {
    eyebrow: "Depoimentos",
    title: "Quem contratou, recomenda",
    description: "Palavra de quem já fechou — sem roteiro nosso.",
  },
  faq: {
    eyebrow: "Dúvidas",
    title: "Perguntas antes de fechar",
    description: "Orçamento, horários, o que levar no local e degustação.",
  },
  quote: {
    eyebrow: "Orçamento",
    title: "Mande os detalhes — a proposta volta no WhatsApp",
    description: "Data, cidade, bar e linha. Quanto mais você contar, mais rápido fechamos a proposta.",
    successTitle: "Quase lá",
    successHeadline: (name: string) => `Obrigado, ${name}`,
    successBody:
      "Abrimos o WhatsApp com sua mensagem pronta. Toque em Enviar — respondemos em até 24 horas úteis.",
  },
} as const;
