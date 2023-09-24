import Servers from "@/components/Servers";
import { dcServers } from "@/constants";
import { Inter, Roboto } from "next/font/google";
import { BiLogoDiscord } from "react-icons/bi";
import { FaStarOfLife } from "react-icons/fa";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["cyrillic"], weight: ["400", "700"] });

const CommunitySection = () => {
  return (
    <div className="bg-[#fffafa] py-20 text-slate-900 px-10">
      <div className="text-center text-md text-indigo-400 my-4">
        <FaStarOfLife className="animate-spin inline-block" />
      </div>
      <div className="py-10">
        <h1
          className={`lg:text-4xl text-3xl font-semibold text-center ${inter.className} tracking-tight`}
        >
          Get in touch with diverse <br />
          <BiLogoDiscord className="inline text-4xl" />
          community
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1` gap-3 mt-10">
        {dcServers.map((item, index) => (
          <Servers key={index} {...item}></Servers>
        ))}
      </div>
    </div>
  );
};

export default CommunitySection;
