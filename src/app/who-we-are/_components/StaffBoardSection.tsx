"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Linkedin } from "lucide-react";

export function StaffBoardSection() {
  const boardMembers = [
    {
      name: "Dr. Robin Shrestha",
      role: "Chairperson",
      image: "/images/team/board/robin.jpeg",
      category: "Board",
      linkedIn: "https://www.linkedin.com/in/robinshrestha/",
    },
    {
      name: "Ms. Sophiya Tamang",
      role: "Chief Executive Officer",
      image: "/images/team/board/sophiya.png",
      category: "Board",
      linkedIn: "https://www.linkedin.com/in/sophiya-tamang/",
    },
    {
      name: "Mr. Sudeep Bajracharya",
      role: "Director, Growth and Innovation",
      image: "/images/team/staff/sudeep.png",
      category: "Board",
      linkedIn: "https://www.linkedin.com/in/sudeep-bajracharya/",
    },
  ];

  const staff = [
    {
      name: "Ms. Sophiya Tamang",
      role: "Chief Executive Officer",
      image: "/images/team/staff/sophiya.png",
      linkedIn: "https://www.linkedin.com/in/sophiya-tamang/",
    },
    {
      name: "Mr. Sudeep Bajracharya",
      role: "Director of Growth and Innovation",
      image: "/images/team/staff/sudeep.png",
      linkedIn: "https://www.linkedin.com/in/sudeep-bajracharya/",
    },
    {
      name: "Mr. Mohit Rana",
      role: "Senior Culinary Consultant",
      image: "/images/team/staff/mohit.jpeg",
      linkedIn: "",
    },
    {
      name: "Er. Sarbagya Shrestha",
      role: "Integrated Communications and AI Strategy Lead Consultant",
      image: "/images/team/staff/sarbagya.jpeg",
      linkedIn: "https://www.linkedin.com/in/sarbagyashrestha/",
    },
    {
      name: "Ms. Pragya Khanal",
      role: "Operations Manager",
      image: "/images/team/staff/pragya.jpg",
      linkedIn: "",
    },

    {
      name: "Mr. Abhitosh Dhungel",
      role: "Food Science Consultant",
      image: "/images/team/staff/abhitosh.jpeg",
      linkedIn: "",
    },
    {
      name: "Mr. Bharat Khadka",
      role: "Production Team",
      image: "/images/team/staff/bharat.jpg",
      linkedIn: "",
    },
  ];

  const experts = [
    {
      name: "Dr. Atul Upadhyay",
      role: "Food and Nutrition Scientist",
      organization: "Vertex Foods (Nepal)",
      image: "/images/team/experts/atul.jpeg",
    },
    {
      name: "Dr. Patrick Webb",
      role: "Nutrition Expert",
      organization: "Tufts University (Global), Idea2Impact",
      image: "/images/team/experts/patrick.jpg",
    },
    {
      name: "Ms. Lauran Shamie",
      role: "Nutrition Advisor",
      organization: "Global",
      image: "/images/team/experts/lauran.jpg",
    },

    {
      name: "Dr. Sapna Adhikari",
      role: "Nutrition Expert",
      organization: "Tufts University (Global), Idea2Impact",
      image: "/images/team/experts/sapna.jpg",
    },
    {
      name: "Dr. Shibani Ghosh",
      role: "Nutrition Expert",
      organization: "Cornell University (Global), Idea2Impact",
      image: "/images/team/experts/shibanii.jpg",
    },
    {
      name: "Dr. Ahmed Kablan",
      role: "Expert",
      organization: "WICE (Global), Idea2Impact",
      image: "/images/team/experts/ahmed.jpeg",
    },
    {
      name: "Giacomo Zanello",
      role: "Policy and Development",
      organization: "University of Reading, Idea2Impact",
      image: "/images/team/experts/giacomo.jpg",
    },
  ];

  return (
    <>
      <section
        style={{ paddingTop: "100px" }}
        id="staff-board"
        className="relative overflow-hidden bg-white py-20 md:py-28"
      >
        {/* Subtle Background */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.015]"
          aria-hidden="true"
        />

        <Container>
          <div className="relative mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="mb-20 text-center">
              <div className="mb-6 inline-block">
                <div className="rounded-full border border-[#e5790e]/20 bg-white px-6 py-2.5 shadow-sm">
                  <span
                    className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5790e]"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Our Team
                  </span>
                </div>
              </div>
              <h2
                className="mb-6 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                Leadership & Expertise
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-gray-600 md:text-xl"
                  style={{
                    fontFamily: "Gilroy, sans-serif",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Meet the visionaries, innovators, and experts building a
                  circular food economy that transforms waste into nourishment.
                </p>
              </div>
            </div>

            {/* Board of Directors Section */}
            <div className="mb-24">
              <div className="mb-10 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#e5790e]/10 to-[#c85a00]/10 blur-xl" />
                  <h3
                    className="relative text-3xl font-black text-gray-900 md:text-4xl"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Founders
                  </h3>
                </div>
              </div>

              <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
                {boardMembers.map((member, index) => (
                  <div key={index} className="group relative h-full">
                    {/* Hover glow effect */}
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#e5790e]/20 to-[#c85a00]/20 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

                    {/* Card */}
                    <div className="relative flex h-full min-h-[380px] flex-col items-center justify-start overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-500 group-hover:shadow-2xl md:p-8">
                      {/* Image */}
                      <div className="mb-6 flex-shrink-0 overflow-hidden rounded-full border-4 border-gray-100 shadow-xl transition-all duration-500 group-hover:border-[#e5790e]/30 group-hover:shadow-2xl">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-32 w-32 object-cover transition-transform duration-500 group-hover:scale-110 md:h-40 md:w-40"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex flex-1 flex-col items-center justify-start text-center">
                        <h4
                          className="mb-2 text-2xl font-black leading-tight text-gray-900 md:text-3xl"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          {member.name}
                        </h4>
                        <p
                          className="text-base font-semibold leading-relaxed text-[#e5790e] md:text-lg"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          {member.role}
                        </p>
                      </div>

                      {/* LinkedIn Button */}
                      <div className="mt-4">
                        {member.linkedIn ? (
                          <a
                            href={member.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center rounded-full bg-[#0077b5] p-2 text-white transition-all duration-300 hover:bg-[#005582] hover:shadow-lg"
                          >
                            <Linkedin size={20} />
                          </a>
                        ) : (
                          <button
                            disabled
                            className="flex cursor-not-allowed items-center justify-center rounded-full bg-gray-300 p-2 text-gray-500 opacity-50"
                          >
                            <Linkedin size={20} />
                          </button>
                        )}
                      </div>

                      {/* Decorative corner accent */}
                      <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-[#e5790e] opacity-20" />
                      <div className="absolute left-4 bottom-4 h-2 w-2 rounded-full bg-[#00a54f] opacity-20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="mb-24 flex items-center justify-center">
              <div className="h-px w-64 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </div>

            {/* Staff Section */}
            <div className="mb-24">
              <div className="mb-10 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#00a54f]/10 to-[#1acf1b]/10 blur-xl" />
                  <h3
                    className="relative text-3xl font-black text-gray-900 md:text-4xl"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Our Team
                  </h3>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {staff.map((member, index) => (
                  <div key={index} className="group relative h-full">
                    {/* Hover effect */}
                    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-[#00a54f]/20 to-[#1acf1b]/20 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-100" />

                    {/* Card */}
                    <div className="relative flex h-full min-h-[280px] flex-col items-center justify-start overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-500 group-hover:shadow-xl">
                      {/* Image */}
                      <div className="mb-5 flex-shrink-0 overflow-hidden rounded-full border-2 border-gray-100 shadow-lg transition-all duration-500 group-hover:border-[#00a54f]/30">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-24 w-24 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex flex-1 flex-col items-center justify-start text-center">
                        <h4
                          className="mb-2 text-lg font-black leading-tight text-gray-900"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          {member.name}
                        </h4>
                        <p
                          className="text-sm font-medium leading-relaxed text-gray-600"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          {member.role}
                        </p>
                      </div>

                      {/* LinkedIn Button */}
                      <div className="mt-3">
                        {member.linkedIn ? (
                          <a
                            href={member.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center rounded-full bg-[#0077b5] p-2 text-white transition-all duration-300 hover:bg-[#005582] hover:shadow-lg"
                          >
                            <Linkedin size={18} />
                          </a>
                        ) : (
                          <button
                            disabled
                            className="flex cursor-not-allowed items-center justify-center rounded-full bg-gray-300 p-2 text-gray-500 opacity-50"
                          >
                            <Linkedin size={18} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="mb-24 flex items-center justify-center">
              <div className="h-px w-64 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </div>

            {/* Expert Advisors Section */}
            <div className="mb-16">
              <div className="mb-10 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#1acf1b]/10 to-[#00a54f]/10 blur-xl" />
                  <h3
                    className="relative text-3xl font-black text-gray-900 md:text-4xl"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Expert Advisors
                  </h3>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap", // allow multiple rows
                  justifyContent: "center",
                  gap: "30px",
                }}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {experts.map((expert, index) => (
                  <div key={index} className="group relative h-full">
                    {/* Hover effect */}
                    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-gray-200/50 to-gray-100/50 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-100" />

                    {/* Card */}
                    <div className="relative flex h-full min-h-[260px] flex-col items-center justify-start overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-500 group-hover:shadow-xl">
                      {/* Image */}
                      <div className="mb-4 flex-shrink-0 overflow-hidden rounded-full border-2 border-gray-100 shadow-lg transition-all duration-500 group-hover:border-gray-300">
                        <img
                          src={expert.image}
                          alt={expert.name}
                          className="h-20 w-20 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex flex-1 flex-col items-center justify-start text-center">
                        <h4
                          className="mb-2 text-base font-black leading-tight text-gray-900"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          {expert.name}
                        </h4>
                        <p
                          className="mb-1 text-sm font-semibold leading-relaxed text-gray-700"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          {expert.role}
                        </p>
                        <p
                          className="text-xs leading-relaxed text-gray-500"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          {expert.organization}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Message */}
          </div>
        </Container>
      </section>
    </>
  );
}
