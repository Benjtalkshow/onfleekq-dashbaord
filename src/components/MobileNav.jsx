import React from "react";
import { links, tailwindEffect } from "../data/data";
import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="rounded-[4rem] p-3 fixed bottom-0 grid w-full sm:w-fit bg-primary md:hidden left-1/2 -translate-x-1/2 sm:-translate-y-1/2 text-center font-semibold">
      <ul className="w-full relative flex gap-10 justify-center items-center">
        {links.map((data, index) => (
          <Link to={data.path} className={`${tailwindEffect}`} key={index}>
            <li
              className={`text-tertiary relative ${
                pathname === data.path
                  ? "bg-white -translate-y-[2rem]"
                  : "hover:text-secondary  hover:bg-white"
              }  rounded-lg p-3 ${tailwindEffect}`}
              style={{
                color: pathname === data.path ? "#FF392B" : "#8880CF",
                boxShadow:
                  pathname === data.path
                    ? "0 0 10px rgba(0, 0, 0, 0.2)"
                    : "none",
              }}
            >
              <data.icons />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
