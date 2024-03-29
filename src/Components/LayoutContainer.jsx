import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import About from "./Components/AboutPage/About";
import Program from "./Components/ProgramPage/Program";

const LayoutContainer = () => {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {}, comp);
    return () => ctx.revert();
  }, []);
  return (
    <div className="wrapper">
      <About />
      <Program />
    </div>
  );
};

export default LayoutContainer;
