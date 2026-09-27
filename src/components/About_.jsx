import React from "react";
import { motion } from "framer-motion";

// Alternating left/right scroll-in animation
const slideInVariant = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -100 : 100,
    y: 20,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const About_ = () => {
  const paragraphs = [
    `Hi, I’m Purvanshu Jindal, an Information Technology undergraduate at Maharaja Agrasen Institute of Technology (MAIT), Delhi (CGPA: 8.86, Sept 2023 – Present).`,
    `I specialize in Full-Stack Web Development and Software Engineering, building responsive, scalable applications with React, Next.js, HTML, CSS, Tailwind CSS, Node.js, Express.js, MongoDB, and MySQL. I design modular backend architectures with RESTful APIs, JWT authentication, and role-based access control.`,
    `I have practical industry experience in AI & Automation, having developed an AI-powered itinerary generation system integrating 5+ external APIs and orchestrating multi-step workflow pipelines that reduced manual processing time by approximately 30%.`,
    `I have engineered impactful, production-grade projects: Mocklytics (an AI mock interview platform featuring Groq LLaMA 3.1 and Whisper v3 speech recognition with recruiter-style performance analytics), WeCode (a real-time collaborative coding platform with WebSocket synchronization and Judge0 CE code execution), and FitLife (a full-stack gym management system with role-based dashboards and automated PDF invoices).`,
    `I am passionate about algorithmic problem solving and Data Structures. I have solved 300+ DSA problems spanning arrays, recursion, trees, graphs, binary search, BFS, DFS, and dynamic programming, following the structured Striver A2Z roadmap.`,
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center py-20 px-4 md:px-10 mt-5 ml-0 mr-0 "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1747619715083-3db63905a75a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOXxibzhqUUtUYUUwWXx8ZW58MHx8fHx8')",
      }}
    >
      <div className="backdrop-blur-lg bg-white/80 rounded-3xl max-w-5xl mx-auto p-10 shadow-2xl border border-gray-200">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10 underline decoration-teal-300"
          whileHover={{ scale: 1.05 }}
        >
          A Bit About Me
        </motion.h1>

        {paragraphs.map((text, index) => (
          <motion.p
            key={index}
            custom={index}
            variants={slideInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }} // 👈 triggers every time it enters view
            className="mb-6 text-lg md:text-xl leading-relaxed text-gray-800"
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default About_;
