import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
   <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14 py-10", className)}>

      {items.map((item, idx) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        return (
          <motion.div
            key={item.title}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 14,
              delay: idx * 0.2,
            }}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-white/20 dark:bg-slate-800/60 block rounded-3xl backdrop-blur-sm"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>
                {item.description.split("\n").map((line, i) => (
                  <p key={i} className="mb-2">
                    {line}
                  </p>
                ))}
              </CardDescription>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-3xl w-full h-full min-h-[340px] p-0 overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-xl transition-transform duration-200 group-hover:scale-[1.03] group-hover:shadow-xl relative z-20",
        className
      )}
    >
      <div className="relative z-50 flex flex-col justify-between h-full">
        <div className="p-6 flex flex-col gap-2">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 font-bold tracking-wide text-lg mb-2",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <div
      className={cn(
        "text-zinc-300 tracking-wide leading-relaxed text-base",
        className
      )}
    >
      {children}
    </div>
  );
};
