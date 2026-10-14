import { FileText, ExternalLink } from "lucide-react";
import type { PublicationEntry } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

export function PublicationCard({ publication }: { publication: PublicationEntry }) {
  return (
    <Reveal className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong text-muted">
            <FileText size={16} />
          </div>
          <div>
            <h3 className="font-display text-lg font-medium tracking-tight">{publication.title}</h3>
            <p className="mt-1 text-sm text-muted">{publication.authors}</p>
          </div>
        </div>
        <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
          {publication.status}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{publication.abstract}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {publication.researchArea.map((area) => (
          <Badge key={area}>{area}</Badge>
        ))}
      </div>

      {(publication.journal || publication.conference || publication.doi || publication.pdfUrl) && (
        <div className="mt-4 flex flex-wrap gap-4 border-t border-border pt-4 text-sm text-muted">
          {publication.journal && <span>{publication.journal}</span>}
          {publication.conference && <span>{publication.conference}</span>}
          {publication.doi && <span>DOI: {publication.doi}</span>}
          {publication.pdfUrl && (
            <a href={publication.pdfUrl} className="inline-flex items-center gap-1 text-primary hover:underline">
              PDF <ExternalLink size={13} />
            </a>
          )}
        </div>
      )}
    </Reveal>
  );
}
