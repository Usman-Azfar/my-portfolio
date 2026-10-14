import { Mail, FileText } from "lucide-react";
import { person, social, footer as footerConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Footer() {
  const links = [
    social.github && { label: "GitHub", href: social.github, icon: GithubIcon },
    social.linkedin && { label: "LinkedIn", href: social.linkedin, icon: LinkedinIcon },
    { label: "Email", href: `mailto:${social.email}`, icon: Mail },
    { label: "CV", href: social.cv, icon: FileText },
  ].filter(Boolean) as { label: string; href: string; icon: typeof Mail }[];

  return (
    <footer id="contact" className="border-t border-border bg-background-elevated">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-primary/70">GET IN TOUCH</span>
            <h2 className="mt-4 max-w-md font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Let&apos;s build something dependable.
            </h2>
          </div>

          <div className="rounded-2xl border border-border-strong bg-surface/60 p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <p className="font-display text-lg font-medium tracking-tight text-text">{person.name}</p>
                <p className="mt-1 text-sm text-muted">{person.title.replace("AI Engineer", "Software Engineer")}</p>
              </div>
              <span className="hidden h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_14px_var(--color-secondary)] sm:block" />
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {links.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-muted transition-colors hover:border-primary/20 hover:bg-primary/5 hover:text-primary"
                  >
                    <Icon size={16} aria-hidden="true" />
                    <span className="truncate">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-5 text-xs text-muted-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {footerConfig.copyrightYear} {person.name}</p>
          <p className="tracking-[0.12em] uppercase">Lahore, Pakistan</p>
        </div>
      </Container>
    </footer>
  );
}
