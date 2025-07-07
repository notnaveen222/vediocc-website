import React from "react";
import Image from "next/image";
const ServiceCard = ({ title, image, description, reverse }) => {
  return (
    <div className="w-fit px-2 lg:px-20 mb-4  grid grid-cols-2 service-card">
      <div className={`${reverse ? "order-2 flex justify-end" : "order-1"}`}>
        <Image
          src={image}
          alt="mock image"
          className="w-10/12 lg:w-8/12 service-image"
        ></Image>
      </div>
      <div
        className={`flex h-full w-full justify-center items-center ${
          reverse ? "order-1" : "order-2"
        }`}
      >
        <div className="text-3xl sm:text-5xl lg:text-7xl sf-font">{title}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
