"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { research, publications } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { MediaGallery } from "@/components/media/MediaGallery";
import { ResearchMetrics } from "./ResearchMetrics";
import { PublicationCard } from "./PublicationCard";

const DETAILS: { key: keyof typeof research.featured; label: string }[] = [
  { key: "problem", label: "Research Problem" },
  { key: "motivation", label: "Motivation" },
  { key: "methodology", label: "Methodology" },
  { key: "architecture", label: "Architecture" },
  { key: "experiments", label: "Experiments" },
  { key: "results", label: "Results" },
  { key: "limitations", label: "Limitations" },
  { key: "futureWork", label: "Future Work" },
];

export function Research() {
  const { featured } = research;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="research" className="border-b border-border py-24 sm:py-32">
      <Container>
        <SectionHeading index="05" title="Research & Publications" description={research.statement} />

        <Reveal className="mb-14 flex w-full flex-wrap justify-center gap-2 sm:gap-3">
          {research.interests.map((interest) => (
            <Badge key={interest} className="max-w-full justify-center whitespace-normal break-words px-3 py-2 text-center leading-tight">
              {interest}
            </Badge>
          ))}
        </Reveal>

        <Reveal className="group relative overflow-hidden rounded-[30px] border border-primary/20 bg-[radial-gradient(circle_at_top_left,_rgba(124,199,255,0.15),_transparent_38%),linear-gradient(180deg,rgba(13,21,34,0.98),rgba(10,16,24,0.94))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-primary/35 hover:shadow-[0_24px_70px_rgba(124,199,255,0.12)] sm:p-10">
          <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-90" />

          <div className="relative">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <span className="font-mono text-xs tracking-[0.2em] text-primary/80">FEATURED RESEARCH</span>
            </div>
            <h3 className="mt-3 text-balance font-display text-2xl font-medium tracking-tight sm:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{featured.summary}</p>

            <Stagger className="mt-8">
              <ResearchMetrics metrics={featured.metrics} />
            </Stagger>

            <div className="mt-8 rounded-2xl border border-border/80 bg-surface/50 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-[10px] tracking-[0.2em] text-primary/70">PUBLICATION STATUS</span>
                <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[10px] text-accent">
                  {publications[0]?.status ?? "Status pending"}
                </span>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-mutedDim">TITLE</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{publications[0]?.title ?? featured.title}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-mutedDim">AUTHORS</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{publications[0]?.authors ?? "Usman Azfar, et al."}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-mutedDim">RESEARCH AREAS</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {publications[0]?.researchArea?.join(" · ") ?? "Dependable AI · Edge AI · Public Safety"}
                  </p>
                </div>
              </div>
            </div>

            {isOpen && (
              <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
                {DETAILS.map(({ key, label }) => (
                  <div key={key} className="rounded-2xl border border-border/60 bg-white/[0.02] p-4">
                    <h4 className="font-mono text-xs tracking-[0.2em] text-secondary/80">{label.toUpperCase()}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{featured[key] as string}</p>
                  </div>
                ))}
              </div>
            )}

            {isOpen && featured.images && featured.images.length > 0 && (
              <div className="mt-8 border-t border-border pt-8">
                <MediaGallery images={featured.images} />
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all duration-200 hover:border-primary/60 hover:bg-primary/15 hover:text-text"
              >
                {isOpen ? "Hide details" : "See details"}
                {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>
          </div>
        </Reveal>

        {/*
        <div className="mt-16">
          <Reveal className="mb-6 text-center">
            <h3 className="font-display text-xl font-medium tracking-tight sm:text-2xl">Publications</h3>
          </Reveal>
          <div className="flex flex-col gap-6">
            {publications.map((publication) => (
              <PublicationCard key={publication.id} publication={publication} />
            ))}
          </div>
        </div>
        */}
      </Container>
    </section>
  );
}
