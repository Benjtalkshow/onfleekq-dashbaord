import { useNavigator } from "../../context/NavigationContext";
import { BarChart, LayoutTemplate } from "lucide-react";
import React from "react";


const Navigation = () => {
  const { activeTab, setActiveTab } = useNavigator();
  

  return (
    <section className="custom1:hidden justify-center flex relative">
      <div className="rounded-lg fixed z-10  bg-background w-fit pb-2 px-[2px]">
        <div className="m-auto rounded-lg bg-white shadow-md hover:shadow-lg flex justify-center items-center gap-2 text-center">
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