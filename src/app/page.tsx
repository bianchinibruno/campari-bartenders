import { AddOns } from "@/components/sections/add-ons";
import { BarTypes } from "@/components/sections/bar-types";
import { DrinkMenu } from "@/components/sections/drink-menu";
import { ExperienceShowcase } from "@/components/sections/experience-showcase";
import { FAQ } from "@/components/sections/faq";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { QuoteForm } from "@/components/sections/quote-form";
import { ServiceInclusions } from "@/components/sections/service-inclusions";
import { SpicesExperience } from "@/components/sections/spices-experience";
import { SpiritTiers } from "@/components/sections/spirit-tiers";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustBar } from "@/components/sections/trust-bar";
import { WhyCampari } from "@/components/sections/why-campari";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ExperienceShowcase />
      <WhyCampari />
      <BarTypes />
      <SpiritTiers />
      <SpicesExperience />
      <ServiceInclusions />
      <DrinkMenu />
      <AddOns />
      <Gallery />
      <Testimonials />
      <FAQ />
      <QuoteForm />
    </>
  );
}
