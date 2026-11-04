"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone, X } from "lucide-react";
import { NavItem } from "@/domains/navigation/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  isActive: (href: string) => boolean;
}

export function MobileNav({ isOpen, onClose, items, isActive }: MobileNavProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <nav className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-2xl" aria-label="Mobile navigation">
        <div className="flex h-20 items-center justify-between border-b border-line px-5">
          <Image src="/images/logo-mandala-foods-trim.png" alt="Mandala Foods" width={721} height={575} className="h-12 w-auto" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-mist"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto px-5 py-4">
          {items.map((item) => (
            <li key={item.href} className="border-b border-line last:border-0">
              <Link
                href={item.href}
                onClick={onClose}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between py-5 text-xl font-bold tracking-[-0.02em]",
                  isActive(item.href) ? "text-primary" : "text-ink"
                )}
              >
                {item.title}
                <ArrowRight className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="space-y-3 border-t border-line bg-mist px-5 py-6">
          <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm font-semibold text-ink">
            <Mail className="h-4 w-4 text-primary" /> {siteConfig.contact.email}
          </a>
          <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm font-semibold text-ink">
            <Phone className="h-4 w-4 text-primary" /> {siteConfig.contact.phone}
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="mt-2 flex h-12 items-center justify-center rounded-full bg-primary text-[0.95rem] font-semibold text-white"
          >
            Contact us
          </a>
        </div>
      </nav>
    </div>
  );
}
