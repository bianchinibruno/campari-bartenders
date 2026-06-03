"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type SectionOverlay = "dark" | "warm" | "light";

export type SectionBackgroundProps = {
  video?: string;
  poster?: string;
  image?: string;
  overlay?: SectionOverlay;
  animateImage?: boolean;
  className?: string;
};

const overlayClasses: Record<SectionOverlay, string> = {
  dark: "bg-campari-charcoal/88",
  warm: "bg-gradient-to-b from-campari-cream/92 via-[#f5f0e8]/90 to-campari-cream/94",
  light: "bg-white/88",
};

export function SectionBackground({
  video,
  poster,
  image,
  overlay = "dark",
  animateImage = true,
  className,
}: SectionBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || reduceMotion || !video) return;
    el.play().catch(() => {});
  }, [reduceMotion, video]);

  const showVideo = Boolean(video) && !reduceMotion;
  const staticImage = image ?? poster;

  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)} aria-hidden>
      {showVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          className="absolute inset-0 h-full w-full scale-105 object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : staticImage ? (
        animateImage && !reduceMotion ? (
          <div className="section-bg-ken-burns absolute inset-0">
            <Image src={staticImage} alt="" fill className="object-cover" sizes="100vw" />
          </div>
        ) : (
          <Image src={staticImage} alt="" fill className="object-cover" sizes="100vw" />
        )
      ) : null}

      <div className={cn("absolute inset-0", overlayClasses[overlay])} />
    </div>
  );
}
