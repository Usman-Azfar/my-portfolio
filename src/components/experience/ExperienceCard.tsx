"use client";

import { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { useJournalEntries } from "@/lib/journal";
import type { ExperienceEntry } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { JournalTimeline } from "./JournalTimeline";

function shouldShowJournalButton(entry: ExperienceEntry) {
  const roleText = entry.role.toLowerCase();
  return entry.id !== "tekvill" && (entry.id === "infotech" || roleText.includes("ai") || roleText.includes("ml"));
}

export function ExperienceCard({ entry, delay }: { entry: ExperienceEntry; delay: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showJournal, setShowJournal] = useState(false);
  const journalEntries = useJournalEntries(entry.id);
  const showJournalButton = entry.id !== "tekvill" && (shouldShowJournalButton(entry) || journalEntries.length > 0);

  return (
    <Reveal delay={delay}>
      <article
        className={cn(
          "relative overflow-hidden rounded-[28px] border p-6 shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 sm:p-8",
          entry.primary
            ? "border-primary/25 bg-[radial-gradient(circle_at_top_left,_rgba(124,199,255,0.12),_transparent_34%),linear-gradient(180deg,rgba(13,21,34,0.96),rgba(10,16,24,0.92))]"
            : "border-border/80 bg-[linear-gradient(180deg,rgba(13,21,34,0.96),rgba(10,16,24,0.92))]"
        )}
      >
        <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-80" />

        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div
              className={cn(
                "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border",
                entry.primary ? "border-green-400/40 bg-green-500/10 text-green-300" : "border-border-strong bg-surface/40 text-muted"
              )}
            >
              <Briefcase size={16} />
            </div>
            <div>
              <h3 className="font-display text-lg font-medium tracking-tight sm:text-xl">{entry.role}</h3>
              <p className="text-sm text-muted">{entry.organization}</p>
            </div>
          </div>
          <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] text-primary/80">
            {entry.period}
          </span>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">{entry.overview}</p>

        {showJournal && (
          <div className="mt-6 border-t border-border pt-6">
            <div className="mb-4 flex items-baseline justify-between gap-3">
              <h4 className="font-display text-xl font-medium tracking-tight">Engineering Journal</h4>
              <span className="text-xs text-muted-dim">A daily, reflective record of problems and fixes</span>
            </div>
            <JournalTimeline entries={journalEntries} />
          </div>
        )}

        {isOpen && (
          <div className="mt-6 border-t border-border pt-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <h4 className="font-mono text-xs tracking-[0.2em] text-primary/70">RESPONSIBILITIES</h4>
                <ul className="mt-2 space-y-1.5">
                  {entry.responsibilities.map((r) => (
                    <li key={r} className="text-sm leading-relaxed text-muted">
                      <span className="text-secondary">— </span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs tracking-[0.2em] text-primary/70">IMPACT</h4>
                <ul className="mt-2 space-y-1.5">
                  {entry.impact.map((r) => (
                    <li key={r} className="text-sm leading-relaxed text-muted">
                      <span className="text-secondary">— </span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {entry.systems && entry.systems.length > 0 && (
              <div className="mt-5">
                <h4 className="font-mono text-xs tracking-[0.2em] text-primary/70">SYSTEMS</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {entry.systems.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
              {entry.technologies.map((t) => (
                <span key={t} className="rounded-full border border-border/80 bg-white/[0.03] px-3 py-1 text-xs text-muted">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 flex items-center justify-between gap-3">
          {showJournalButton ? (
            <button
              type="button"
              onClick={() => setShowJournal((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1.5 text-xs font-medium text-secondary transition-colors hover:border-secondary/60 hover:bg-secondary/15"
            >
              {showJournal ? "Hide Journal" : "View Engineering Journal"}
            </button>
          ) : (
            <span />
          )}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:border-primary/60 hover:bg-primary/15"
          >
            {isOpen ? "Hide details" : "See details"}
            {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>
      </article>
    </Reveal>
  );
}
