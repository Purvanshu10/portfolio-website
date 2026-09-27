import React from "react";
import programmerImg from "../assets/Programmer_Img.png";
import programmer2 from "../assets/Programmer2.jpg";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import image from "../assets/cartoon_img.png";
import Typical from "react-typical";
import { Icon } from "@iconify/react";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center justify-center w-full h-full lg:px-10">
      <div className="image w-full lg:w-1/2 flex justify-center lg:justify-start">
        <img
          src={programmer2}
          alt="image"
          className="w-[90%] lg:w-[80%] max-w-[400px] lg:max-w-[600px]"
        />
      </div>

      <div className="main flex flex-col items-center lg:items-start w-full lg:w-1/2 px-5 lg:px-10">
        <div className="pl-0 lg:pl-[10vw] flex justify-center lg:justify-start">
          <img
            src={image}
            alt="Programmer"
            className="w-[30vw] lg:w-[8vw] max-w-[200px]"
          />
        </div>

        <div className="Software-heading text-center lg:text-left mt-4 lg:mt-6">
          <h1 className="text-[6vw] lg:text-[3vw] font-poppins">
            Hi, I am Purvanshu Jindal&nbsp;
          </h1>

          <div className="min-h-[3vw] lg:min-h-[1.5vw]">
            <Typical
              steps={[
                "Full-Stack Developer",
                3000,
                "Software Engineer Intern",
                3000,
                "MERN Stack Developer",
                3000,
                "Web Developer",
                3000,
                "AI & Automation Intern",
                3000,
                "Problem Solver (DSA)",
                3000,
              ]}
              loop={Infinity}
              wrapper="p"
              className="inline-block text-[#64fcd9] text-[6vw] lg:text-[2vw] font-semibold"
            />
          </div>
        </div>

        <div className="icons flex gap-[2vw] mt-4 justify-center lg:justify-start">
          <a
            href="https://github.com/Purvanshu10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <button>
              <img
                src={githubIcon}
                alt="Github"
                className="w-[8vw] lg:w-[2.5vw] max-w-[50px]"
              />
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/purvanshu-jindal-2127a32b2/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <button>
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-[8vw] lg:w-[2.5vw] max-w-[50px]"
              />
            </button>
          </a>

          <a
            href="mailto:purvanshujindal10@gmail.com"
            aria-label="Email"
          >
            <button className="flex items-center justify-center">
              <Icon
                icon="mdi:gmail"
                className="w-[8vw] lg:w-[2.5vw] max-w-[50px] h-[8vw] lg:h-[2.5vw] max-h-[50px] text-red-500 hover:scale-105 transition-transform"
              />
            </button>
          </a>
        </div>

        <div className="Resume mt-4 flex justify-center lg:justify-start">
          <a
            href="/resume%20(25-08-26).pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#64FCD9] text-black font-bold px-8 py-2 lg:px-[2em] lg:py-[.4em] border rounded-md hover:bg-[#50e6cc] transition-colors">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
