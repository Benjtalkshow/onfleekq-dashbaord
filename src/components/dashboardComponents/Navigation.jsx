import { BarChart, LayoutTemplate } from "lucide-react";
import React, { useContext } from "react";
import { NavigationContext } from "../../context/NavigationContext";


const Navigation = () => {
  const { activeTab, setActiveTab } = useContext(NavigationContext);

  return (
    <section className="flex justify-center">
      <div className="rounded-lg  bg-background w-fit pb-2 px-[2px]">
        <div className="m-auto bg-white shadow-md hover:shadow-lg flex justify-center items-center gap-2 text-center">
          <div
            className={`cursor-pointer ${
              activeTab === 0 ? "bg-info text-white" : "bg-white text-background"
            } py-2 rounded-lg px-5`}
            onClick={() => setActiveTab(0)}
          >
            <BarChart size={26} />
          </div>
          <div
            className={`cursor-pointer ${
              activeTab === 1 ? "bg-info text-white" : "bg-white text-background"
            } py-2 rounded-lg px-5`}
            onClick={() => setActiveTab(1)}
          >
            <LayoutTemplate size={26} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;