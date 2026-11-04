import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Eyebrow — small uppercase label above a heading                           */
/* -------------------------------------------------------------------------- */

export function Eyebrow({
  children,
  tone = "green",
  className,
}: {
  children: React.ReactNode;
  tone?: "green" | "orange" | "light";
  className?: string;
}) {
  const tones = {
    green: "text-primary",
    orange: "text-accent",
    light: "text-white/70",
  };
  return (
    <p
      className={cn(
        "mb-4 text-xs font-bold uppercase leading-none tracking-[0.2em]",
        tones[tone],
        className
      )}
    >
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*  SectionHeader — eyebrow + title + lead, optional action on the right      */
/* -------------------------------------------------------------------------- */

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  action,
  as: Tag = "h2",
  className,
  eyebrowTone,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  action?: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
  eyebrowTone?: "green" | "orange" | "light";
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-6 md:mb-16",
        action && !centered && "md:flex-row md:items-end md:justify-between",
        centered && "items-center text-center",
        className
      )}
    >
      <div className={cn("max-w-3xl", centered && "mx-auto")}>
        {eyebrow && (
          <Eyebrow tone={eyebrowTone ?? (tone === "light" ? "light" : "green")}>
            {eyebrow}
          </Eyebrow>
        )}
        <Tag
          className={cn(
            "text-balance font-bold tracking-[-0.03em]",
            Tag === "h1"
              ? "text-[2.5rem] leading-[1.05] md:text-6xl"
              : "text-[2rem] leading-[1.1] md:text-[2.75rem]",
            tone === "light" ? "text-white" : "text-ink"
          )}
        >
          {title}
        </Tag>
        {lead && (
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed md:text-xl",
              centered && "mx-auto",
              tone === "light" ? "text-white/75" : "text-gray-600"
            )}
          >
            {lead}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  ArrowLink — understated text link with arrow                              */
/* -------------------------------------------------------------------------- */

export function ArrowLink({
  href,
  children,
  external,
  tone = "dark",
  className,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  tone?: "dark" | "light" | "green";
  className?: string;
}) {
  const tones = {
    dark: "text-ink hover:text-primary",
    light: "text-white hover:text-white/80",
    green: "text-primary hover:text-primary-hover",
  };
  const classes = cn(
    "group/link inline-flex items-center gap-2 text-[0.95rem] font-semibold transition-colors",
    tones[tone],
    className
  );
  const inner = (
    <>
      <span className="underline decoration-current/25 decoration-1 underline-offset-[6px] transition-colors group-hover/link:decoration-current">
        {children}
      </span>
      <ArrowRight
        className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5"
        aria-hidden="true"
      />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
