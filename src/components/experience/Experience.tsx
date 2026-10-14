import { experience } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "./ExperienceCard";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border py-24 sm:py-32">
      <Container>
        <SectionHeading index="04" title="Work Experience" description="Production engineering on high-consequence systems." />

        <div className="flex flex-col gap-6">
          {experience.map((entry, i) => (
            <ExperienceCard key={entry.id} entry={entry} delay={i * 0.08} />
          ))}
        </div>

      </Container>
    </section>
  );
}
