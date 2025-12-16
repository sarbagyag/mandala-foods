'use client'

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { navigationConfig } from "@/config/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-200 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <Container>
        <div className="relative py-20 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Brand & Social Column - Wider */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', rowGap: '0.2rem'}}>
                <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  Mandala Foods
                </h3>
                </div>
                <div>
                <p className="text-base leading-relaxed text-gray-600 max-w-md font-light">
                  Functional food brand upcycling locally sourced surplus and cosmetically rejected fruits into reduced-sugar, high-fiber, enriched food products.
                </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2">
                <p style={{marginBottom: '1rem'}} className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {siteConfig.links.facebook && (
                    <a
                      href={siteConfig.links.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-gray-200 text-gray-600 hover:border-[#e5790e] hover:bg-[#e5790e] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
                      aria-label="Facebook"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  )}
                  {siteConfig.links.linkedin && (
                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-gray-200 text-gray-600 hover:border-[#e5790e] hover:bg-[#e5790e] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                  {siteConfig.links.youtube && (
                    <a
                      href={siteConfig.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-gray-200 text-gray-600 hover:border-[#e5790e] hover:bg-[#e5790e] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
                      aria-label="YouTube"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem', flexDirection: 'column', alignItems: 'flex-start', rowGap: '1.5rem'}}>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-8 pb-2 border-b-2" style={{ borderColor: '#e5790e' }}>
                Quick Links
              </h4>
               <div>
             <ul className="space-y-4">
                <li>
                  <Link href="/who-we-are" className="group inline-flex items-center text-gray-600 hover:text-[#e5790e] transition-colors text-base font-medium">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link href="/our-approach" className="group inline-flex items-center text-gray-600 hover:text-[#e5790e] transition-colors text-base font-medium">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    Our Approach
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="group inline-flex items-center text-gray-600 hover:text-[#e5790e] transition-colors text-base font-medium">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    Products
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.mandalaagrifresh.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center text-gray-600 hover:text-[#e5790e] transition-colors text-base font-medium"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    Mandala Agrifresh
                  </a>
                </li>
                <li>
                  <Link href="/idea2impact" className="group inline-flex items-center text-gray-600 hover:text-[#e5790e] transition-colors text-base font-medium">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    Idea2Impact
                  </Link>
                </li>
              </ul>
              </div>
              </div>
             
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem', flexDirection: 'column', alignItems: 'flex-start', rowGap: '1rem'}}>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-8 pb-2 border-b-2" style={{ borderColor: '#00a54f' }}>
                Contact Us
              </h4>

              </div>
<div>
              <ul className="space-y-5">
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="group flex items-start gap-4 text-gray-600 hover:text-[#e5790e] transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 group-hover:text-white transition-colors" style={{ backgroundColor: 'rgba(229, 121, 14, 0.1)', color: '#e5790e' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#e5790e';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(229, 121, 14, 0.1)';
                    }}>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-base font-medium mt-2">{siteConfig.contact.phone}</span>
                  </a>
                </li>
                <li>
                    <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="group flex items-start gap-4 text-gray-600 hover:text-[#e5790e] transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 group-hover:text-white transition-colors" style={{ backgroundColor: 'rgba(229, 121, 14, 0.1)', color: '#e5790e' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#e5790e';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(229, 121, 14, 0.1)';
                    }}>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-base font-medium mt-2">{siteConfig.contact.email}</span>
                  </a> 
                </li>
                <li>
                  <div  className="group flex items-start gap-4 text-gray-600 hover:text-[#e5790e] transition-colors">

                    <div className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 group-hover:text-white transition-colors" style={{ backgroundColor: 'rgba(0, 165, 79, 0.1)', color: '#00a54f' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#00a54f';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(0, 165, 79, 0.1)';
                    }}>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-base font-medium mt-2">{siteConfig.contact.address}</span>

                  </div>
                </li>
                <li className="pt-2">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-white px-6 py-3.5 rounded-2xl transition-all duration-300 font-bold text-base shadow-lg hover:shadow-xl hover:scale-105"
                    style={{
                      background: 'linear-gradient(to right, #00a54f, #008a42)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(to right, #008a42, #007036)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(to right, #00a54f, #008a42)';
                    }}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp Us
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </li>
              </ul>
 
</div>

           </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-gray-200 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-500 font-light">
              &copy; {currentYear} <span className="font-semibold text-gray-700">{siteConfig.name}</span>. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Crafted with care for a sustainable future
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
