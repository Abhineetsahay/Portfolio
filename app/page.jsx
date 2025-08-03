"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Connect from "@/components/sections/Connect";

export default function Main() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 h-1 w-full origin-left z-[9999] bg-white"
      />

      <div className="relative z-10 scroll-smooth">
        <Home />
        <About />
        <TechStack />
        <Projects />
        <Achievements />
        <Connect />
      </div>
    </div>
  );
}
