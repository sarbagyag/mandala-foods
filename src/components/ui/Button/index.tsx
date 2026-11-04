import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "accent"
    | "dark"
    | "outline"
    | "light"
    | "outlineLight"
    | "secondary"
    | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
  external?: boolean;
  /** Trailing arrow that nudges on hover */
  arrow?: boolean;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  accent: "bg-accent text-white hover:bg-accent-hover",
  dark: "bg-ink text-white hover:bg-forest",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white",
  light: "bg-white text-ink hover:bg-mist",
  outlineLight: "border border-white/40 text-white hover:border-white hover:bg-white hover:text-ink",
  secondary: "bg-mist text-ink hover:bg-primary/10",
  ghost: "text-ink hover:bg-mist",
};

const sizeStyles = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      asChild: _asChild,
      href,
      external = false,
      arrow = false,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-[-0.005em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {children}
        {arrow && (
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
            aria-hidden="true"
          />
        )}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
