import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type CertificationCard = {
  title: string;
  provider: string;
  file?: string;
  type?: "pdf" | "image";
  description?: string;
};

const certifications: CertificationCard[] = [
  {
    title: "Advanced Algorithms",
    provider: "Coursera",
    file: "advanced-algorithms.pdf",
    type: "pdf",
  },
  {
    title: "Neural Networks and Deep Learning",
    provider: "Coursera · DeepLearning.AI",
    file: "neural-networks-and-deep-learning.pdf",
    type: "pdf",
  },
  {
    title: "Supervised Machine Learning",
    provider: "Coursera · DeepLearning.AI",
    file: "supervised-machine-learning.pdf",
    type: "pdf",
  },
  {
    title: "Unsupervised Learning",
    provider: "Coursera · DeepLearning.AI",
    file: "unsupervised-learning.pdf",
    type: "pdf",
  },
  {
    title: "AI Agents 101: MCP and Open Source Inference",
    provider: "AMD AI Academy",
    file: "ai-agents-101-mcp-open-inference.pdf",
    type: "pdf",
  },
  {
    title: "AI Agents 201: Design to Deployment",
    provider: "AMD AI Academy",
    file: "ai-agents-201-design-to-deployment.pdf",
    type: "pdf",
  },
  {
    title: "Introduction to Large Language Models",
    provider: "Google Skills",
    file: "introduction-to-llms.png",
    type: "image",
  },
  {
    title: "AWS Cloud Computing Certification",
    provider: "NAVTTC · 3 months",
    description:
      "Cloud infrastructure, virtualization, networking, storage, security, and core AWS services.",
  },
  {
    title: "Graphic Design Certification",
    provider: "DigiSkills · Government of Pakistan",
    description:
      "Adobe Photoshop and Illustrator, branding, and visual communication.",
  },
];

const certificationOrder = [
  "Supervised Machine Learning",
  "Unsupervised Learning",
  "Advanced Algorithms",
  "Neural Networks and Deep Learning",
  "Introduction to Large Language Models",
  "AI Agents 101: MCP and Open Source Inference",
  "AI Agents 201: Design to Deployment",
  "AWS Cloud Computing Certification",
  "Graphic Design Certification",
];
const orderedCertifications = [...certifications].sort(
  (a, b) => certificationOrder.indexOf(a.title) - certificationOrder.indexOf(b.title),
);

const certificateRoot = "/documents/certificates";

export function Certifications() {
  return (
    <section id="certifications" className="border-b border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="07"
          title="Courses & Certifications"
          description="Selected coursework and credentials in algorithms, machine learning, and AI."
        />

        <div className="relative">
          <div className="projects-scrollbar flex items-stretch snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
            {orderedCertifications.map((certification, index) => {
              const fileUrl = certification.file ? `${certificateRoot}/${certification.file}` : undefined;
              return (
                <Reveal
                  key={certification.file ?? certification.title}
                  className="h-[430px] w-[300px] shrink-0 snap-start sm:w-[340px]"
                >
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-border/80 bg-[linear-gradient(180deg,rgba(13,21,34,0.96),rgba(10,16,24,0.92))] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-mono text-xs tracking-[0.2em] text-primary/75">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="rounded-full border border-border/80 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-muted">
                        {certification.file ? "Certificate" : "Course"}
                      </span>
                    </div>

                    {fileUrl ? (
                      <a
                        href={fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${certification.title} certificate`}
                        className="mb-4 block h-[178px] overflow-hidden rounded-2xl border border-border/80 bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-primary"
                      >
                        {certification.type === "image" ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={fileUrl}
                            alt={`${certification.title} certificate`}
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <object
                            data={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                            type="application/pdf"
                            aria-label={`${certification.title} certificate preview`}
                            className="pointer-events-none h-full w-full bg-white"
                          >
                            <div className="flex h-full items-center justify-center text-sm text-muted">
                              Certificate preview
                            </div>
                          </object>
                        )}
                      </a>
                    ) : (
                      <div className="mb-4 flex h-[178px] flex-col items-center justify-center gap-3 rounded-2xl border border-border/80 bg-[radial-gradient(circle_at_top,_rgba(124,199,255,0.12),_transparent_65%),rgba(255,255,255,0.02)] text-center">
                        <BookOpen size={26} className="text-primary/80" aria-hidden="true" />
                        <span className="text-xs tracking-wide text-muted">Certificate not available yet</span>
                      </div>
                    )}

                    <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-text">
                      {certification.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{certification.provider}</p>
                    {certification.description && (
                      <p className="mt-2 text-xs leading-relaxed text-muted/90">{certification.description}</p>
                    )}

                    {fileUrl && (
                      <a
                        href={fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-medium text-primary transition-colors hover:text-text"
                      >
                        View certificate <ExternalLink size={14} />
                      </a>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-center text-xs font-medium tracking-[0.2em] text-muted">
            <ArrowRight size={14} className="text-primary" />
            <span>Drag or scroll to browse certificates</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
