import Image from "next/image";
import { about } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const NARRATIVE: { label: string; value: string }[] = [
  { label: "Who I Am", value: about.whoIAm },
  { label: "What I Build", value: about.whatIBuild },
  { label: "What I Research", value: about.whatIResearch },
  { label: "Why I Care", value: about.whyICare },
];

const CURRENTLY: { label: string; value: string }[] = [
  { label: "Building", value: about.currently.building },
  { label: "Researching", value: about.currently.researching },
];

export function About() {
  return (
    <section id="about" className="border-b border-border py-24 sm:py-32">
      <Container>
        <SectionHeading index="01" title="About" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.35fr_0.95fr] lg:items-start">
          <div className="flex flex-col gap-8 lg:h-full lg:justify-between">
            {NARRATIVE.map((block, i) => (
              <Reveal key={block.label} delay={i * 0.06}>
                <div className="group relative overflow-hidden rounded-[28px] border border-border/80 bg-[radial-gradient(circle_at_top_left,_rgba(124,199,255,0.12),_transparent_36%),linear-gradient(180deg,rgba(13,21,34,0.96),rgba(10,16,24,0.92))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 sm:p-6">
                  <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-80" />
                  <h3 className="relative font-mono text-xs tracking-[0.25em] text-primary/70">{block.label.toUpperCase()}</h3>
                  <p className="relative mt-3 text-balance text-base leading-relaxed text-muted sm:text-lg">{block.value}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-6 lg:pt-1">
            <Reveal className="overflow-hidden rounded-[28px] border border-border/80 bg-[radial-gradient(circle_at_top_left,_rgba(124,199,255,0.12),_transparent_36%),linear-gradient(180deg,rgba(13,21,34,0.96),rgba(10,16,24,0.92))] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1rem]">
                <Image
                  src="/documents/pic_whiteBg.jpeg"
                  alt="Usman Azfar"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>

            <Reveal className="rounded-[28px] border border-border/80 bg-[radial-gradient(circle_at_top_left,_rgba(124,199,255,0.12),_transparent_36%),linear-gradient(180deg,rgba(13,21,34,0.96),rgba(10,16,24,0.92))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:p-7">
              <h3 className="font-mono text-xs tracking-[0.25em] text-primary/70">CURRENTLY</h3>
              <dl className="mt-4 flex flex-col gap-4">
                {CURRENTLY.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border/70 bg-surface/40 p-3">
                    <dt className="text-sm font-medium text-text">{item.label}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.08} className="rounded-[28px] border border-border/80 bg-[radial-gradient(circle_at_top_left,_rgba(124,199,255,0.12),_transparent_36%),linear-gradient(180deg,rgba(13,21,34,0.96),rgba(10,16,24,0.92))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:p-7">
              <h3 className="font-mono text-xs tracking-[0.25em] text-primary/70">BEYOND TECHNOLOGY</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{about.beyondTechnology}</p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
