"use client";

import React from "react";
import { Link } from "@/components/ui/Link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, external, className, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      external={external}
      className={cn(
        "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
