"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "60s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li key={idx} className="shrink-0">
            <Card
              className={cn(
                "w-[300px] md:w-[400px] max-w-full p-5 bg-[#111111] text-white border-l-4 shadow-lg transition-transform duration-200",
                "hover:scale-[1.02] hover:border-blue-500"
              )}
            >
              <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
              {React.isValidElement(item.quote) ? (
                item.quote
              ) : (
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.title || "No description"}
                </p>
              )}
              {item.title && (
                <p className="text-xs mt-2 text-gray-500">{item.title}</p>
              )}
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};
