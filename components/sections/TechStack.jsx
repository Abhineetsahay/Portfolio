
"use client";

import * as TechStackIcons from "@/public/TechStack";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function TechStack() {
  const techCategories = [
    {
      category: "Languages",
      items: [
        { name: "C", icon: TechStackIcons.C.src },
        { name: "C++", icon: TechStackIcons.Cpp.src },
        { name: "Java", icon: TechStackIcons.JAVA.src },
        { name: "JavaScript", icon: TechStackIcons.JavaScript.src },
        { name: "TypeScript", icon: TechStackIcons.Typescript.src },
        { name: "Python", icon: TechStackIcons.Python.src },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: TechStackIcons.HTML.src },
        { name: "CSS3", icon: TechStackIcons.CSS.src },
        { name: "React", icon: TechStackIcons.ReactJs.src },
        { name: "Next.js", icon: TechStackIcons.NextJs.src },
        { name: "Redux", icon: TechStackIcons.Redux.src },
        { name: "Tailwind CSS", icon: TechStackIcons.Tailwind.src },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: TechStackIcons.NodeJs.src },
        { name: "Express.js", icon: TechStackIcons.ExpressJs.src },
        { name: "Socket.io", icon: TechStackIcons.Socket.src },
        { name: "JWT", icon: TechStackIcons.JWT.src },
      ],
    }, {
      category: "Machine learning",
      items: [
        { name: "NumPy", icon: TechStackIcons.Numpy.src },
        { name: "Pandas", icon: TechStackIcons.Pandas.src},
        { name: "Matplotlib", icon: TechStackIcons.Matplotlib.src },
        { name: "Scikit-Learn", icon: TechStackIcons.ScikitLearn.src },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: TechStackIcons.MongoDB.src },
        { name: "MySQL", icon: TechStackIcons.MySQL.src },
        { name: "Firebase", icon: TechStackIcons.Firebase.src },
        { name: "Prisma", icon: TechStackIcons.Prisma.src },
      ],
    },
    {
      category: "Dev Tools & Deployment",
      items: [
        { name: "Git", icon: TechStackIcons.Git.src },
        { name: "GitHub", icon: TechStackIcons.GitHub.src },
        { name: "Postman", icon: TechStackIcons.PostMan.src },
        { name: "Docker", icon: TechStackIcons.Docker.src },
        { name: "Netlify", icon: TechStackIcons.Netlify.src },
        { name: "Vercel", icon: TechStackIcons.Vercel.src },
      ],
    }
  ];

  return (
    <section className="w-full py-10" id="techstack">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Tech Stack
      </h2>

      <div className="max-w-7xl mx-auto space-y-12 px-4">
        {techCategories.map((group, idx) => (
          <div key={group.category} className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-center">
              {group.category}
            </h3>
            <InfiniteMovingCards
              items={group.items.slice(0, 6).map((tech) => ({
                name: tech.name,
                quote: (
                  <div className="flex items-center gap-3">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      height={128}
                      width={128}
                      className="w-6 h-6 object-contain"
                      loading="lazy"
                    />
                  </div>
                ),
                title: "",
              }))}
              direction={idx % 2 === 0 ? "left" : "right"}
              speed="normal"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
