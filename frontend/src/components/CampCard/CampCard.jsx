import React from "react";
import logo from "../../assets/icons/Recurso 171.svg";

const CampCard = () => {
  return (
    <a className="group" href="#">
      <div className="p-4 w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 group-hover:opacity-75">
        <h3 className="text-4xl text-black">GitHub</h3>
        <img
          src={logo}
          alt="logo of this camp"
          className="w-48 h-48 float-right"
        />
      </div>
    </a>
  );
};

export default CampCard;
