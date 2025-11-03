"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { NavItemWithChildren } from "@/domains/navigation/types";
import { cn } from "@/lib/utils";

interface NavDropdownProps {
  item: NavItemWithChildren;
  isScrolled?: boolean;
}

export function NavDropdown({ item, isScrolled = false }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Add a delay before closing to allow users to move to the dropdown
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 30);
  };

  if (!item.items || item.items.length === 0) {
    return (
      <Link
        href={item.href}
        className={cn(
          "px-4 py-2 text-sm font-semibold transition-colors",
          isScrolled
            ? "text-gray-900 hover:text-primary"
            : "text-white hover:text-white/80"
        )}
      >
        {item.title}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors",
          isScrolled
            ? "text-gray-900 hover:text-primary"
            : "text-white hover:text-white/80"
        )}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {item.title}
        <svg
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 pt-2">
          <div className="w-64 rounded-lg border border-border bg-white py-2 shadow-xl">
            {item.items.map((subItem) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                className="block px-4 py-3 text-sm transition-colors hover:bg-secondary"
              >
                <div className="font-medium text-foreground">
                  {subItem.title}
                </div>
                {subItem.description && (
                  <div className="mt-1 text-xs text-muted">
                    {subItem.description}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
