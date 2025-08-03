"use client";
import { motion } from "framer-motion";
import * as ProjectPics from "@/public/projects/index";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projectCategories = [
    {
      category: "Web Development",
      projects: [
        {
          title: "Donum Website",
          description: `Designed and developed a responsive e-commerce platform for a campus-based startup. 
          Helped the startup to increase the number of customers by <strong>15%</strong>.
          Used Firebase for proper authorization and authentication.`,
          techStack: [
            "Next.js",
            "TypeScript",
            "Redux",
            "Tailwind CSS",
            "Framer Motion",
            "Firebase",
          ],
          image: ProjectPics.Donum?.src,
          github: "https://github.com/Abhineetsahay",
          live: "https://thedonumstore.netlify.app",
        },
        {
          title: "Space Blogging Platform",
          description: `Created a full-stack blogging platform with secure Google Sign-In using Firebase Authentication.
          Tested with <strong>10</strong> users and updated the website based on their feedback.`,
          techStack: [
            "React",
            "Tailwind CSS",
            "Firebase",
            "Express.js",
            "OAuth 2.0",
            "MongoDB",
            "Node.js",
          ],
          image: ProjectPics.SpaceBlog?.src,
          github: "https://github.com/Abhineetsahay/Space-Blog",
          live: "https://space-blog-phi.vercel.app/",
        },
        {
          title: "Space Exploration",
          description: `Created an immersive web platform using NASA's open APIs to let users explore space-related images, rovers, and daily astronomy content. Implemented search and filtering with real-time data fetching, enhancing educational engagement.`,
          techStack: [
            "React",
            "Tailwind CSS",
            "Firebase",
            "Express.js",
            "OAuth 2.0",
            "MongoDB",
            "Node.js",
          ],
          image: ProjectPics.SpaceExplorer?.src,
          github: "https://github.com/Abhineetsahay/Space-Explorer",
          live: "https://space-explorer-omega.vercel.app/",
        },
      ],
    },
    {
      category: "Machine Learning",
      projects: [
        {
          title: "Customer Churn Prediction",
          description: `Built a machine learning model to predict customer churn using logistic regression and decision trees.
          Achieved an accuracy of <strong>80%</strong> using logistic regression and <strong>74%</strong> via decision trees.`,
          techStack: [
            "Python",
            "scikit-learn",
            "Pandas",
            "Matplotlib",
            "Seaborn",
          ],
          github: "https://github.com/Abhineetsahay/ChurnPredictor",
          live: "",
        },
        {
          title: "Loan Approval Predictor",
          description: `Developed a predictive model to classify whether a loan should be approved based on user attributes. 
          Achieved an accuracy of <strong>76%</strong> using logistic regression.`,
          techStack: [
            "Python",
            "scikit-learn",
            "Pandas",
            "Matplotlib",
            "Seaborn",
          ],
          github: "https://github.com/Abhineetsahay/Loan-Predictor",
          live: "",
        },
        {
          title: "Titanic Survival Classifier",
          description: `Solved the classic Titanic dataset challenge by building a Random Forest model to predict survival. 
          Achieved <strong>76%</strong> accuracy through hyperparameter tuning.`,
          techStack: [
            "Python",
            "scikit-learn",
            "Pandas",
            "Matplotlib",
            "Seaborn",
          ],
          github: "https://github.com/Abhineetsahay/Titanic",
          live: "",
        },
      ],
    },
    {
      category: "Data Structures & Algorithms",
      projects: [
        {
          title: "DSA from Scratch",
          description: `Built an ongoing repository implementing major data structures and algorithms in C++.
          Still expanding it as I explore new topics like trees, graphs, and dynamic programming.`,
          techStack: ["C++", "STL", "GitHub"],
          github: "https://github.com/Abhineetsahay/DataStructures",
          live: "",
        },
        {
          title: "CSES Problem List Tracker",
          description: `Maintaining a categorized list of solved problems from the CSES Problem Set.
          Solved problems across Introductory problems, graphs, sorting and searching.`,
          techStack: ["C++", "STL", "GitHub"],
          github: "https://github.com/Abhineetsahay/CSES",
          live: "",
        },
      ],
    },
  ];

  return (
    <section
      className="relative min-h-screen w-full px-4 py-20 flex flex-col items-center justify-center"
      id="projects"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Projects
      </h2>
      <div className="w-full max-w-6xl flex flex-col gap-16">
        {projectCategories.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-left border-l-4 border-blue-500 pl-4">
              {cat.category}
            </h3>
            <div className="grid gap-8 sm:grid-cols-2">
              {cat.projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl shadow-lg p-6 flex flex-col h-full border border-gray-700 hover:border-blue-500 transition-colors duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-white">
                      {project.title}
                    </h4>
                    <div className="flex gap-2">
                      {project.github && (
                        <Link href={project.github} passHref legacyBehavior>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300"
                            title="GitHub"
                          >
                            <span
                              style={{
                                display: "inline-block",
                                width: 20,
                                height: 20,
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width={20}
                                height={20}
                                style={{ display: "block" }}
                              >
                                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                              </svg>
                            </span>
                          </a>
                        </Link>
                      )}
                      {project.live && (
                        <Link href={project.live} passHref legacyBehavior>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:text-green-300"
                            title="Live Demo"
                          >
                            <span
                              style={{
                                display: "inline-block",
                                width: 20,
                                height: 20,
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width={20}
                                height={20}
                                style={{ display: "block" }}
                              >
                                <path d="M14 3v2h3.59L7.05 15.54l1.41 1.41L19 6.41V10h2V3z" />
                                <path d="M5 5v14h14v-7h-2v5H7V7h5V5z" />
                              </svg>
                            </span>
                          </a>
                        </Link>
                      )}
                    </div>
                  </div>
                  {
                    <div className="w-full h-[200px] rounded-lg overflow-hidden mb-4">
                      <Image
                        src={
                          project.image ||
                          "https://placehold.co/200/png?text=Image Not available"
                        }
                        alt={project.title}
                        width={240}
                        height={240}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  }

                  <p
                    className="text-gray-300 text-sm mb-4 whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-800/60 text-blue-200 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
