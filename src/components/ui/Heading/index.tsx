import React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  balance?: boolean;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, as, balance = true, children, ...props }, ref) => {
    const Component = as || (`h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6");

    return (
      <Component
        ref={ref as any}
        className={cn(balance && "text-balance", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";
