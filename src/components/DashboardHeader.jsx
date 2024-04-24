import React, { useState } from "react";
import { Input } from "./ui/input";
import { Bell, Search } from "lucide-react";
import { dashboardHeaderLinks, tailwindEffect } from "../data/data";
import { Link, useLocation } from "react-router-dom";
import Avatar from "../assets/avatar1.png";

const DashboardHeader = ({ toggleDashboard }) => {
  const { pathname } = useLocation();
  const [viewProfile, setViewProfile] = useState(false);

  const showProfile = () => {
    setViewProfile(true);
  };
  const hideProfile = () => {
    setViewProfile(false);
  };
  return (
    <div
      className={`${tailwindEffect} w-full flex items-center justify-between`}
    >
      {/* logo   */}
      <div className="grid custom1:hidden">
        <h1 className="text-primary font-bold my-10 text-3xl text-center ">
          Logo
        </h1>
      </div>

      <div className="input&&linkContainer hidden  custom1:flex  gap-20 items-center w-full">
        {/* input */}
        <div className="inputDiv flex gap-2 px-3 w-[45%] focus-within:border-secondary border-transparent border-[1px]  items-center rounded-lg bg-background">
          <Search className="text-primary" />
          <Input className="bg-transparent placeholder:text-slate-500 border-0 input" type="text" placeholder="Search" />
        </div>

        {/* links */}
        <ul className="headerLinks items-center gap-8 flex">
          {dashboardHeaderLinks.map((link, index) => (
            <Link to={link.path} key={index}>
              <li
                className={`${tailwindEffect} ${
                  pathname === link.path ? "text-secondary" : "text-black"
                } font-semibold`}
              >
                {link.link}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* profile section */}
      <div className={`${tailwindEffect} flex gap-5 items-center relative`}>
        {/* notfication */}
        <div className="notification text-background relative">
          <div className="w-2 h-2 absolute translate-x-[1.2rem] bg-secondary rounded-full flex justify-center items-center"></div>
          <Bell size={26} className="cursor-pointer" />
        </div>

        <div
          onClick={viewProfile ? hideProfile : showProfile}
          className={` profile overflow-hidden   cursor-pointer bg-info rounded-[1rem]  w-fit h-fit`}
        >
          <img
            src={Avatar}
            width={50}
            height={50}
            className="object-cover object-center"
          />
          {viewProfile && (
            <div className={`bg-background shadow-md left-7 top-12 p-10 absolute`}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
