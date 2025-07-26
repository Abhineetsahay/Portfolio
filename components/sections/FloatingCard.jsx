import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const FloatingCard = ({ title, description }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl p-6 min-h-[200px] flex flex-col justify-center items-center text-white text-center hover:shadow-xl transition"
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1000,
      }}
      onMouseMove={(e) => {
        const rect = (e.target).getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        const posY = e.clientY - rect.top - rect.height / 2;
        x.set(posX);
        y.set(posY);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </motion.div>
  );
};
