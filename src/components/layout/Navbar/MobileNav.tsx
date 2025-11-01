"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NavItemWithChildren } from "@/domains/navigation/types";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItemWithChildren[];
}

export function MobileNav({ isOpen, onClose, items }: MobileNavProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <nav
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-80 bg-white shadow-2xl transition-transform duration-300 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation"
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border p-4">
            <span className="text-lg font-bold">Menu</span>
            <button
              onClick={onClose}
              className="rounded-md p-2 hover:bg-secondary"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.map((item) => (
              <div key={item.title} className="mb-2">
                {item.items && item.items.length > 0 ? (
                  <>
                    <button
                      onClick={() => toggleItem(item.title)}
                      className="flex w-full items-center justify-between rounded-md px-4 py-3 text-left font-medium hover:bg-secondary"
                    >
                      {item.title}
                      <svg
                        className={cn(
                          "h-5 w-5 transition-transform",
                          expandedItems.includes(item.title) && "rotate-180"
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
                    {expandedItems.includes(item.title) && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={onClose}
                            className="block rounded-md px-4 py-2 text-sm hover:bg-secondary"
                          >
                            <div className="font-medium">{subItem.title}</div>
                            {subItem.description && (
                              <div className="mt-1 text-xs text-muted">
                                {subItem.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-4 py-3 font-medium hover:bg-secondary"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-md px-4 py-3 font-medium hover:bg-secondary"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
