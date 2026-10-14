import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  title,
  description,
  align = "center",
  className,
}: {
  index: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-14 sm:mb-16 text-center", className)}>
      <div className="mx-auto flex max-w-fit items-center justify-center gap-4">
        {align === "center" && <span className="h-px w-10 bg-border-strong" aria-hidden="true" />}
        <span className="font-mono text-xs tracking-[0.25em] text-primary/70 sm:text-sm">{index}</span>
        {align === "center" && <span className="h-px w-10 bg-border-strong" aria-hidden="true" />}
      </div>
      <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={cn("mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg", align === "center" && "text-center")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
