"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { JournalEntryData } from "@/types";
import { formatJournalDate, cn } from "@/lib/utils";
import { MediaGallery } from "@/components/media/MediaGallery";
import { VideoEmbed } from "@/components/media/VideoEmbed";

const journalLabelStyles = "font-mono text-[10px] uppercase tracking-[0.2em] text-primary/70";

export function JournalEntry({
  entry,
  isOpen,
  onToggle,
}: {
  entry: JournalEntryData;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `journal-panel-${entry.id}`;
  const buttonId = `journal-button-${entry.id}`;

  return (
    <div className="border-b border-border last:border-b-0">
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center gap-4 py-4 text-left transition-colors hover:text-text"
        >
          <ChevronRight
            size={16}
            className={cn("shrink-0 text-muted-dim transition-transform duration-300", isOpen && "rotate-90 text-primary")}
            aria-hidden="true"
          />
          <span className="font-mono text-xs text-muted-dim sm:w-28 sm:shrink-0">{formatJournalDate(entry.date)}</span>
          <span className={cn("text-sm sm:text-base", isOpen ? "text-text" : "text-muted")}>{entry.title}</span>
          <span className="ml-auto hidden font-mono text-xs text-muted-dim sm:block">{entry.category}</span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pb-7 pl-8 pr-2">
              <div className="grid w-full grid-cols-1 gap-3 text-sm text-muted sm:grid-cols-2 sm:text-base">
                <div className="flex items-center gap-2">
                  <span className={journalLabelStyles}>Project:</span>
                  <span className="min-w-0 flex-1 truncate">{entry.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={journalLabelStyles}>Module:</span>
                  <span className="min-w-0 flex-1 truncate">{entry.title}</span>
                </div>
              </div>

              <div>
                <p className={journalLabelStyles}>Task:</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{entry.context}</p>
              </div>

              <div>
                <p className={journalLabelStyles}>Problems Faced:</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{entry.problem}</p>
              </div>

              <div>
                <p className={journalLabelStyles}>Implementation/Solution:</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{entry.solution}</p>
              </div>

              <div>
                <p className={journalLabelStyles}>Impact:</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{entry.impact}</p>
              </div>

              <div>
                <p className={journalLabelStyles}>Learning:</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{entry.learning}</p>
              </div>

              <div>
                <p className={journalLabelStyles}>Technologies Used:</p>
                <p className="mt-1 text-sm text-secondary">{entry.technologies.join(" · ")}</p>
              </div>

              {(entry.images?.length || entry.videos?.length) && (
                <div>
                  <p className={journalLabelStyles}>Media:</p>
                  <div className="mt-3 flex flex-col gap-4">
                    <MediaGallery images={entry.images} />
                    {entry.videos?.map((v) => (
                      <VideoEmbed key={v.src} video={v} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
