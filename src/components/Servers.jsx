import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsLink45Deg } from "react-icons/bs";

const Servers = (props) => {
  // console.log(props);
  const { title, link, logo } = props;
  return (
    <div className="px-8 py-4 rounded-md bg-gradient-to-r from-indigo-400 via-emerald-200 to-purple-200 text-white font-semibold">
      <div className="flex items-center justify-between">
        <Image
          className="my-2 rounded-full"
          src={logo}
          width={30}
          height={30}
          alt="logo"
        ></Image>
        <Link
          className="text-xs hover:cursor-pointer hover:text-indigo-400 px-3 py-2 rounded-md bg-black"
          href={link}
        >
          Join Now <BsLink45Deg className="inline text-xl font-bold" />
        </Link>
      </div>
      <h1 className="text-sm">{title}</h1>
    </div>
  );
};

export default Servers;
