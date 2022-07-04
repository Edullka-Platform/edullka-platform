import React from "react";
import { CampCard } from "../../components/CampCard";

const Profile: React.FC<{}> = () => {
  return (
    <div className="container mx-auto">
      <div className="flex text-4xl">
        <p className="first-phrase:bg-black text-white">¡Hola, </p>
        <p className="bg-brand-pantone1925C text-white rounded ml-1">Rosse!</p>
      </div>
      <p className="mt-16 mb-8 text-3xl">Tus campamentos</p>
      <div className="mb-8 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <CampCard />
        <CampCard />
        <CampCard />
        <CampCard />
        <CampCard />
        <CampCard />
        <CampCard />
      </div>
    </div>
  );
};

export default Profile;
