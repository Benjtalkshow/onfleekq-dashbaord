import { tailwindEffect } from "../../data/data";
import { PencilLine } from "lucide-react";
import React from "react";
import "../../assets/css/animate.css";
import RadialProgressBar from "./RadialProgressBar";

const PercentageTracker = () => {
  return (
    <div className="relative">
      {/* edit icon */}
      <div className="text-slate-400">
        <PencilLine size={20} className="float-right" />
      </div>
      {/* balance */}
      <div
        className={`${tailwindEffect} top-12 -right-10 absolute rounded-lg w-fit pb-1 px-[2px] bg-slate-300 shadow-md hover:bg-blue-900 transition-colors duration-300 bounce`}
      >
        <div className="bg-primary w-fit px-3 py-2 rounded-lg text-center font-semibold text-white transition-transform duration-300">
          <span className="">$10,600</span>
        </div>
      </div>

      {/* radial progress bar */}
      <div className="flex justify-center items-center mt-10">
        <RadialProgressBar targetPercentage={69} />
      </div>
    </div>
  );
};

export default PercentageTracker;
