"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { hero, person } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useMediaQuery, useWebGLSupported } from "@/lib/hooks";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

function StaticGlow() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div
        className="h-[60vmin] w-[60vmin] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary) 0%, var(--color-accent) 45%, transparent 70%)",
        }}
      />
    </div>
  );
}

export function Hero() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const prefersReducedMotion = useReducedMotion();
  const webglSupported = useWebGLSupported();

  const show3D = webglSupported && !prefersReducedMotion;

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-border"
    >
      <div className="absolute inset-0 bg-noise opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 18%, rgba(125,211,252,0.18), transparent 28%), radial-gradient(ellipse at 80% 25%, rgba(167,139,250,0.14), transparent 26%), linear-gradient(180deg, rgba(3,8,22,0.15), rgba(3,8,22,0.6))",
        }}
      />

      {show3D ? (
        <Suspense fallback={<StaticGlow />}>
          <HeroScene quality={isMobile ? "low" : "high"} />
        </Suspense>
      ) : (
        <StaticGlow />
      )}

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-balance bg-[linear-gradient(105deg,#ffffff_0%,#d9f5ff_48%,#7dd3fc_100%)] bg-clip-text font-display text-6xl font-semibold leading-[0.95] tracking-[-0.045em] text-transparent sm:text-7xl lg:text-8xl"
          >
            {person.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            aria-label={hero.headline}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-display text-base font-medium tracking-[0.12em] text-primary sm:text-lg"
          >
            {hero.headline.split(" . ").map((role, index) => (
              <span key={role} className="inline-flex items-center gap-3">
                {index > 0 && <span className="h-1 w-1 rounded-full bg-secondary shadow-[0_0_12px_var(--color-secondary)]" aria-hidden="true" />}
                <span className={index % 2 === 0 ? "text-primary" : "text-secondary"}>{role}</span>
              </span>
            ))}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-balance text-lg leading-relaxed text-white/90 sm:text-xl lg:text-2xl"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button
              href={hero.ctaPrimary.href}
              variant="primary"
              onClick={(event) => {
                event.preventDefault();
                document.querySelector(hero.ctaPrimary.href)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {hero.ctaPrimary.label}
            </Button>
            <Button
              href={hero.ctaSecondary.href}
              variant="secondary"
              className="!border-primary/60 !bg-primary/15 !text-primary hover:!bg-primary/25"
              icon={<Download size={15} />}
              download
            >
              {hero.ctaSecondary.label}
            </Button>
          </motion.div>

        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted-dim"
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>

      <span className="sr-only">{person.name} — {person.title}</span>
    </section>
  );
}
