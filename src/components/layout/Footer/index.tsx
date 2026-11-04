import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { navigationConfig } from "@/config/navigation";

const social = [
  {
    label: "Facebook",
    href: siteConfig.links.facebook,
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "YouTube",
    href: siteConfig.links.youtube,
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { contact } = siteConfig;

  return (
    <footer className="bg-forest text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <Container>
        {/* Contact strip */}
        <div id="contact" className="grid gap-10 border-b border-white/10 py-16 md:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase leading-none tracking-[0.2em] text-white/60">
              Get in touch
            </p>
            <p className="max-w-xl text-balance text-[1.9rem] font-bold leading-[1.15] tracking-[-0.03em] text-white md:text-[2.5rem]">
              Stock our products, partner on school meals, or just say hello.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex h-14 items-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-ink transition-colors hover:bg-mist"
            >
              <Mail className="h-4 w-4" /> Email us
            </a>
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-2 rounded-full border border-white/30 px-7 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
            >
              WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Brand + link columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-16 md:grid-cols-4 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-10">
          <div className="col-span-2 max-w-sm md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-flex" aria-label="Mandala Foods home">
              <Image src="/images/logo-mandala-foods-white.png" alt="Mandala Foods" width={721} height={575} className="h-16 w-auto" />
            </Link>
            <p className="mt-6 text-[0.95rem] leading-relaxed text-white/65">
              A functional food brand upcycling locally sourced surplus and cosmetically rejected fruit into
              reduced-sugar, high-fibre foods for schools and families in Nepal.
            </p>

            <ul className="mt-8 space-y-3 text-[0.95rem]">
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-white/80 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-primary" /> {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-white/80 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-primary" /> {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <MapPin className="h-4 w-4 shrink-0 text-primary" /> {contact.address}
              </li>
            </ul>
          </div>

          {navigationConfig.footerNav.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/50">{group.title}</h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.title}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[0.95rem] text-white/80 transition-colors hover:text-white"
                      >
                        {item.title}
                        <ArrowUpRight className="h-3.5 w-3.5 text-white/40" aria-hidden="true" />
                      </a>
                    ) : (
                      <Link href={item.href} className="text-[0.95rem] text-white/80 transition-colors hover:text-white">
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-6 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/50">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex gap-2" aria-label="Social media">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white hover:bg-white hover:text-forest"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
