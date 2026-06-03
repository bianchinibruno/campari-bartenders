import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { drinkMenu, sectionCopy } from "@/lib/content";
import { media } from "@/lib/media";

export function DrinkMenu() {
  const copy = sectionCopy.drinkMenu;

  return (
    <Section
      id="carta-drinks"
      variant="warm"
      background={{ ...media.backgrounds.drinkMenu }}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
    >
      <div className="mb-10 grid gap-6 lg:grid-cols-12 lg:items-stretch">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg lg:col-span-4 lg:aspect-auto lg:min-h-[280px]">
          <Image
            src={media.bars.tradicional}
            alt="Drink autoral Campari Bartenders"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-campari-charcoal/60 to-transparent" />
          <p className="absolute bottom-4 left-4 font-display text-lg text-white">
            {copy.imageCaption}
          </p>
        </div>
        <div className="lg:col-span-8">
          <Tabs defaultValue="classicos" className="h-full">
            <TabsList className="mb-6 w-full justify-start bg-white/80">
              <TabsTrigger value="classicos" className="cursor-pointer">
                Clássicos
              </TabsTrigger>
              <TabsTrigger value="autorais" className="cursor-pointer">
                Autorais
              </TabsTrigger>
              <TabsTrigger value="sem-alcool" className="cursor-pointer">
                Sem álcool
              </TabsTrigger>
            </TabsList>

            <TabsContent value="classicos">
              <DrinkGrid drinks={drinkMenu.classicos} />
            </TabsContent>
            <TabsContent value="autorais">
              <DrinkGrid drinks={drinkMenu.autorais} />
            </TabsContent>
            <TabsContent value="sem-alcool">
              <DrinkGrid drinks={drinkMenu.semAlcool} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Section>
  );
}

function DrinkGrid({ drinks }: { drinks: { name: string; description: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {drinks.map((drink) => (
        <Card
          key={drink.name}
          className="glass-card cursor-default transition-shadow duration-200 hover:shadow-md"
        >
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-base">{drink.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted">{drink.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
