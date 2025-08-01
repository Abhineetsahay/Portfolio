"use client";

import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BackgroundBeams } from "../ui/background-beams";
import Link from "next/link";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 min-h-screen text-white text-center overflow-hidden"
      style={{ willChange: 'transform, opacity' }}
    >
      {/* <BackgroundBeams /> */}

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-lg relative z-10"
        style={{ willChange: 'transform, opacity' }}
      >
        I'm Abhineet Sahay
      </motion.h2>

      <div className="w-full max-w-2xl mt-4 px-2 sm:px-4 relative z-10">
        <TextGenerateEffect words="Full-Stack Developer | 3rd-Year CSE @ KIIT | Building Scalable Web & ML Projects" />
      </div>

      <div className="relative z-10 mt-8 flex items-center justify-center w-full max-w-xl">
        
        <motion.div
          className="h-1 w-1/2 bg-gradient-to-l from-blue-500 to-purple-500 rounded-full rounded-r-none"
          style={{ originX: 1, willChange: 'transform, opacity' }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
       <motion.div
          className="h-1 w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full rounded-l-none"
          style={{ originX: 0, willChange: 'transform, opacity' }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>

      <motion.div
        className="mt-10 relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        whileHover={{ scale: 1.05 }}
        style={{ willChange: 'transform, opacity' }}
        // transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Link
          href="https://drive.google.com/file/d/1jY7sm5d8E5Ye0IarQxyRxX-sIgSg8Lx7/view"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg transition"
        >
          View Resume
        </Link>
      </motion.div>
    </div>
  );
}
