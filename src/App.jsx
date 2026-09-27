import {
  Navbar,
  Home,
  About,
  Project,
  Experience,
  Contact,
  Footer,
  Project_,
  About_
} from "./components/index";

import { motion } from "motion/react";
import SplashCursor from "../ReactBitsAnimations/SplashCursor/SplashCursor";
import Aurora from "../ReactBitsAnimations/Aurora/Aurora";

function App() {
  return (
    <>
        <SplashCursor />
        
        <Navbar />
          <Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          {" "}
          <Project />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="contact">
          <Contact />
        </div>

        <Footer />
     
    </>
  );
}

export default App;
