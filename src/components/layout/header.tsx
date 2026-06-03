"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-b border-white/10 bg-campari-charcoal/40 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          className={cn(
            "font-display text-sm font-semibold uppercase tracking-[0.15em] transition-colors",
            scrolled ? "text-campari" : "text-white",
          )}
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors duration-200",
                scrolled
                  ? "text-foreground/80 hover:text-campari"
                  : "text-white/85 hover:text-campari-gold-light",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" variant={scrolled ? "default" : "secondary"}>
            <Link href="#orcamento">Orçamento</Link>
          </Button>
        </nav>

        <button
          type="button"
          className={cn(
            "inline-flex cursor-pointer items-center justify-center rounded-lg p-2 md:hidden",
            scrolled ? "text-foreground" : "text-white",
          )}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="cursor-pointer rounded-md px-3 py-2.5 text-sm hover:bg-campari-cream"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
