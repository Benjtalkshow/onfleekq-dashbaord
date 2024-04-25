import React from "react";
import Sidebar from "../Sidebar";
import { useLocation } from "react-router-dom";
import DashboardHeader from "../DashboardHeader";
import MobileNav from "../MobileNav";


const DashboardLayout = ({ children, toggleDashboard = true }) => {
  const  { pathname } = useLocation();

  if (pathname === "*") {
    return null
  }
  return (
    <section
      className={`w-full flex relative ${
        toggleDashboard ? "bg-white md:bg-primary" : "bg-white"
      }`}
    >
      {toggleDashboard && <Sidebar />}
      <div className="w-full bg-white  rounded-l-[3rem]  px-5 custom1:px-14 py-0 custom1:py-10 relative">
        <DashboardHeader toggleDashboard={toggleDashboard} />
        {children}
        <MobileNav />
      </div>
    </section>
  );
};

export default DashboardLayout;
