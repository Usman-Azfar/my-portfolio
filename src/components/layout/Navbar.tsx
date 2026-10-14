"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation, person } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    const isAtPageBottom = () =>
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24;

    const onScroll = () => {
      if (isAtPageBottom()) setActiveSection("#contact");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (isAtPageBottom()) {
          setActiveSection("#contact");
          return;
        }
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:px-6"
      >
        <nav
          aria-label="Primary"
          className="flex w-full max-w-7xl items-center gap-4 rounded-2xl border border-white/12 bg-[linear-gradient(110deg,rgba(16,27,45,0.94),rgba(10,18,31,0.86))] px-3 py-2.5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:gap-8 sm:px-4"
        >
          <a
            href="#hero"
            onClick={handleNavClick("#hero")}
            className="group flex shrink-0 items-center gap-2.5 rounded-xl px-2 py-1.5"
          >
            <span className="relative flex h-6 w-6 items-center justify-center rounded-lg border border-secondary/30 bg-secondary/10" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_12px_var(--color-secondary)] transition-transform duration-300 group-hover:scale-125" />
            </span>
            <span className="font-display text-sm font-semibold tracking-[0.08em] text-text sm:text-base">
              {person.shortName}
            </span>
          </a>

          <ul className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {navigation.map((item) => (
              <li key={item.href} className="flex-1 max-w-[120px]">
                <a
                  href={item.href}
                  onClick={handleNavClick(item.href)}
                  className={cn(
                    "relative flex w-full items-center justify-center whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-medium transition-all duration-200",
                    activeSection === item.href
                      ? "bg-primary/12 text-primary shadow-[inset_0_0_0_1px_rgba(125,211,252,0.18)] after:absolute after:inset-x-2.5 after:-bottom-0.5 after:h-px after:bg-primary"
                      : "text-muted hover:bg-white/[0.05] hover:text-text"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="ml-auto rounded-xl border border-white/10 bg-white/[0.05] p-2.5 text-text transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary lg:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-white/12 bg-[linear-gradient(145deg,rgba(16,27,45,0.98),rgba(7,14,25,0.97))] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-col">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick(item.href)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                      activeSection === item.href ? "bg-primary/12 text-primary" : "text-muted hover:bg-white/[0.05] hover:text-text"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
