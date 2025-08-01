"use client";

import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Connect from "@/components/sections/Connect";

export default function Main() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10 scroll-smooth">
        <Home />
        <About />
        <TechStack />
        <Projects />
        <Achievements />
        <Connect/>
      </div>
    </div>
  );
}
