"use client";

import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import ParticlesBackground from "@/components/ui/ParticlesBackground"; 
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Main() {
  return (
    <div className="relative overflow-hidden">
      <ParticlesBackground /> 
      <BackgroundBeams/>
      <div className="relative z-10">
        <Home />
        <About />
        <TechStack />
        <Projects />
        {/* <Achievements /> */}
      </div>
    </div>
  );
}
