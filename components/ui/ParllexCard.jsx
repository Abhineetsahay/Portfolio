"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ParallaxCards({ content }) {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints =
      cardLength === 1
        ? [0]
        : content.map((_, index) => index / (cardLength - 1));
    const closest = breakpoints.reduce((acc, point, i) => {
      const dist = Math.abs(latest - point);
      return dist < Math.abs(latest - breakpoints[acc]) ? i : acc;
    }, 0);
    setActiveCard(closest);
  });

  return (
    <section
      ref={ref}
      className="relative w-full"
      style={{ minHeight: `${content.length * 100}vh` }}
    >
      {/* Sticky Layer */}
      <motion.div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="flex flex-col justify-center gap-10 max-w-7xl w-full items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight  text-center">
            Who I Am?
          </h2>
          <div className="flex-1 max-w-2xl">
            {content.map((item, i) => (
              <motion.div
                key={i}
                className={cn(
                  "h-[80vh] flex flex-col justify-center transition-opacity duration-700",
                  activeCard === i
                    ? "opacity-100 relative pointer-events-auto"
                    : "opacity-0 absolute pointer-events-none"
                )}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: activeCard === i ? 1 : 0,
                    y: activeCard === i ? 0 : 50,
                  }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="text-4xl font-bold text-white"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeCard === i ? 1 : 0,
                    y: activeCard === i ? 0 : 20,
                  }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-6 text-lg text-slate-300"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
