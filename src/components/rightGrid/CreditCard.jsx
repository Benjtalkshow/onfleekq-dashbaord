import React from "react";
import Card from "../../assets/card.svg";
import { Ellipsis } from "lucide-react";
import CardSvg from "./CardSvg";

const CreditCard = () => {
  return (
    <div className="mt-8 relative">
      {/* setting */}
      <div className="text-black flex justify-between items-center">
        <h1 className="font-bold text-lg">My Card</h1>
        <Ellipsis size={20} className="cursor-pointer" />
      </div>
      <CardSvg name="Onfleekq Dashboard" code="4560" date="09/23" />
    </div>
  );
};

export default CreditCard;
