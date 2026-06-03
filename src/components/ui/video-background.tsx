"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type VideoBackgroundProps = {
  src: string;
  poster?: string;
  className?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
};

export function VideoBackground({
  src,
  poster,
  className,
  overlayClassName,
  children,
}: VideoBackgroundProps) {
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
    const video = videoRef.current;
    if (!video || reduceMotion) return;
    video.play().catch(() => {});
  }, [reduceMotion, src]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {reduceMotion ? (
        poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
        ) : null
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-campari-charcoal/75 via-campari-charcoal/60 to-campari-charcoal/90",
          overlayClassName,
        )}
        aria-hidden
      />
      {children}
    </div>
  );
}
