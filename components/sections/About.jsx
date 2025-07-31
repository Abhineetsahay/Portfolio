"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

const SectionTitle = ({ title }) => (
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 text-center">
    <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
      {title}
    </span>
  </h2>
);

const sections = [
  {
    title: "About Me",
    description:
      "Hi, I’m Abhineet Sahay, a 3rd-year Computer Science student at KIIT University.\nI’m passionate about building meaningful and impactful software solutions.\nI’m constantly striving to improve my skills as a future software developer.",
    plain: true,
  },
  {
    title: "About My Tech Stack",
    description:
      "My core expertise lies in the MERN stack with TypeScript.\nI enjoy building full-stack applications.\nI’m also exploring Machine Learning and Competitive Programming to sharpen my problem-solving skills.",
  },
  {
    title: "Non-Tech Interests",
    description:
      "Outside of tech, I love listening to music and watching cricket.\nI also enjoy exploring historical topics, which help me stay balanced and inspired.",
  },
];

export default function About() {
  return (
    <section className="min-h-screen w-full px-4 py-20 flex flex-col items-center justify-center">
       <SectionTitle title="Who I am?" />
      <div className="w-full max-w-6xl mx-auto flex justify-center px-4">

        <div className="w-full">
          <HoverEffect items={sections} className="gap-8" />
        </div>
      </div>
    </section>
  );
}
