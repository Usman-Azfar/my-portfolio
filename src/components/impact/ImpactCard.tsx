import type { LeadershipEntry } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { MediaGallery } from "@/components/media/MediaGallery";
import { VideoEmbed } from "@/components/media/VideoEmbed";

export function ImpactCard({ entry, delay }: { entry: LeadershipEntry; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-border/80 bg-[radial-gradient(circle_at_top_left,_rgba(124,199,255,0.12),_transparent_36%),linear-gradient(180deg,rgba(13,21,34,0.96),rgba(10,16,24,0.92))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_70px_rgba(124,199,255,0.08)] sm:p-7"
    >
      <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-80" />

      <div className="relative grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 gap-y-1">
        <div className="min-w-0">
          <h4 className="font-display text-lg font-medium tracking-tight">{entry.title}</h4>
          <p className="mt-1 text-sm text-muted">{entry.role}</p>
        </div>
        <span className="justify-self-end rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] text-primary/80">
          {entry.date}
        </span>
      </div>

      <p className="relative mt-4 text-sm leading-relaxed text-muted">{entry.description}</p>

      {(entry.peopleImpacted || entry.outcome) && (
        <div className="relative mt-auto pt-5">
          <div className="rounded-2xl border border-border/70 bg-surface/40 p-4">
          <div className="flex flex-col gap-1.5">
            {entry.peopleImpacted && (
              <p className="font-mono text-[11px] tracking-[0.18em] text-secondary">{entry.peopleImpacted}</p>
            )}
            {entry.outcome && <p className="text-sm text-muted">{entry.outcome}</p>}
          </div>
          </div>
        </div>
      )}

      {(entry.images?.length || entry.videos?.length) && (
        <div className="relative mt-4 flex flex-col gap-3">
          <MediaGallery images={entry.images} />
          {entry.videos?.map((v) => (
            <VideoEmbed key={v.src} video={v} />
          ))}
        </div>
      )}
    </Reveal>
  );
}
