import { techStack } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechCategory } from "./TechCategory";

export function TechStack() {
  return (
    <section id="stack" className="border-b border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="03"
          title="Tech Stack"
          description="Hover a technology to see where it's been applied."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((category, i) => (
            <TechCategory key={category.id} category={category} delay={i * 0.06} />
          ))}
        </div>
      </Container>
    </section>
  );
}
