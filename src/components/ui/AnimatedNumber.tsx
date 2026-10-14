"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Animates a numeric prefix within a label like "92%" or "1,000+" on scroll
 * into view. Falls back to displaying the final value immediately when the
 * viewer prefers reduced motion.
 */
export function AnimatedNumber({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);

  useEffect(() => {
    if (!match || !inView || reducedMotion) return;
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ""));
    const decimalPlaces = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const duration = 1200;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      const formatted =
        decimalPlaces > 0 ? current.toFixed(decimalPlaces) : Math.round(current).toLocaleString();
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
