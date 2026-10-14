"use client";

import { useState } from "react";
import { experience, projects } from "@/config/site";
import type { TechCategoryData } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

function relatedLabel(item: TechCategoryData["items"][number]) {
  const projectNames = (item.relatedProjectIds ?? [])
    .map((id) => projects.find((p) => p.id === id)?.title)
    .filter(Boolean);
  const experienceNames = (item.relatedExperienceIds ?? [])
    .map((id) => experience.find((e) => e.id === id)?.organization)
    .filter(Boolean);
  return [...projectNames, ...experienceNames].join(" · ");
}

export function TechCategory({ category, delay }: { category: TechCategoryData; delay: number }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Reveal
      delay={delay}
      className="group relative overflow-hidden rounded-[28px] border border-border/80 bg-[radial-gradient(circle_at_top_left,_rgba(124,199,255,0.12),_transparent_34%),linear-gradient(180deg,rgba(13,21,34,0.96),rgba(10,16,24,0.92))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-[0_24px_70px_rgba(124,199,255,0.10)] sm:p-6"
    >
      <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-80" />

      <div className="relative flex items-center justify-between gap-3">
        <h3 className="font-mono text-[10px] font-semibold tracking-[0.22em] text-primary/80">
          {category.label.toUpperCase()}
        </h3>
        <span className="rounded-full border border-primary/20 bg-primary/5 px-2 py-1 font-mono text-[10px] text-primary/80">
          {category.items.length}
        </span>
      </div>

      <ul className="relative mt-5 flex flex-wrap gap-2.5">
        {category.items.map((item) => {
          const related = relatedLabel(item);
          const isHovered = hovered === item.name;

          return (
            <li key={item.name} className="relative">
              <button
                type="button"
                onMouseEnter={() => setHovered(item.name)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(item.name)}
                onBlur={() => setHovered(null)}
                className={cn(
                  "relative overflow-hidden rounded-full border px-3 py-1.75 text-xs font-medium transition-all duration-200 will-change-transform shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
                  isHovered
                    ? "border-secondary/60 bg-secondary/15 text-secondary shadow-[0_8px_24px_rgba(94,234,212,0.12)]"
                    : "border-primary/25 bg-primary/8 text-primary hover:border-secondary/50 hover:bg-secondary/10 hover:text-secondary"
                )}
              >
                <span className="relative z-10">{item.name}</span>
              </button>

              {isHovered && related && (
                <span
                  role="tooltip"
                  className="absolute left-1/2 top-full z-20 mt-2 w-max max-w-60 -translate-x-1/2 rounded-xl border border-border-strong bg-background-elevated/95 px-3 py-2 text-[11px] leading-relaxed text-muted shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                >
                  {related}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
}
