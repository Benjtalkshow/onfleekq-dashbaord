import React from "react";
import Avatar from "../../assets/avatar2.png";
import { tailwindEffect } from "../../data/data";

const LittleCard = ({ title = "visitors", stat = "14,606",  logic, style }) => {
  return (
    <div className="bg-background  rounded-lg pb-2 px-[3px]">
    <div  className={`${tailwindEffect} ${logic} w-[110px] sm:w-full px-5 py-5 flex flex-col-reverse custom1:flex-row rounded-lg justify-center gap-2 custom1:gap-10 items-center shadow-md hover:shadow-xl`}>
      <img src={Avatar} width={80} height={80} />
      <div>
        <h1 className="font-semibold text-background text-md custom1:text-xl">{title.toLocaleUpperCase()}</h1>
        <p className={`${style} font-bold text-lg custom1:text-3xl text-black`}>{stat}</p>
      </div>
    </div>
    </div>
  );
};

export default LittleCard;
