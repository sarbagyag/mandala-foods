import React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  underline?: boolean;
  variant?: "default" | "primary" | "muted";
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      href,
      external = false,
      underline = false,
      variant = "default",
      children,
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
      variantStyles[variant],
      underlineStyles,
      className
    );

    if (external) {
      return (
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <NextLink ref={ref} href={href} className={classes} {...props}>
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";
