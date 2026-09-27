import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import { motion, useInView } from "framer-motion";
import ScrollFloat from "../../ReactBitsAnimations/ScrollFloat/ScrollFloat";
import About_ from "./About_";

const About = () => {
  const technologies = [
    { icon: "skill-icons:react-dark", label: "React" },
    { icon: "skill-icons:nextjs-dark", label: "Next.js" },
    { icon: "skill-icons:javascript", label: "JavaScript" },
    { icon: "skill-icons:typescript", label: "TypeScript" },
    { icon: "devicon:java", label: "Java" },
    { icon: "vscode-icons:file-type-node", label: "Node.js" },
    { icon: "simple-icons:express", label: "Express.js" },
    { icon: "devicon:mongodb-wordmark", label: "MongoDB" },
    { icon: "vscode-icons:file-type-sql", label: "SQL" },
    { icon: "skill-icons:html", label: "HTML" },
    { icon: "skill-icons:css", label: "CSS" },
    { icon: "skill-icons:tailwindcss-light", label: "Tailwind CSS" },
    { icon: "ri:brain-line", label: "LLM Integration" },
    { icon: "skill-icons:github-light", label: "GitHub" },
    { icon: "simple-icons:meta", label: "Groq LLaMA 3.1" },
    { icon: "carbon:speech-to-text", label: "Whisper v3" },
    { icon: "simple-icons:n8n", label: "n8n" },
    { icon: "devicon:git", label: "Git" },
    { icon: "vscode-icons:file-type-vscode", label: "VS Code" },
  ];

  return (
    <>
      <About_ />
      <div className=" bg-[#1e2d2a] flex flex-col gap-6 pt-3 ml-0 mr-0 text-[#ffffff] ">
        <div className="tool-technologies px-[2em] flex flex-col">
          <h1 className="text-3xl font-semibold pb-[2px] font-robotoCondensed underline text-[#e356ab]">
            Tools and technologies
          </h1>
          <p className="px-[14px]">
            I use a variety of tools and technologies to build responsive,
            efficient, and scalable web applications. From coding languages to
            development frameworks, these are the key components I rely on to
            create great user experiences.
          </p>

          <motion.div className="iconsdiv flex gap-[1vw] flex-wrap justify-evenly pt-4">
            {technologies.map((tech, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    rotateY: index % 2 === 0 ? -180 : 180,
                  }}
                  whileInView={{
                    opacity: 1,
                    rotateY: 0,
                    transition: {
                      duration: 0.8,
                      delay: index * 0.05,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{ once: false, amount: 0.4 }}
                  whileHover={{
                    x: [0, -2, 2, -2, 2, 0],
                    transition: {
                      duration: 0.4,
                      repeat: Infinity,
                    },
                  }}
                  className="flex gap-[0.5em] justify-center items-center py-2 px-3"
                >
                  <Icon icon={tech.icon} width="36" height="36" />
                  <h1 className="text-[1em]">{tech.label}</h1>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="coding-profile ml-1 pb-2 px-[2rem]">
          <h1 className="text-3xl font-semibold font-robotoCondensed underline text-blue-400">
            Problem Solving
          </h1>
          <p className="pt-2 text-base">
            Solved <b className="text-[#64FCD9]">300+</b> Data Structures and Algorithms problems across arrays, recursion, trees, graphs, binary search, BFS, DFS, and dynamic programming.
          </p>
          <p className="pt-1 text-sm text-gray-300">
            Practiced structured algorithmic problem solving across LeetCode and GeeksForGeeks.
          </p>
          <div className="button pt-4 flex flex-wrap gap-3">
            <a
              href="https://leetcode.com/u/purvanshujindal10/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="text-white bg-gradient-to-br from-yellow-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                LeetCode
              </button>
            </a>
            <a
              href="https://www.geeksforgeeks.org/profile/purvanshu09o8?tab=activity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="text-white bg-gradient-to-br from-green-600 to-teal-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                GeeksForGeeks
              </button>
            </a>
          </div>
        </div>

        <div className="certifications ml-1 pb-2 px-[2rem]">
          <h1 className="text-3xl font-semibold font-robotoCondensed underline text-[#64FCD9] mb-3">
            Certifications
          </h1>
          <div className="flex flex-col md:flex-row gap-4 pt-2">
            <a
              href="https://drive.google.com/file/d/1_Dgez7rqnfDGQgCfDkwLbiAs91iW-nct/view"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 rounded-xl border border-white/20 hover:border-[#64FCD9] transition duration-300 flex-1 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-bold text-[#64FCD9]">IBM SkillsBuild (2025)</h2>
                <p className="text-sm text-gray-200 mt-1">From Learner to Builder: AI Agent Architect</p>
              </div>
              <span className="text-xs text-teal-300 font-semibold mt-3 underline inline-block">View Credential →</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1neAththUEWJR5Eop-_WBv57ORC4BRVIz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 rounded-xl border border-white/20 hover:border-[#64FCD9] transition duration-300 flex-1 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-bold text-[#64FCD9]">IBM (2025)</h2>
                <p className="text-sm text-gray-200 mt-1">Computer Networking Basics</p>
              </div>
              <span className="text-xs text-teal-300 font-semibold mt-3 underline inline-block">View Credential →</span>
            </a>
          </div>
        </div>

        <div className="education ml-1 pb-6 px-[2rem]">
          <h1 className="text-3xl font-semibold font-robotoCondensed underline text-[#e356ab] mb-4">
            Education
          </h1>
          <div className="flex flex-col gap-3">
            <div className="p-4 bg-white/10 rounded-xl border border-white/20">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h2 className="text-lg font-bold text-[#64FCD9]">
                  Maharaja Agrasen Institute of Technology (MAIT), Delhi
                </h2>
                <span className="text-xs text-gray-300 font-medium">Sept 2023 – Present</span>
              </div>
              <p className="text-sm text-gray-200 mt-1">
                Bachelor of Technology in Information Technology <span className="text-teal-300 font-semibold">| CGPA: 8.86</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-semibold text-white">S.D. Public School (CBSE), Delhi</h3>
                  <span className="text-xs text-gray-300">2023</span>
                </div>
                <p className="text-sm text-gray-200 mt-1">
                  Class XII <span className="text-teal-300 font-semibold">| 94%</span>
                </p>
              </div>

              <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-semibold text-white">S.D. Public School (CBSE), Delhi</h3>
                  <span className="text-xs text-gray-300">2021</span>
                </div>
                <p className="text-sm text-gray-200 mt-1">
                  Class X <span className="text-teal-300 font-semibold">| 96%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
