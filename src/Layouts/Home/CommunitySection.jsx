import { Inter, Roboto } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["cyrillic"], weight: ["400", "700"] });

const CommunitySection = () => {
  const commonPstyles = `w-fit px-3 py-2 rounded-md font-semibold hover:bg-[#eaf4fc]`;
  return (
    <div
      className={`${inter.className} bg-[#f8f8ff] py-10 rounded-lg my-16 px-7`}
    >
      <h1 className="font-semibold text-3xl">
        Get connected with <br /> diverse community
      </h1>
      <div>
        {/* 1st grid item */}
        <div>
          <div className="text-xs grid grid-cols-4 my-6 gap-3">
            <p className={commonPstyles}>Ask about anything</p>
            <p className={commonPstyles}>Get Engages with club</p>
            <p className={commonPstyles}>Participate in Q&A</p>
            <p className={commonPstyles}>Get clear concepts</p>
          </div>
        </div>
        {/* 2nd grid item */}
        <div className="p-8 border rounded border-red-400"></div>
      </div>
    </div>
  );
};

export default CommunitySection;
