import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "ghost";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      padding = "md",
      hover = false,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: "bg-white shadow-md",
      outline: "border-2 border-border",
      ghost: "bg-transparent",
    };

    const paddingStyles = {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };

    const hoverStyles = hover
      ? "transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      : "";

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg",
          variantStyles[variant],
          paddingStyles[padding],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("mb-4", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent";

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("mt-4", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "CardFooter";
