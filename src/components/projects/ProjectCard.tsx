import { ArrowUpRight, Eye, Sparkles } from "lucide-react";
import type { ProjectEntry } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, onOpen }: { project: ProjectEntry; onOpen: () => void }) {
  return (
    <Reveal className="h-full">
      <div
        className={cn(
          "group relative flex h-full w-full flex-col overflow-hidden rounded-[28px] border p-6 text-left transition-all duration-300 hover:-translate-y-1 sm:p-8",
          project.featured
            ? "border-primary/25 bg-[radial-gradient(circle_at_top_left,_rgba(124,199,255,0.12),_transparent_34%),linear-gradient(180deg,rgba(13,21,34,0.96),rgba(10,16,24,0.92))] shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
            : "border-border/80 bg-[linear-gradient(180deg,rgba(13,21,34,0.96),rgba(10,16,24,0.92))] hover:border-border-strong"
        )}
      >
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "radial-gradient(circle at 30% 0%, var(--color-glow), transparent 60%)" }}
          aria-hidden="true"
        />

        <div className="relative flex items-start justify-between gap-3">
          {project.featured && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-secondary">
              <Sparkles size={11} /> Flagship
            </span>
          )}
          <ArrowUpRight
            size={18}
            className="ml-auto shrink-0 text-muted-dim transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary"
          />
        </div>

        <h3 className="relative mt-4 font-display text-xl font-medium tracking-tight sm:text-2xl">
          {project.title}
        </h3>
        <p className="relative mt-3 line-clamp-4 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="relative mt-5 flex flex-wrap gap-2 pt-1">
          {project.technologies.slice(0, 4).map((t) => (
            <span key={t} className="rounded-full border border-border/80 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted">
              {t}
            </span>
          ))}
        </div>

        <div className="relative mt-auto flex items-center justify-between gap-3 pt-5">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:border-primary/50 hover:text-primary"
            >
              <GithubIcon size={15} />
              GitHub
            </a>
          ) : <span />}
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-200 hover:border-primary/60 hover:bg-primary/15 hover:text-text"
          >
            <Eye size={15} />
            View
          </button>
        </div>
      </div>
    </Reveal>
  );
}
