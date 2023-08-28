import Link from "next/link";
import React from "react";
import { PiShootingStarBold } from "react-icons/pi";

const NavItems = ({ feedlink, comlink, asklink, shoplink, dashlink }) => {
  const commonStyles = `hover:underline hover:text-slate-200`;
  return (
    <ul className="text-white text-xs flex gap-4">
      <li className={commonStyles}>
        <Link href={{ feedlink }}>Feed</Link>
      </li>
      <li className={commonStyles}>
        <Link href={{ comlink }}>Community</Link>
      </li>
      <li className={commonStyles}>
        <Link href={{ asklink }}>Ask</Link>
      </li>
      <li className={commonStyles}>
        <Link href={{ shoplink }}>Shop</Link>
      </li>
      <li className={commonStyles}>
        <Link href={{ dashlink }}>Dashboard</Link>
      </li>
    </ul>
  );
};

const NavBar = () => {
  return (
    <div className="border py-5 px-10 bg-[#100c08]">
      <div className="flex justify-between items-center text-white">
        {/* main nav contents */}
        <h1 className="text-lg font-semibold">
          <PiShootingStarBold className="inline-block text-2xl" /> Zig Forum
        </h1>
        {/* listed nav items  */}
        <NavItems></NavItems>
      </div>
      {/* gradient border */}
      <div className="h-1 bg-gradient-href-r from-sky-400 via-purple-500 href-indigo-300"></div>
    </div>
  );
};

export default NavBar;
