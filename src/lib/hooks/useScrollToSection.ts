"use client";

import { useCallback } from "react";

export function useScrollToSection() {
  const scrollToSection = useCallback((sectionId: string, offset: number = 80) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, []);

  return scrollToSection;
}
