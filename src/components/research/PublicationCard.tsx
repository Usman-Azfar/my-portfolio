import { FileText, ExternalLink } from "lucide-react";
import type { PublicationEntry } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

export function PublicationCard({ publication }: { publication: PublicationEntry }) {
  const links = [
    ...(publication.pdfUrl ? [{ label: "PDF", href: publication.pdfUrl }] : []),
    ...(publication.links ?? []),
  ];

  return (
    <Reveal className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-start gap-3">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong text-muted">
            <FileText size={16} />
          </div>
          <div className="min-w-0">
            <h3 className="text-balance font-display text-lg font-medium tracking-tight">{publication.title}</h3>
            <p className="mt-1 text-sm text-muted">{publication.authors}</p>
            {publication.supervisor && (
              <p className="mt-1 text-sm text-muted">Supervisor: {publication.supervisor}</p>
            )}
            {publication.venueNote && <p className="mt-1 text-sm italic text-muted">{publication.venueNote}</p>}
          </div>
        </div>
        <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
          {publication.status}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{publication.abstract}</p>

      {publication.highlights && publication.highlights.length > 0 && (
        <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {publication.highlights.map((highlight) => (
            <div key={highlight.label} className="rounded-xl border border-border bg-surface-secondary/60 px-4 py-3">
              <dt className="sr-only">{highlight.label}</dt>
              <dd className="font-display text-xl font-medium text-secondary">{highlight.value}</dd>
              <dd className="mt-0.5 text-xs text-muted">{highlight.label}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {publication.researchArea.map((area) => (
          <Badge key={area}>{area}</Badge>
        ))}
      </div>

      {(publication.journal || publication.conference || publication.doi || links.length > 0) && (
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4 text-sm text-muted">
          {publication.journal && <span>{publication.journal}</span>}
          {publication.conference && <span>{publication.conference}</span>}
          {publication.doi && <span>DOI: {publication.doi}</span>}
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              {link.label} <ExternalLink size={13} />
            </a>
          ))}
        </div>
      )}

      {publication.statusNote && <p className="mt-3 text-xs leading-relaxed text-muted/80">{publication.statusNote}</p>}
    </Reveal>
  );
}
