import React, { useState } from "react";
import SpentTimeChart from "./SpentTimeChart";
import "../../assets/css/animate.css"

const SpentTime = ({ value = "12hr: 10min" }) => {
  return (
    <section className={`w-full h-fit rounded-lg bg-background  px-[2px]`}>
      <div className="rounded-lg bg-white relative">
        <h1 className="font-bold text-left  px-2 py-5 text-lg">
          Spent Time
        </h1>
        <div className="time bg-background rounded-xl px-[2px] pb-1 w-fit absolute right-5 top-5">
        <div className="display bg-secondary p-2 rounded-xl border-0  text-white text-center">
          {value}
        </div>
        </div>
        <SpentTimeChart />
      </div>
    </section>
  );
};

export default SpentTime;
