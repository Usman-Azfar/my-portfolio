import { ExternalLink, GraduationCap } from "lucide-react";
import { education } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Education() {
  return (
    <section id="education" className="border-b border-border py-24 sm:py-32">
      <Container>
        <SectionHeading index="02" title="Education" description="An academic progression built on consistent, top-of-cohort performance." />

        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border sm:left-[19px]" aria-hidden="true" />

          <ol className="flex flex-col gap-10">
            {education.map((entry, i) => (
              <Reveal key={entry.id} delay={i * 0.08}>
                <li className="relative flex gap-6 pl-0 sm:gap-8">
                  <div
                    className={cn(
                      "relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border sm:h-10 sm:w-10",
                      entry.primary
                        ? "border-green-400/40 bg-green-500/10 text-green-300"
                        : "border-border-strong bg-surface text-muted"
                    )}
                  >
                    <GraduationCap size={entry.primary ? 18 : 15} />
                  </div>

                  <div
                    className={cn(
                      "relative flex-1 overflow-hidden rounded-[28px] border p-6 shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 sm:p-8",
                      entry.primary
                        ? "border-primary/25 bg-[radial-gradient(circle_at_top_left,_rgba(124,199,255,0.12),_transparent_34%),linear-gradient(180deg,rgba(13,21,34,0.96),rgba(10,16,24,0.92))]"
                        : "border-border/80 bg-[linear-gradient(180deg,rgba(13,21,34,0.96),rgba(10,16,24,0.92))]"
                    )}
                  >
                    <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-80" />

                    <div className="relative flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-medium tracking-tight sm:text-2xl">
                          {entry.degree}
                        </h3>
                        <p className="mt-1 text-sm text-muted">
                          {entry.institution}
                          {entry.parentInstitution && `, ${entry.parentInstitution}`}
                          {entry.location && ` · ${entry.location}`}
                        </p>
                      </div>
                      <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] text-primary/80">
                        {entry.period}
                      </span>
                    </div>

                    <div className="relative mt-5 flex flex-wrap items-center gap-3">
                      <div
                        className={cn(
                          "rounded-full border px-4 py-1.5 font-mono text-sm",
                          "border-green-400/40 bg-green-500/10 text-green-300"
                        )}
                      >
                        {entry.score} <span className="opacity-80">· {entry.scoreLabel}</span>
                      </div>

                      {entry.resultUrl && (
                        <a
                          href={entry.resultUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all duration-200 hover:border-primary/60 hover:bg-primary/15 hover:text-text"
                        >
                          {entry.resultLabel ?? "View result card"}
                          <ExternalLink size={12} />
                        </a>
                      )}

                      {entry.highlight && (
                        <span className="text-sm text-muted">{entry.highlight}</span>
                      )}
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
