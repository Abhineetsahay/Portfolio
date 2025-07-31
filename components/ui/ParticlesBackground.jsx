"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "#000000" } },
        fpsLimit: 60,
        particles: {
          number: {
            value: 300, // dense stars
            density: {
              enable: true,
              area: 1200,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0.3,
              sync: false,
            },
          },
          size: {
            value: { min: 0.3, max: 1.2 },
            random: true,
          },
          move: {
            enable: true,
            speed: 0.05,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
