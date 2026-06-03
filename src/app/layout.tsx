import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { siteConfig } from "@/lib/content";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Open bar para eventos | Rio Grande do Sul`,
  description:
    "Open bar de coquetéis para casamentos, 15 anos e corporativos no RS. Bares Caipirinhas, Tradicional, Tropical e Personalizado. Linhas Flex, Gold e Premium. Orçamento no WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bodoni.variable} ${jost.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
