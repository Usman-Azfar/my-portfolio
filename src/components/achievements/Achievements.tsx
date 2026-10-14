"use client";

import { useState } from "react";
import { Award, Trophy, GraduationCap, Medal, X, ExternalLink } from "lucide-react";
import { achievements } from "@/config/site";
import type { AchievementItem } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const GROUPS: { key: keyof typeof achievements; label: string; icon: typeof Award }[] = [
  { key: "academic", label: "Academic", icon: GraduationCap },
  { key: "competitive", label: "Competitive & Technical", icon: Trophy },
  { key: "scholarships", label: "Scholarships & Merit", icon: Award },
  { key: "sports", label: "Sports & Extracurricular", icon: Medal },
];

function ItemRow({ item, index }: { item: AchievementItem; index: number }) {
  return (
    <div className="flex items-start gap-3 border-b border-border/80 py-3 last:border-b-0">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/5 font-mono text-[10px] font-semibold text-primary">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-text sm:text-base">{item.label}</p>
        {item.detail && <p className="mt-1 text-xs leading-relaxed text-muted">{item.detail}</p>}
      </div>
    </div>
  );
}

export function Achievements() {
  const [openKey, setOpenKey] = useState<keyof typeof achievements | null>(null);

  return (
    <section id="achievements" className="border-b border-border py-24 sm:py-32">
      <Container>
        <SectionHeading index="09" title="Achievements" description="Recognition earned across academics, competition, and community." />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {GROUPS.map(({ key, label, icon: Icon }, index) => (
            <Reveal key={key} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-border/80 bg-[radial-gradient(circle_at_top_left,_rgba(124,199,255,0.12),_transparent_42%),linear-gradient(180deg,rgba(13,21,34,0.96),rgba(10,16,24,0.92))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_22px_60px_rgba(124,199,255,0.12)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-70" />
                <div className="relative flex h-full flex-col">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/30 bg-primary/8 font-mono text-[10px] font-semibold text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <button
                      type="button"
                      onClick={() => setOpenKey(key)}
                      className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-primary transition hover:border-primary/60 hover:bg-primary/15"
                    >
                      View
                    </button>
                  </div>

                  <div className="mb-4 flex items-center gap-2.5 text-primary/80">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
                      <Icon size={15} />
                    </span>
                    <h3 className="font-mono text-[10px] tracking-[0.22em] text-primary/90">{label.toUpperCase()}</h3>
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted">{achievements[key].length} records</p>
                    <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-primary/60 via-primary/20 to-transparent" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      {openKey && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-[28px] border border-border/80 bg-[linear-gradient(180deg,rgba(13,21,34,0.98),rgba(11,17,26,0.96))] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between border-b border-border/80 bg-surface/80 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-primary/30 bg-primary/8 font-mono text-[10px] font-semibold text-primary">
                  {String(GROUPS.findIndex((group) => group.key === openKey) + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/70">Category</p>
                  <h3 className="text-lg font-semibold text-text">{GROUPS.find((group) => group.key === openKey)?.label}</h3>
                </div>
              </div>

              <button
                type="button"
                aria-label="Close achievements modal"
                onClick={() => setOpenKey(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/80 text-muted transition hover:border-primary/40 hover:text-text"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-5 sm:p-6">
              <div className="space-y-3">
                {achievements[openKey].map((item, index) => (
                  <div key={`${openKey}-${item.label}`} className="rounded-2xl border border-border/80 bg-surface/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition hover:border-primary/25 hover:bg-surface/80">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/5 font-mono text-[10px] font-semibold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <p className="min-w-0 text-base font-medium text-text">{item.label}</p>
                          {item.documentUrl && (
                            <a
                              href={item.documentUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all duration-200 hover:border-primary/60 hover:bg-primary/15 hover:text-text"
                            >
                              View Document
                              <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                        {item.detail && <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
