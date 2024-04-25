import { littleCardData } from "../data/data";
import LittleCard from "../components/dashboardComponents/LittleCard";
import React from "react";
import Navigation from "../components/dashboardComponents/Navigation";
import Statistics from "../components/dashboardComponents/Statistics";
import SpentTime from "../components/dashboardComponents/SpentTime";
import Explore from "../components/dashboardComponents/Explore";

const Dashboard = () => {
  return (
    <section>
      <Navigation />
      <div className="flex-col justify-between gap-5 flex custom1:flex-row my-10 w-full">
        {/* left grid */}
        <div className="w-full custom1:w-[70%]">
          <div className="flex justify-between   gap-10 overflow-x-scroll custom1:overflow-x-hidden">
            {littleCardData.map((data, index) => (
              <LittleCard
                title={data.title}
                logic={
                  index === littleCardData.length - 1
                    ? "bg-secondary"
                    : "bg-white"
                }
                stat={data.stat}
                key={index}
                style={
                  index === littleCardData.length - 1
                    ? "text-white sm:text-black"
                    : "text-[#3326AE] sm:text-black"
                }
              />
            ))}
          </div>
          {/* statistics */}
          <Statistics />

          {/* down layouts */}
          <div className="w-full flex gap-5 mt-5">
            <SpentTime />
            <Explore />
          </div>
        </div>
        {/* right grid */}
        <div className="bg-background rounded-lg p-10 w-full custom1:w-[30%]"></div>
      </div>
    </section>
  );
};

export default Dashboard;
