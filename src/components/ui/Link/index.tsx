import React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  underline?: boolean;
  variant?: "default" | "primary" | "muted";
  disabled?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      href,
      external = false,
      underline = false,
      variant = "default",
      disabled = false,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: "text-foreground hover:text-primary",
      primary: "text-primary hover:text-primary-hover",
      muted: "text-muted hover:text-foreground",
    };

    const underlineStyles = underline
      ? "underline underline-offset-4"
      : "no-underline hover:underline hover:underline-offset-4";

    const classes = cn(
      "transition-colors duration-200",
      disabled ? "cursor-not-allowed opacity-50 pointer-events-none" : variantStyles[variant],
      !disabled && underlineStyles,
      className
    );

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    };

    if (disabled) {
      return (
        <span
          ref={ref as React.Ref<HTMLSpanElement>}
          className={classes}
          aria-disabled="true"
          {...(props as React.HTMLAttributes<HTMLSpanElement>)}
        >
          {children}
        </span>
      );
    }

    if (external) {
      return (
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={handleClick}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <NextLink ref={ref} href={href} className={classes} onClick={handleClick} {...props}>
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";
