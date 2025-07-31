"use client";

import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BackgroundBeams } from "../ui/background-beams";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 min-h-screen text-white text-center overflow-hidden"
    >
      <BackgroundBeams />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-lg relative z-10"
      >
        I'm Abhineet Sahay
      </motion.h2>

      <div className="w-full max-w-2xl mt-4 px-2 sm:px-4 relative z-10">
        <TextGenerateEffect words="MERN-Stack and Machine Learning Developer | Competitive Programmer " />
      </div>

      <motion.div
        className="w-32 sm:w-48 md:w-64 lg:w-72 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-6 shadow-lg relative z-10"
        initial={{ opacity: 0, x: -30, y: 10, scale: 0.9 }}
        animate={
          isInView
            ? { opacity: 1, x: 0, y: 0, scale: 1 }
            : { opacity: 0, x: -30, y: 10, scale: 0.9 }
        }
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}
