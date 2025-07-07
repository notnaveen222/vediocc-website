import React from "react";
import ServiceCard from "./ServiceCard";
import mock1 from "./Assets/mock1.png";
import mock2 from "./Assets/mock2.png";
import mock3 from "./Assets/mock3.png";
import mock4 from "./Assets/mock4.png";

const Service = () => {
  return (
    <div className="w-screen flex flex-col z-10 hero-bg gap-y-10">
      <div className="underline underline-offset-8 text-[#24231F] sf-font font-bold text-5xl my-14 text-center">
        WHAT WE DO
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-1 z-20 grid-rows-4">
        <ServiceCard
          title={"Branding"}
          image={mock1}
          reverse={false}
          description={
            "We build scroll-stopping brand identities that look sharp, speak loud, and sell fast"
          }
        />
        <ServiceCard
          title={"Marketing"}
          image={mock2}
          reverse={true}
          description={
            "We turn clicks into conversions with marketing that’s built to scale, not just exist."
          }
        />
        <ServiceCard
          title={"Web Design"}
          image={mock3}
          reverse={false}
          description={
            "We design clean, high-converting websites that look better and load faster."
          }
        />
        <ServiceCard
          title={"Content-Gen"}
          image={mock4}
          reverse={true}
          description={
            "We script, design, and deliver short-form  content built to hook, hold, and convert. "
          }
        />
      </div>
    </div>
  );
};

export default Service;
