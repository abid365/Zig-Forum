import Servers from "@/components/Servers";
import { dcServers } from "@/constants";
import { Inter, Roboto } from "next/font/google";
import Image from "next/image";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["cyrillic"], weight: ["400", "700"] });

const CommunitySection = () => {
  return (
    <div className="bg-[#0f0f0f] py-20 text-white px-10">
      <h1 className="lg:text-3xl text-2xl font-semibold text-center">
        Get in touch with diverse <br /> community 🏁
      </h1>
      <div className="grid grid-cols-4 place-items-center mt-20">
        {dcServers.map((item, index) => (
          <Servers key={index} {...item}></Servers>
        ))}
      </div>
    </div>
  );
};

export default CommunitySection;
