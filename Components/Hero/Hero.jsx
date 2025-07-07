"use client";
import React, { useEffect } from "react";
import "./Hero.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Check if the screen size is mobile

    if (isMobile) {
      // Mobile-specific animations
      gsap.fromTo(
        ".mobile-fadeup",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.5,
        }
      );
      gsap.fromTo(
        ".mobile-fadedown",
        {
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.5,
        }
      );
      gsap.fromTo(
        ".main-heading",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        }
      );
    } else {
      // Desktop or larger screens animations
      gsap.fromTo(
        ".main-heading",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        }
      );
      gsap.fromTo(
        ".sub-fadeup",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.5,
        }
      );
      gsap.fromTo(
        ".sub-fadedown",
        {
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.5,
        }
      );
      gsap.fromTo(
        ".sub-fadeleft",
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          delay: 0.5,
        }
      );
      gsap.fromTo(
        ".sub-faderight",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          delay: 0.5,
        }
      );
    }
  }, []);

  return (
    <div className="h-screen w-screen flex-col flex overflow-x-hidden hero-bg">
      <div className="w-full relative flex h-fit justify-end">
        <a
          href="https://tidycal.com/vedioccagency"
          target="blank"
          className="px-5 py-3 absolute top-10 right-5 sm:right-10 inline rounded-xl text-white sf-font font-bold text-3xl orange-btn-animation "
        >
          let’s talk
        </a>
      </div>
      <div className="flex-grow flex flex-col gap-y-10 justify-center sf-font font-bold items-center">
        <div className="text-4xl mobile-fadeup sub-fadeup">WEB-DESIGN</div>
        <div className="flex flex-col lg:flex-row items-center gap-x-32">
          <div className="text-4xl mobile-fadeup sub-fadeleft">BRANDING</div>
          <div className="my-5 sm:my-0 main-heading">
            <div className="leading-none text-center font-bebas-bold text-[120px] sm:text-[200px] lg:text-[400px] custom-orange-color">
              VEDIOCC
            </div>
            <div className="sf-font leading-none text-2xl relative lg:-top-10 font-extralight text-center px-8 sm:px-0 sm:mb-5 lg:mb-0 ">
              We build brands people follow, buy from, and talk about
            </div>
          </div>
          <div className="text-4xl mobile-fadedown sub-faderight">
            MARKETING
          </div>
        </div>
        <div className="text-4xl mobile-fadedown sub-fadedown">CONTENT LAB</div>
      </div>
    </div>
  );
};

export default Hero;
