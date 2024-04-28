import React from "react";
import Avatar from "../../assets/avatar2.png";
import { tailwindEffect } from "../../data/data";

const LittleCard = ({ chart: Chart, index, title = "visitors", color, stat = "14,606", logic, style, chartColorProp }) => {
  return (
    <div className="bg-background w-fit rounded-lg pb-2 px-[3px]">
      <div className={`${tailwindEffect} ${logic} p-2 flex flex-col-reverse custom1:flex-row rounded-lg gap-2 custom1:gap-5 justify-center items-center shadow-md hover:shadow-xl`}>
        <Chart color={'#3326AE'} fill={"#EDECF7"} /> 
        <div className="text-center">
          <h1 className="font-semibold text-background text-md custom1:text-lg">{title.toLocaleUpperCase()}</h1>
          <p className={`font-bold text-lg ${color} custom1:text-2xl`}>{stat}</p>
        </div>
      </div>
    </div>
  );
};

export default LittleCard;
