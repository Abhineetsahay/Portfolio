"use client";

import { Github, Linkedin, Code, Activity, BrainCircuit, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    url: "https://www.linkedin.com/in/abhineet-sahay/",
  },
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5" />,
    url: "https://github.com/Abhineetsahay",
  },
  {
    name: "Kaggle",
    icon: <BrainCircuit className="h-5 w-5" />,
    url: "https://kaggle.com/abhineetsahay",
  },
  {
    name: "LeetCode",
    icon: <Code className="h-5 w-5" />,
    url: "https://leetcode.com/u/sahayabhineet",
  },
  {
    name: "CodeChef",
    icon: <Trophy className="h-5 w-5" />,
    url: "https://www.codechef.com/users/sahayabhineet1",
  },
  {
    name: "Codeforces",
    icon: <Activity className="h-5 w-5" />,
    url: "https://codeforces.com/profile/__abhineet__",
  },
];

export default function Connect() {
  return (
    <section className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    id="connect">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 relative inline-block">
        Connect with me
        <span className="absolute left-0 -bottom-1 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socialLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-3 p-4 bg-[#111111] border border-gray-800 rounded-xl text-white hover:border-blue-500 hover:shadow-lg transition",
              "hover:scale-105"
            )}
          >
            {link.icon}
            <span className="text-md font-medium">{link.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
