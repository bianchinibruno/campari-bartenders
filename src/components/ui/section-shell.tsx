import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

type SectionVariant = "light" | "warm" | "dark" | "image";

interface SectionShellProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  variant?: SectionVariant;
  backgroundImage?: string;
  centered?: boolean;
}

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  variant = "light",
  backgroundImage,
  centered = false,
  className,
  children,
  ...props
}: SectionShellProps) {
  const isDark = variant === "dark" || variant === "image";

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-16 md:py-24",
        variant === "light" && "bg-background section-texture-light",
        variant === "warm" && "bg-campari-cream/50 section-texture-warm",
        variant === "dark" && "bg-campari-charcoal text-white",
        variant === "image" && "text-white",
        className,
      )}
      {...props}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden
          />
          <div
            className={cn(
              "absolute inset-0",
              variant === "image"
                ? "bg-campari-charcoal/88"
                : "bg-campari-cream/92",
            )}
            aria-hidden
          />
        </>
      )}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <div
            className={cn(
              "mb-12 max-w-2xl",
              centered && "mx-auto text-center",
            )}
          >
            {eyebrow && (
              <p
                className={cn(
                  "mb-2 text-sm font-semibold uppercase tracking-[0.2em]",
                  isDark ? "text-campari-gold" : "text-campari",
                )}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={cn(
                  "font-display text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl",
                  isDark ? "text-white" : "text-foreground",
                )}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  "mt-4 text-lg leading-relaxed",
                  isDark ? "text-white/75" : "text-muted",
                )}
              >
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
