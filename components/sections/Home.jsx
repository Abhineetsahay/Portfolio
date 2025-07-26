"use client";

import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";
import { BackgroundBeams } from "../ui/background-beams";
 
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-4 h-screen text-white">
      <BackgroundBeams />
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative text-center text-transparent bg-clip-text text-white  text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg"
      >
        I'm Abhineet Sahay
      </motion.h2>

      <TextGenerateEffect words="MERN-Stack Developer | Competitive Programmer | Machine Learning Enthusiast" />

      <motion.div
        className="relative w-72 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4 shadow-lg"
        initial={{ opacity: 0, x: -30, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>
    </div>
  );
}
