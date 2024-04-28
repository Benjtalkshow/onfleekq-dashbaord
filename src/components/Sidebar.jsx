import React, { useState } from "react";
import { links, tailwindEffect } from "../data/data";
import { Link, useLocation } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="z-10 relative hidden custom1:flex w-[180px] h-screen flex-col bg-primary">
      {/* logo */}
      <div className="">
        <h1 className="text-white font-bold my-10 text-2xl text-center ">
          Logo
        </h1>
      </div>

      {/* links */}
      <ul className="mx-auto h-fit mt-20 relative">
        {links.map((link, index) => (
          <Link to={link.path} className={`${tailwindEffect}`} key={index}>
            <li
              className={` text-tertiary relative  ${
                pathname === link.path
                  ? "bg-white translate-x-[4rem]"
                  : "hover:text-secondary  hover:bg-white"
              } mb-5  rounded-lg p-3 ${tailwindEffect}`}
              style={{
                color: pathname === link.path ? "#FF392B" : "#8880CF",
                boxShadow:
                  pathname === link.path
                    ? "0 0 10px rgba(0, 0, 0, 0.2)"
                    : "none",
              }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <link.icons className="group-hover:rotate-[360deg] group-hover:scale-150" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-black shadow-md bg-background px-2 py-1 rounded-lg">
                      {link.link}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
