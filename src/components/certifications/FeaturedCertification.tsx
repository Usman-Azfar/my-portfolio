import { BadgeCheck, ExternalLink } from "lucide-react";
import { featuredCertification as credential } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/ui/CopyButton";
import { Reveal } from "@/components/ui/Reveal";
import { formatJournalDate } from "@/lib/utils";

export function FeaturedCertification() {
  return (
    <Reveal className="mb-10">
      <article className="relative overflow-hidden rounded-[28px] border border-primary/40 bg-[radial-gradient(circle_at_top_left,_rgba(124,199,255,0.18),_transparent_45%),linear-gradient(180deg,rgba(13,21,34,0.96),rgba(10,16,24,0.92))] p-6 shadow-[0_18px_50px_rgba(125,211,252,0.12)] sm:p-8 lg:p-10">
        <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-80" />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary/80">{credential.label}</span>
              <span className="rounded-full border border-secondary/30 bg-secondary/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-secondary">
                {credential.status}
              </span>
            </div>

            <div className="mt-5 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <BadgeCheck size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-medium leading-snug tracking-tight text-text sm:text-3xl">
                  {credential.title}
                </h3>
                <p className="mt-2 text-sm text-muted sm:text-base">{credential.issuer}</p>
              </div>
            </div>

            <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim">Active since</dt>
                <dd className="mt-1 text-sm text-text">{formatJournalDate(credential.activeSince)}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim">Expires on</dt>
                <dd className="mt-1 text-sm text-text">{formatJournalDate(credential.expiresOn)}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-border/80 bg-white/[0.03] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim">Verification code</p>
            <div className="mt-2 flex items-center justify-between gap-3">
              <code className="min-w-0 break-all font-mono text-sm text-text">{credential.verificationCode}</code>
              <CopyButton value={credential.verificationCode} label="Copy verification code" />
            </div>
            <Button
              href={`${credential.verificationUrl}/${credential.verificationCode}`}
              icon={<ExternalLink size={15} aria-hidden="true" />}
              className="mt-5 w-full justify-center"
            >
              Verify credential
            </Button>
            <p className="mt-3 text-center text-xs text-muted">Opens the official AWS credential record.</p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
