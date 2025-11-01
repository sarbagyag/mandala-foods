"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { NavDropdown } from "./NavDropdown";
import { MobileNav } from "./MobileNav";
import { navigationConfig } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 shadow-md backdrop-blur-sm"
            : "bg-transparent"
        )}
      >
        <Container>
          <nav
            className="flex h-28 items-center justify-between"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-mandala-foods.png"
                alt="Mandala Foods"
                width={240}
                height={80}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navigationConfig.mainNav.map((item) =>
                item.external ? (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "px-4 py-2 text-sm font-semibold transition-colors",
                      isScrolled
                        ? "text-gray-900 hover:text-primary"
                        : "text-white hover:text-white/80"
                    )}
                  >
                    {item.title}
                  </a>
                ) : (
                  <NavDropdown
                    key={item.title}
                    item={item}
                    isScrolled={isScrolled}
                  />
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn(
                "rounded-md p-2 transition-colors lg:hidden",
                isScrolled
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={navigationConfig.mainNav}
      />
    </>
  );
}
