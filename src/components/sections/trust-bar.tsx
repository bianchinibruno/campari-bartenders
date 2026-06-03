import { Clock, Leaf, MapPin, Sparkles } from "lucide-react";
import { SectionBackground } from "@/components/ui/section-background";
import { trustItems } from "@/lib/content";
import { media } from "@/lib/media";

const iconMap = {
  clock: Clock,
  sparkles: Sparkles,
  leaf: Leaf,
  map: MapPin,
};

export function TrustBar() {
  const bg = media.backgrounds.trust;

  return (
    <section className="relative isolate overflow-hidden border-y border-white/10 py-6">
      <SectionBackground image={bg.image} overlay={bg.overlay} animateImage />
      <div className="relative mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {trustItems.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={item.label} className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-campari-gold/15">
                <Icon className="h-4 w-4 text-campari-gold-light" aria-hidden />
              </div>
              <p className="text-sm leading-snug text-white/90">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
