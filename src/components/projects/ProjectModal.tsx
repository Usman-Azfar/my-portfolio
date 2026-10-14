"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import type { ProjectEntry } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { MediaGallery } from "@/components/media/MediaGallery";
import { VideoEmbed } from "@/components/media/VideoEmbed";
import { GithubIcon } from "@/components/ui/icons";

export function ProjectModal({ project, onClose }: { project: ProjectEntry | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl rounded-3xl border border-border-strong bg-background-elevated p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-5 top-5 rounded-full border border-border-strong p-2 text-text"
            >
              <X size={16} />
            </button>

            <h3 id="project-modal-title" className="pr-10 font-display text-2xl font-medium tracking-tight sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{project.description}</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <h4 className="font-mono text-xs tracking-[0.2em] text-primary/70">PROBLEM</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.problem}</p>
              </div>
              <div>
                <h4 className="font-mono text-xs tracking-[0.2em] text-primary/70">SOLUTION</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.solution}</p>
              </div>
            </div>

            {project.architecture && (
              <div className="mt-5">
                <h4 className="font-mono text-xs tracking-[0.2em] text-primary/70">ARCHITECTURE</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.architecture}</p>
              </div>
            )}

            {project.results && project.results.length > 0 && (
              <div className="mt-5">
                <h4 className="font-mono text-xs tracking-[0.2em] text-primary/70">RESULTS</h4>
                <ul className="mt-1.5 space-y-1">
                  {project.results.map((r) => (
                    <li key={r} className="text-sm leading-relaxed text-muted">
                      <span className="text-secondary">— </span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            {(project.images?.length || project.videos?.length) && (
              <div className="mt-6 flex flex-col gap-4">
                <MediaGallery images={project.images} />
                {project.videos?.map((v) => (
                  <VideoEmbed key={v.src} video={v} />
                ))}
              </div>
            )}

            {(project.githubUrl || project.liveUrl) && (
              <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <GithubIcon size={15} /> Source
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
