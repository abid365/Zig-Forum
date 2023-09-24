import React from "react";
import { FaStarOfLife, FaAtlassian } from "react-icons/fa";
import { BsGoogle, BsDiscord } from "react-icons/bs";
import { SiNasa } from "react-icons/si";

const commonStyles = `flex items-center gap-1 text-xl`;

const Partners = () => {
  return (
    <div className="px-10 py-20 bg-[#fafafa]  border-y border-slate-950">
      <div className="text-center mb-10">
        <FaStarOfLife className="inline-block font-3xl animate-spin text-indigo-400" />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <h1 className="text-3xl font-semibold text-slate-800 lg:col-span-2 lg:py-5 py-4">
          Ongoing partenships with world&#39;s <br />
          top tech giants
        </h1>
        <p className="text-xs lg:py-5 py-4">
          Our commitment is to maintaining collaborations with some of the
          world&#39;s renowned and trusted tech providers ensures that our user
          support and premium membership service experience is second to none
        </p>
      </div>
      {/* React Marquee */}
      <div className="px-10 py-10 mt-16 grid lg:grid-cols-4 grid-cols-2 place-items-center gap-10">
        <div>
          <p className={commonStyles}>
            <BsGoogle className="inline text-xl" /> Google
          </p>
        </div>
        <div>
          <p className={commonStyles}>
            <FaAtlassian className="inline text-xl" /> Atlassian
          </p>
        </div>
        <div>
          <p className={commonStyles}>
            <SiNasa className="inline text-xl " /> NASA
          </p>
        </div>
        <div>
          <p className={commonStyles}>
            <BsDiscord className="inline text-xl" /> Discord
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
