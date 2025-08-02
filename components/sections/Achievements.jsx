"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Conducted a doubt session for DSA with 65 participants attending",
  },
  {
    title: "Hacktober Contributor",
    description:
      "Successfully merged 4 pull requests in Hacktoberfest.",
  },
  {
    title: "2⭐ on CodeChef max rating: <strong>1519</strong>",
  },
  {
    title:
      '<span class="text-[#39ff14]">Pupil</span> on Codeforces — max rating: <strong>1232</strong>',
  },
  {
    title: "450+ DSA questions in LeetCode",
  },
];

export default function Achievements() {
  return (
    <section className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 relative inline-block">
        Achievements
        <span className="absolute left-0 -bottom-1 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
      </h2>

      <div className="space-y-6">
        {achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card
              className={cn(
                "p-5 bg-[#111111] text-white border-l-4 shadow-lg transition-transform duration-200",
                "hover:scale-[1.02] hover:border-blue-500"
              )}
            >
              <h3
                className="text-xl font-semibold mb-1"
                dangerouslySetInnerHTML={{ __html: ach.title }}
              ></h3>
              {ach.description && (
                <p className="text-sm text-gray-400">{ach.description}</p>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
