// LittleCard.js
import React from "react";
import { tailwindEffect } from "../../data/data";
import LittleCardCharts from "../../components/rightGrid/LittleCardCharts";

const LittleCard = ({
  chart: Chart,
  index,
  title = "visitors",
  color,
  stat = "14,606",
  logic,
  style,
}) => {
  return (
    <div className="bg-background w-fit rounded-lg pb-2 px-[3px]">
      <div
        className={`${tailwindEffect} ${logic} p-2 flex flex-col-reverse custom1:flex-row rounded-lg gap-2 custom1:gap-5 justify-center items-center shadow-md hover:shadow-xl`}
      >
        <LittleCardCharts
          color={index === 2 ? "#FFFFFF" : "#3326AE"}
          fill={"#EDECF7"}
          title={title}
          stat={stat}
        />
        <div className="text-center">
          <h1 className="font-semibold text-background text-md custom1:text-lg">
            {title.toLocaleUpperCase()}
          </h1>
          <p className={`font-bold text-lg ${color} custom1:text-2xl`}>
            {stat}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LittleCard;
