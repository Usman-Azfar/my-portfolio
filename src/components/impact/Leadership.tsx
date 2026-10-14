import { leadership } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImpactCard } from "./ImpactCard";

const CATEGORIES = ["Entrepreneurship", "Academics", "Sports Leadership", "Community Service"] as const;

export function Leadership() {
  return (
    <section id="impact" className="border-b border-border py-24 sm:py-32">
      <Container>
        <SectionHeading index="07" title="Leadership & Service" />

        <Reveal className="mx-auto mb-16 max-w-5xl text-center">
          <p className="text-balance font-display text-xl font-medium leading-snug tracking-tight sm:text-2xl">
            &ldquo;I believe technical ability matters most when it creates opportunities for other people.&rdquo;
          </p>
        </Reveal>

        <div className="flex flex-col gap-14">
          {CATEGORIES.map((category) => {
            const entries = leadership.filter((e) => e.category === category);
            if (entries.length === 0) return null;
            return (
              <div key={category}>
                <Reveal className="mb-5 text-center">
                  <h3 className="font-mono text-xs tracking-[0.25em] text-primary/70">{category.toUpperCase()}</h3>
                </Reveal>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {entries.map((entry, i) => (
                    <ImpactCard key={entry.id} entry={entry} delay={i * 0.06} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
