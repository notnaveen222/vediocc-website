import React from "react";

const Footer = () => {
  return (
    <div className="w-screen sf-font bg-[#24231F] pt-20 text-white flex flex-col px-10 sm:px-18">
      <div className="flex w-full flex-col gap-y-5 sm:gap-y-0 sm:flex-row justify-between border-b-2 pb-18 border-b-white">
        <div>
          <div className="text-4xl mb-5 font-bold text-center sm:text-left">
            VEDIOCC
          </div>
          <div className="text-3xl font-extralight w-full sm:w-2/3 text-center sm:text-left">
            We build brands people follow, buy from, and talk about.
          </div>
        </div>
        <div className="text-center sm:text-right">
          <div className="text-2xl mb-5">CONNECT</div>
          <div className="flex flex-row gap-5 justify-center sm:gap-0 sm:flex-col ">
            <a
              href="https://www.instagram.com/vediocc/"
              target="blank"
              className="text-xl font-extralight tracking-wider cursor-pointer"
            >
              INSTAGRAM
            </a>
            <a
              href="https://www.threads.net/@vediocc"
              target="blank"
              className="text-xl font-extralight tracking-wider cursor-pointer"
            >
              THREADS
            </a>
            <a
              href="mailto:vedioccagency@gmail.com"
              target="blank"
              className="text-xl font-extralight tracking-wider cursor-pointer"
            >
              MAIL
            </a>
          </div>
        </div>
      </div>
      <div className="my-5">
        <div className="text-2xl font-extralight tracking-widest">
          www.vediocc.in
        </div>
        <div className="text-2xl font-extralight tracking-widest">© 2025</div>
      </div>
    </div>
  );
};

export default Footer;
