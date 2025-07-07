import React from "react";

const About = () => {
  return (
    <div className="bg-[#24231f] w-screen overflow-x-hidden flex flex-col items-center justify-center py-32">
      <div className="underline underline-offset-8 text-[#E1E9DE] sf-font font-bold text-5xl mb-14">
        WHO ARE WE?
      </div>
      <div className="text-white max-w-11/12 lg:max-w-7/12 text-3xl lg:text-5xl tracking-wider font-light capitalize sf-font leading-11 lg:leading-16 text-justify">
        VEDIOCC IS A{" "}
        <span className="custom-orange-color special-select">
          CONTENT-FIRST
        </span>{" "}
        BRAND STUDIO. WE CRAFT REELS, BRANDS, AND WEBSITES THAT DON’T JUST LOOK
        GOOD - THEY{" "}
        <span className="custom-orange-color special-select">PERFORM</span>. NO
        FLUFF. NO FILLER. JUST STRATEGY, EXECUTION, AND{" "}
        <span className="custom-orange-color special-select">
          CONTENT THAT WINS
        </span>{" "}
        THE SCROLL WAR.
      </div>
    </div>
  );
};

export default About;
