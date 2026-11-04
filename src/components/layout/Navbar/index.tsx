"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { navigationConfig } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Only the homepage has a full-bleed hero the bar can sit on transparently.
  const overHero = pathname === "/" && !isScrolled;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,box-shadow] duration-300",
          overHero
            ? "border-b border-transparent bg-transparent"
            : "border-b border-line bg-white/95 backdrop-blur-md"
        )}
      >
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <Link href="/" className="relative flex h-14 w-[70px] shrink-0 items-center" aria-label="Mandala Foods home">
            {/* Colour logo on white; white knockout over the homepage video */}
            <Image
              src="/images/logo-mandala-foods-trim.png"
              alt="Mandala Foods"
              width={721}
              height={575}
              className={cn("absolute inset-0 h-14 w-auto transition-opacity duration-300", overHero ? "opacity-0" : "opacity-100")}
              priority
            />
            <Image
              src="/images/logo-mandala-foods-white.png"
              alt=""
              aria-hidden="true"
              width={721}
              height={575}
              className={cn("absolute inset-0 h-14 w-auto transition-opacity duration-300", overHero ? "opacity-100" : "opacity-0")}
              priority
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigationConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors",
                  overHero ? "text-white/90 hover:text-white" : "text-ink/80 hover:text-ink",
                  isActive(item.href) && (overHero ? "text-white" : "text-ink")
                )}
              >
                {item.title}
                {isActive(item.href) && (
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full",
                      overHero ? "bg-white" : "bg-primary"
                    )}
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className={cn(
                "hidden h-11 items-center rounded-full px-5 text-[0.95rem] font-semibold transition-colors sm:inline-flex",
                overHero
                  ? "bg-white text-ink hover:bg-white/90"
                  : "bg-primary text-white hover:bg-primary-hover"
              )}
            >
              Contact us
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
                overHero ? "text-white hover:bg-white/10" : "text-ink hover:bg-mist"
              )}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={navigationConfig.mainNav}
        isActive={isActive}
      />
    </>
  );
}
