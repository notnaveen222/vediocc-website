import React from "react";

const Consultation = () => {
  return (
    <div className="hero-bg h-[50vh] gap-y-20 flex flex-col sf-font justify-center items-center">
      <div className=" text-5xl text-center lg:text-6xl font-bold">
        LIKE WHAT YOU SEE?
      </div>
      <div className="relative">
        <a
          href="https://tidycal.com/vedioccagency"
          target="blank"
          className="px-6 py-5  rounded-3xl text-white sf-font font-bold text-2xl lg:text-4xl orange-btn-animation cursor-pointer"
        >
          Book a consultation
        </a>
        <div className="absolute -bottom-6 -right-7 lg:-bottom-6 lg:-right-8 -rotate-[25deg] text-5xl mea-culpa-regular">
          its free
        </div>
      </div>
    </div>
  );
};

export default Consultation;
