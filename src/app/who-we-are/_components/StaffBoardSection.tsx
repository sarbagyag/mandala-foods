import React from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/Section";

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
      name: "Salina Giri",
      role: "Stewardship and Donor Relations, Global",
      organization: "Mandala Foods",
      image: "/images/team/experts/salina-2.jpeg",
    },
    // {
    //   name: "Er. Sarbagya Shrestha",
    //   role: "Integrated Communications and AI Strategy Lead Consultant",
    //   image: "/images/team/staff/sarbagya_no_glare.png",
    //   linkedIn: "https://www.linkedin.com/in/sarbagyashrestha/",
    // },
    {
      name: "Ms. Pragya Khanal",
      role: "Operations Manager",
      image: "/images/team/staff/pragya_trans.png",
      linkedIn: "https://www.linkedin.com/in/pragya-khanal-8b6b3a272/",
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
    // {
    //   name: "Dr. Patrick Webb",
    //   role: "Food Systems for Nutrition",
    //   organization: "Tufts University (Global), Idea2Impact",
    //   image: "/images/team/experts/patrick.jpg",
    // },
    {
      name: "Ms. Lauran Shamie",
      role: "Nutrition Advisor",
      organization: "Global",
      image: "/images/team/experts/lauran.jpg",
    },

    {
      name: "Dr. Sapna Adhikari",
      role: "MD",
      organization: "Idea2Impact",
      image: "/images/team/experts/sapna.jpg",
    },

    // {
    //   name: "Dr. Shibani Ghosh",
    //   role: "Nutrition Expert",
    //   organization: "Cornell University (Global), Idea2Impact",
    //   image: "/images/team/experts/shibanii.jpg",
    // },
    {
      name: "Dr. Ahmed Kablan",
      role: "Expert",
      organization: "WICE (Global), Idea2Impact",
      image: "/images/team/experts/ahmed.jpeg",
    },
    // {
    //   name: "Giacomo Zanello",
    //   role: "Policy and Development",
    //   organization: "University of Reading, Idea2Impact",
    //   image: "/images/team/experts/giacomo.jpg",
    // },
  ];

  return (
    <section id="staff-board" className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Our team"
          title="Leadership & expertise"
          lead="The people building a circular food economy that transforms waste into nourishment."
        />

        <TeamGroup title="Founders">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((m) => (
              <li key={m.name}>
                <PersonCard name={m.name} role={m.role} image={m.image} linkedIn={m.linkedIn} size="lg" />
              </li>
            ))}
          </ul>
        </TeamGroup>

        <TeamGroup title="Our team">
          <ul className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {staff.map((m) => (
              <li key={m.name}>
                <PersonCard name={m.name} role={m.role} image={m.image} linkedIn={m.linkedIn} />
              </li>
            ))}
          </ul>
        </TeamGroup>

        <TeamGroup title="Expert advisors" last>
          <ul className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {experts.map((m) => (
              <li key={m.name}>
                <PersonCard name={m.name} role={m.role} organization={m.organization} image={m.image} />
              </li>
            ))}
          </ul>
        </TeamGroup>
      </Container>
    </section>
  );
}

function TeamGroup({ title, children, last }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={last ? "" : "mb-20 md:mb-24"}>
      <h3 className="mb-8 border-b border-line pb-4 text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
        {title}
      </h3>
      {children}
    </div>
  );
}

function PersonCard({
  name,
  role,
  organization,
  image,
  linkedIn,
  size = "md",
}: {
  name: string;
  role: string;
  organization?: string;
  image: string;
  linkedIn?: string;
  size?: "md" | "lg";
}) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-mist">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
          sizes={size === "lg" ? "(max-width: 640px) 100vw, 33vw" : "(max-width: 768px) 50vw, 25vw"}
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h4 className={size === "lg" ? "text-xl font-bold tracking-[-0.02em] text-ink" : "text-base font-bold leading-snug text-ink"}>
            {name}
          </h4>
          <p className={size === "lg" ? "mt-1 text-[0.95rem] font-semibold text-accent" : "mt-1 text-sm leading-snug text-gray-600"}>
            {role}
          </p>
          {organization && <p className="mt-1 text-xs text-gray-500">{organization}</p>}
        </div>
        {linkedIn && (
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-gray-500 transition-colors hover:border-[#0a66c2] hover:bg-[#0a66c2] hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}
