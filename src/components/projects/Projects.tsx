"use client";

import { useState } from "react";
import { ArrowRight, GitPullRequest } from "lucide-react";
import { projects } from "@/config/site";
import type { ProjectEntry } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

const ORDER: Record<string, number> = {
  marlin: 0,
  "hisaab-ai": 1,
  helmx: 2,
  campuscore: 3,
  moneymate: 4,
  "8086-debugger": 5,
  openboxes: 10,
  "home-assistant": 11,
  "rust-reference": 12,
};

function byOrder(a: ProjectEntry, b: ProjectEntry) {
  return (ORDER[a.id] ?? 99) - (ORDER[b.id] ?? 99);
}

function ProjectRail({
  items,
  hint,
  onOpen,
}: {
  items: ProjectEntry[];
  hint: string;
  onOpen: (project: ProjectEntry) => void;
}) {
  return (
    <div className="relative">
      <div className="projects-scrollbar flex items-stretch snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
        {items.map((project) => (
          <div key={project.id} className="h-[420px] w-[320px] shrink-0 snap-start sm:w-[360px] lg:w-[390px]">
            <ProjectCard project={project} onOpen={() => onOpen(project)} />
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-2 text-center text-xs font-medium tracking-[0.2em] text-muted">
        <ArrowRight size={14} className="text-primary" />
        <span>{hint}</span>
      </div>
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<ProjectEntry | null>(null);
  const mainProjects = projects.filter((p) => !p.openSource).sort(byOrder);
  const openSourceProjects = projects.filter((p) => p.openSource).sort(byOrder);

  return (
    <section id="projects" className="border-b border-border py-24 sm:py-32">
      <Container>
        <SectionHeading index="06" title="Projects" description="Case studies, not just links." />

        <ProjectRail items={mainProjects} hint="Drag or scroll to browse projects" onOpen={setActive} />

        {openSourceProjects.length > 0 && (
          <div id="open-source" className="mt-16 scroll-mt-24 border-t border-border pt-12">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-primary/70">
                  <GitPullRequest size={14} />
                  OPEN SOURCE
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium tracking-tight sm:text-3xl">
                  Open Source Contributions
                </h3>
              </div>
              <p className="max-w-md text-sm text-muted">
                Pull requests and security work in public open-source projects, reviewed by their maintainers.
              </p>
            </div>

            <ProjectRail items={openSourceProjects} hint="Drag or scroll to browse contributions" onOpen={setActive} />
          </div>
        )}
      </Container>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
