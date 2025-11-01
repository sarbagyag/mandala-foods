import React from "react";
import { cn } from "@/lib/utils";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "lead" | "small" | "muted";
  balance?: boolean;
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant = "body", balance = false, children, ...props }, ref) => {
    const variantStyles = {
      body: "text-base",
      lead: "lead text-lg font-light",
      small: "small text-sm",
      muted: "text-sm text-muted",
    };

    return (
      <p
        ref={ref}
        className={cn(
          variantStyles[variant],
          balance && "text-balance",
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";
