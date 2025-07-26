"use client";

import { motion } from "framer-motion";
import profileImage from "@/public/profile.png";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const Section = ({ children }) => (
  <section className="h-screen w-full flex items-center justify-center px-6 py-20">
    {children}
  </section>
);

const SectionTitle = ({ title }) => (
  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
    {title}
    <span className="block h-1 w-16 bg-gradient-to-r from-teal-400 to-blue-500 mt-2 mx-auto rounded-full" />
  </h2>
);

export default function About() {
  return (
    <main className="relative bg-black text-white overflow-y-scroll snap-y snap-mandatory h-screen w-screen">
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
        <BackgroundGradient className="p-1 rounded-2xl">
          <Image
            src={profileImage}
            alt="Abhineet Profile"
            width={300}
            height={300}
            className="rounded-2xl object-cover"
          />
        </BackgroundGradient>
      </div>

      <div className="ml-0 md:ml-[350px]">
        <section className="snap-start">
          <Section>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <SectionTitle title="About Me" />
              <p className="text-lg leading-relaxed text-gray-300">
                Hi, I’m <span className="text-white font-semibold">Abhineet Sahay</span>, a 3rd-year CSE student at KIIT. I enjoy building full-stack web apps and exploring ML models. I’m curious, consistent, and always up for a challenge.
              </p>
            </div>
          </Section>
        </section>

        <section className="snap-start">
          <Section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl text-center bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md"
            >
              <SectionTitle title="MERN Stack" />
              <p className="text-lg text-gray-300">
                I build full-stack applications using MongoDB, Express, React, and Node.js. I also love working with Firebase and Tailwind CSS.
              </p>
            </motion.div>
          </Section>
        </section>

        <section className="snap-start">
          <Section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl text-center bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md"
            >
              <SectionTitle title="Machine Learning" />
              <p className="text-lg text-gray-300">
                I'm exploring core ML concepts like regression, decision trees, and regularization to build smarter apps and systems.
              </p>
            </motion.div>
          </Section>
        </section>

        <section className="snap-start">
          <Section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl text-center bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md"
            >
              <SectionTitle title="Competitive Programming" />
              <p className="text-lg text-gray-300">
                I practice problem-solving on platforms like Codeforces and Leetcode, using C++ to sharpen my logic and algorithms.
              </p>
            </motion.div>
          </Section>
        </section>
      </div>
    </main>
  );
}