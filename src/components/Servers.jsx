import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsLink45Deg, BsFillPeopleFill } from "react-icons/bs";
import { RiRadioButtonLine } from "react-icons/ri";
import { VscVerifiedFilled } from "react-icons/vsc";
import "./components.css";

const Servers = (props) => {
  // console.log(props);
  const { title, link, logo, desc, members, online } = props;

  return (
    <div className="pl-4 py-4 rounded-sm border-2 border-slate-800 bg-white font-semibold cards">
      <div className="flex items-center">
        <Image
          className="my-2 rounded-full border-2 border-slate-900"
          src={logo}
          width={40}
          height={40}
          alt="logo"
        ></Image>
        <div className="border-2 border-slate-900 w-full"></div>
      </div>
      <h1 className="text-sm py-1">
        {title} <VscVerifiedFilled className="inline text-lg text-indigo-600" />
      </h1>
      <p className="py-1 pr-4 font-normal text-slate-700 text-xs mb-2 h-[100px]">
        {desc}
      </p>
      <Link
        className="text-xs hover:cursor-pointer hover:text-indigo-400 px-3 py-2 rounded-md bg-black mt-4 mb-2 block w-fit text-white"
        href={link}
      >
        Join Now <BsLink45Deg className="inline text-xl font-bold" />
      </Link>
      <div className="flex items-center justify-between pr-4 mt-5">
        <p className="text-xs font-normal">
          <RiRadioButtonLine className="inline text-emerald-500 mr-[2px]" />
          {online} Online
        </p>
        <p className="text-xs font-normal">
          <BsFillPeopleFill className="inline mb-[2px] mr-[2px]" />
          {members} Members
        </p>
      </div>
    </div>
  );
};

export default Servers;
