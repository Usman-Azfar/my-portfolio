import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  icon?: React.ReactNode;
  download?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function Button({ href, children, variant = "primary", className, icon, download, onClick }: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles =
    variant === "primary"
      ? "bg-[linear-gradient(135deg,var(--color-primary),var(--color-secondary))] text-slate-950 font-semibold shadow-[0_10px_30px_rgba(125,211,252,0.28)] hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(125,211,252,0.4)]"
      : "border border-border-strong bg-white/[0.02] text-text hover:border-primary/70 hover:bg-primary/5 hover:-translate-y-0.5";

  return (
    <Link
      href={href}
      className={cn(base, styles, className)}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      download={download}
      onClick={onClick}
    >
      {children}
      {icon}
    </Link>
  );
}
