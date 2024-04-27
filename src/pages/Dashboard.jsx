import { useState, useEffect } from "react";
import { littleCardData, tailwindEffect, transactionData } from "../data/data";
import LittleCard from "../components/dashboardComponents/LittleCard";
import React from "react";
import Navigation from "../components/dashboardComponents/Navigation";
import Statistics from "../components/dashboardComponents/Statistics";
import SpentTime from "../components/dashboardComponents/SpentTime";
import Explore from "../components/dashboardComponents/Explore";
import { useNavigator } from "../context/NavigationContext";
import Transaction from "../components/rightGrid/Transaction";
import PercentageTracker from "../components/rightGrid/PercentageTracker";
import CreditCard from "../components/rightGrid/CreditCard";

const Dashboard = () => {
  const { activeTab } = useNavigator();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={`${tailwindEffect} h-fit`}>
      <Navigation />
      <div
        className={`${tailwindEffect} flex-col justify-between gap-5 flex custom1:flex-row mt-20 mb-10 w-full`}
      >
        {/* left grid */}
        {(screenWidth >= 912 || activeTab === 0) && (
          <div className={`${tailwindEffect} w-full custom1:w-[70%] `}>
            <div
              className={`${tailwindEffect} flex justify-between gap-10 overflow-x-scroll custom1:overflow-x-hidden`}
            >
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
            <div
              className={`${tailwindEffect} w-full flex flex-col custom1:flex-row gap-5 mt-5`}
            >
              <SpentTime />
              <Explore />
            </div>
          </div>
        )}

        {/* right grid */}
        {(screenWidth >= 912 || activeTab === 1) && (
          <div
            className={`${tailwindEffect} relative bg-background flex flex-col rounded-lg p-5 w-full custom1:w-[30%] `}
          >
            <PercentageTracker />
            <CreditCard />
            <Transaction transaction={transactionData} />
            {/* <svg
              width="200"
              height="50"
              viewBox="0 0 200 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10,50 C40,80 160,20 190,50"
                stroke="navy"
                stroke-width="5"
                fill="none"
              />
            </svg> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
