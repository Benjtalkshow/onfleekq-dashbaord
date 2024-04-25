import { exploreData, tailwindEffect } from "../../data/data";
import React from "react";
import Profile from "../Profile";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const Lists = ({
  Icon = CirclePlay,
  color = "text-priamry",
  text = "hello",
}) => {
  return (
    <div className="flex items-center gap-2 py-4">
      <Icon size={20} className={`${color}`} />
      <p>{text}</p>
    </div>
  );
};

const Explore = () => {
  return (
    <section
      className={`${tailwindEffect}  rounded-lg w-full h-fit bg-background pb-2 px-[2px]`}
    >
      <div className="p-5 shadow-md hover:shadow-lg w-full bg-white text-center rounded-lg">
        {/* profile section */}
        <div className="flex gap-5 items-center justify-start">
          <Profile radius="50%" />
          <div>
            <h1 className="name font-semibold text-black text-left">
              Lilly Donovan
            </h1>
            <p className="designation text-background text-left">
              Business Trainer
            </p>
          </div>
        </div>
        {/* text */}
        <h1 className="font-semibold text-left py-3 text-[1.1rem]">
          How to properly manage your personal budget?
        </h1>
        {/* icons */}
        <div className="flex items-center gap-3">
          {exploreData.map((data, index) => (
            <Lists
              key={index}
              Icon={data.icon}
              color={data.color}
              text={data.text}
            />
          ))}
        </div>

        {/* button section */}
        <div className="flex items-center justify-between py-3">
          <h1 className="font-semibold text-black">5 days to go</h1>
          <Button className="bg-primary px-2 flex hover:bg-blue-900 justify-center items-center rounded-2xl text-white">Connect <ChevronRight /></Button>
        </div>
      </div>
    </section>
  );
};

export default Explore;
