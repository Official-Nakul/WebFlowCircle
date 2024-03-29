import "./App.css";
import "./utility.css";
import About from "./Components/AboutPage/About";
import Program from "./Components/ProgramPage/Program";
import Course from "./Components/Course/Course";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function App() {
  return (
    <div className="wrapper">
      <About />
      <Program />
    </div>
  );
}

export default App;
