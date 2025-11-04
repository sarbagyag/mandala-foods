'use client'

import React from "react";
import { Container } from "@/components/ui/Container";

export function StaffBoardSection() {
  const boardMembers = [
    {
      name: "Dr. Robin Shrestha",
      role: "Chairperson",
      category: "Board"
    },
    {
      name: "Ms. Sophiya Tamang",
      role: "CEO and Co-Founder",
      category: "Board"
    },
  ];

  const experts = [
    {
      name: "Dr. Atul Upadhyay",
      role: "Food and Nutrition Scientist",
      organization: "Vertex Foods (Nepal)"
    },
    {
      name: "Ms. Lauran Shamie",
      role: "Registered Dietitian, Nutrition Advisor",
      organization: "Global"
    },
    {
      name: "Dr. Patrick Webb",
      role: "Nutrition Expert",
      organization: "Tufts University (Global)"
    },
    {
      name: "Dr. Shibani Ghosh",
      role: "Nutrition Expert",
      organization: "Cornell University (Global)"
    },
    {
      name: "Dr. Ahmed Kablan",
      role: "Expert",
      organization: "WICE (Global)"
    },
  ];

  const staff = [
    {
      name: "Ms. Sophiya Tamang",
      role: "CEO and Co-Founder"
    },
    {
      name: "Mr. Sudeep Bajracharya",
      role: "Co-Founder and Director of Growth and Innovation"
    },
    {
      name: "Mr. Mohit Rana",
      role: "Senior Culinary Consultant"
    },
    {
      name: "Ms. Pragya Khanal",
      role: "Operations Manager"
    },
    {
      name: "Mr. Sarbagya Shrestha",
      role: "Integrated Communications and AI Strategy Lead Consultant"
    },
    {
      name: "Mr. Abhitosh Dhungel",
      role: "Food Science Consultant"
    },
    {
      name: "Mr. Bharat Khadka",
      role: "Production Team"
    },
  ];

  return (
    <>
      {/* Section Header */}
      <section id="staff-board" className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02]" aria-hidden="true" />
        <Container>
          <div className="relative mx-auto max-w-7xl">
            {/* Header */}
            <div className="mb-24 text-center">
              <div className="mb-8 inline-block">
                <div className="rounded-full border-2 border-[#e5790e]/20 bg-gradient-to-r from-[#e5790e]/5 to-[#00a54f]/5 px-8 py-3">
                  <span className="text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#e5790e] to-[#00a54f] bg-clip-text text-transparent" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                    Our Team
                  </span>
                </div>
              </div>
              <h2 className="mb-8 text-5xl font-black leading-[1.1] tracking-tight text-gray-900 md:text-6xl lg:text-7xl" style={{ fontFamily: 'Gilroy, sans-serif', letterSpacing: '-0.02em' }}>
                Staff & Board
              </h2>
              <p className="mx-auto max-w-4xl text-2xl font-light leading-relaxed text-gray-600 md:text-3xl" style={{ fontFamily: 'Gilroy, sans-serif', letterSpacing: '-0.01em' }}>
                Meet the team behind building a circular food economy that turns waste into worth and belief into action.
              </p>
            </div>

            {/* Board Section */}
            <div className="mb-24">
              <div className="mb-12">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#e5790e] to-[#c85a00]" />
                  <h3 className="text-3xl font-black text-gray-900 md:text-4xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                    Board
                  </h3>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {boardMembers.map((member, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#e5790e]/20 to-[#e5790e]/5 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />
                    <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 group-hover:shadow-xl">
                      <div className="flex items-start gap-6">
                        {/* Avatar Placeholder */}
                        <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#e5790e] to-[#c85a00] text-2xl font-black text-white shadow-lg" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                          {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                          <h4 className="mb-2 text-xl font-black text-gray-900 md:text-2xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                            {member.name}
                          </h4>
                          <p className="text-base font-semibold text-[#e5790e]" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                            {member.role}
                          </p>
                        </div>
                      </div>

                      {/* Decorative Element */}
                      <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-[#e5790e]/5 blur-2xl" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experts Section */}
            <div className="mb-24">
              <div className="mb-12">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#00a54f] to-[#1acf1b]" />
                  <h3 className="text-3xl font-black text-gray-900 md:text-4xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                    Expert Advisors
                  </h3>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {experts.map((expert, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-[#00a54f]/20 to-[#1acf1b]/5 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-100" />
                    <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-500 group-hover:shadow-lg">
                      {/* Avatar */}
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#00a54f] to-[#1acf1b] text-xl font-black text-white shadow" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                        {expert.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </div>

                      {/* Info */}
                      <h4 className="mb-2 text-lg font-black text-gray-900" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                        {expert.name}
                      </h4>
                      <p className="mb-1 text-sm font-semibold text-[#00a54f]" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                        {expert.role}
                      </p>
                      <p className="text-xs text-gray-600" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                        {expert.organization}
                      </p>

                      {/* Decorative Element */}
                      <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-[#00a54f]/5 blur-xl" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Staff Section */}
            <div>
              <div className="mb-12">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#1acf1b] to-[#00a54f]" />
                  <h3 className="text-3xl font-black text-gray-900 md:text-4xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                    Our Team
                  </h3>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {staff.map((member, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-gray-200/50 to-gray-100/50 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-100" />
                    <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-500 group-hover:shadow-lg">
                      {/* Avatar */}
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-xl font-black text-white shadow" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                        {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </div>

                      {/* Info */}
                      <h4 className="mb-2 text-lg font-black text-gray-900" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                        {member.name}
                      </h4>
                      <p className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                        {member.role}
                      </p>

                      {/* Decorative Element */}
                      <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-gray-100 blur-xl" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA/Message */}
            <div className="mt-28">
              <div className="relative overflow-hidden rounded-3xl p-14 text-center text-white shadow-2xl md:p-20 lg:p-24">
                {/* Multi-layer Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e5790e] via-[#ff8c1a] to-[#00a54f]" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#c85a00]/50 via-transparent to-[#1acf1b]/30" aria-hidden="true" />
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" aria-hidden="true" />

                <div className="relative z-10">
                  <h3 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl" style={{ fontFamily: 'Gilroy, sans-serif', letterSpacing: '-0.02em' }}>
                    Join Our Journey
                  </h3>
                  <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed md:text-2xl" style={{ fontFamily: 'Gilroy, sans-serif', letterSpacing: '-0.01em' }}>
                    Together, we're building a circular food economy where waste becomes worth, and every harvest gets the second chance it deserves.
                  </p>
                </div>

                {/* Decorative Blur Elements */}
                <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1acf1b]/10 blur-3xl" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
