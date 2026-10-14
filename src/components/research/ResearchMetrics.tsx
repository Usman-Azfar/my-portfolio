import type { ResearchMetric } from "@/types";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { StaggerItem } from "@/components/ui/Reveal";

export function ResearchMetrics({ metrics }: { metrics: ResearchMetric[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {metrics.map((metric) => (
        <StaggerItem
          key={metric.label}
          className="rounded-xl border border-border bg-surface-secondary/60 p-5 text-center"
        >
          <AnimatedNumber value={metric.value} className="block font-display text-2xl font-medium text-secondary sm:text-3xl" />
          <span className="mt-1.5 block text-xs text-muted">{metric.label}</span>
        </StaggerItem>
      ))}
    </div>
  );
}
