import React from "react";
import Image from "next/image";
const ServiceCard = ({ title, image, description, reverse }) => {
  return (
    <div className="w-fit px-2 lg:px-20 mb-4  grid grid-cols-2 service-card">
      <div
        className={`${
          reverse
            ? "order-2 flex h-full justify-end items-center "
            : "order-1 flex items-center"
        }`}
      >
        <Image
          src={image}
          alt="mock image"
          className="w-10/12 lg:w-8/12 h-fit service-image"
        ></Image>
      </div>
      <div
        className={`flex h-full flex-col w-full justify-center service-card-text items-center ${
          reverse ? "order-1" : "order-2"
        }`}
      >
        <div className="text-3xl sm:text-5xl lg:text-7xl sf-font">{title}</div>
        <div className="text-base leading-5 sm:leading-9 sm:text-3xl text-center lg:text-3xl font-light service-card-description sf-font">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
