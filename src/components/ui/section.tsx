import * as React from "react";
import { SectionBackground, type SectionBackgroundProps, type SectionOverlay } from "@/components/ui/section-background";
import { cn } from "@/lib/utils";

type SectionVariant = "light" | "warm" | "dark" | "image";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  dark?: boolean;
  variant?: SectionVariant;
  /** @deprecated Use `background.image` */
  backgroundImage?: string;
  background?: SectionBackgroundProps;
  centered?: boolean;
}

function resolveOverlay(
  background?: SectionBackgroundProps,
  variant?: SectionVariant,
): SectionOverlay | null {
  if (background?.overlay) return background.overlay;
  if (background?.video || background?.image) {
    if (variant === "warm" || variant === "light") return "warm";
    return "dark";
  }
  return null;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  dark = false,
  variant,
  backgroundImage,
  background,
  centered = false,
  className,
  children,
  ...props
}: SectionProps) {
  const resolvedVariant = variant ?? (dark ? "dark" : "light");
  const mergedBackground: SectionBackgroundProps | undefined =
    background ??
    (backgroundImage
      ? { image: backgroundImage, overlay: resolvedVariant === "image" ? "dark" : "warm" }
      : undefined);

  const overlay = resolveOverlay(mergedBackground, resolvedVariant);
  const hasBackground = Boolean(mergedBackground?.video || mergedBackground?.image);
  const isDark =
    hasBackground && overlay === "dark"
      ? true
      : resolvedVariant === "dark" || resolvedVariant === "image";

  const isWarmOverlay = hasBackground && overlay === "warm";

  return (
    <section
      id={id}
      className={cn(
        "relative isolate overflow-hidden py-16 md:py-24",
        !hasBackground && resolvedVariant === "light" && "bg-background section-texture-light",
        !hasBackground && resolvedVariant === "warm" && "section-texture-warm bg-campari-cream/50",
        !hasBackground && resolvedVariant === "dark" && "bg-campari-charcoal text-white",
        !hasBackground && resolvedVariant === "image" && "text-white",
        hasBackground && overlay === "dark" && "text-white",
        className,
      )}
      {...props}
    >
      {hasBackground && mergedBackground && <SectionBackground {...mergedBackground} />}

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <div className={cn("mb-12 max-w-2xl", centered && "mx-auto text-center")}>
            {eyebrow && (
              <p
                className={cn(
                  "mb-2 text-sm font-semibold uppercase tracking-[0.2em]",
                  isDark ? "text-campari-gold" : isWarmOverlay ? "text-campari" : "text-campari",
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
