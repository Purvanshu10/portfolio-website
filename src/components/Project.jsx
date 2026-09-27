
const projects = [
  {
    title: "Mocklytics",
    description:
      "Built a resume-aware AI interview simulation platform using Groq LLaMA 3.1 for personalized question generation and Whisper v3 speech recognition. Implemented an intelligent evaluation pipeline producing recruiter-style performance analytics including technical depth scoring and communication clarity assessment. Deployed using Next.js, React, Tailwind CSS, and Vercel.",
    github: "https://github.com/Purvanshu10/Mocklytics",
    live: "https://mocklytics-client.vercel.app",
  },
  {
    title: "WeCode",
    description:
      "Developed a real-time collaborative coding platform supporting 10+ concurrent users using WebSocket synchronization architecture. Architected a room-based collaboration system with presence tracking, integrated chat, and synchronized whiteboard state management. Integrated multi-language execution via Judge0 CE API processing 100+ executions while reducing latency by 25%.",
    github: "https://github.com/Purvanshu10/WeCode-realtime",
    live: "https://we-code-dsa.vercel.app/",
  },
  {
    title: "FitLife",
    description:
      "Developed a full-stack MERN application implementing role-based dashboards supporting multiple workflows with secure access control. Integrated authentication, workout tracking modules, notification services, and PDF invoice generation managing 50+ activity records. Built responsive frontend using React and Tailwind CSS connected through RESTful APIs.",
    github: "https://github.com/Purvanshu10/FitLife-Gym-Management-System",
    live: "https://fitlife-gym-management-system.onrender.com/",
  },
];

const Project = () => {
  return (
    <div className="bg-[#090528] text-white py-6">
      <h1 className="text-3xl font-extrabold px-[1.4em] underline font-robotoCondensed md:relative md:top-2 lg:relative lg:top-2 mb-6">
        Projects
      </h1>

      <div className="main-div flex flex-wrap justify-center gap-6 px-4 sm:w-full pb-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col justify-between rounded-lg p-4"
            style={{
              width: "280px",
              minHeight: "350px",
              backgroundColor: "#0d0a2e",
              border: "1px solid #1e1a4a",
            }}
          >
            <div>
              <h2 className="text-[#64fcd8] font-bold text-lg mb-3">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex gap-3 mt-4 flex-wrap">
              <button
                className="bg-[#64fcd9] text-black px-3 py-1 rounded-md hover:font-semibold text-sm"
                onClick={() => window.open(project.github, "_blank")}
              >
                GitHub
              </button>
              {project.live && (
                <button
                  className="bg-[#64fcd9] text-black px-3 py-1 rounded-md hover:font-semibold text-sm"
                  onClick={() => window.open(project.live, "_blank")}
                >
                  Live Demo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;