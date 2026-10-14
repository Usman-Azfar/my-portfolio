"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { projects } from "@/config/site";
import type { ProjectEntry } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [active, setActive] = useState<ProjectEntry | null>(null);
  const orderedProjects = [...projects].sort((a, b) => {
    const order = { marlin: 0, helmx: 1 };
    return (order[a.id as keyof typeof order] ?? 99) - (order[b.id as keyof typeof order] ?? 99);
  });

  return (
    <section id="projects" className="border-b border-border py-24 sm:py-32">
      <Container>
        <SectionHeading index="06" title="Projects" description="Case studies, not just links." />

        <div className="relative">
          <div className="flex items-stretch snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {orderedProjects.map((project) => (
              <div
                key={project.id}
                className="h-[420px] w-[320px] shrink-0 snap-start sm:w-[360px] lg:w-[390px]"
              >
                <ProjectCard project={project} onOpen={() => setActive(project)} />
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-center text-xs font-medium tracking-[0.2em] text-muted">
            <ArrowRight size={14} className="text-primary" />
            <span>Swipe to see more</span>
          </div>
        </div>
      </Container>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
