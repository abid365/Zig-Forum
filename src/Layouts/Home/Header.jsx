import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  // primary button
  const primaryBtn = `px-7 py-3 border rounded-md bg-slate-900 text-white font-semibold text-sm my-3 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300`;

  // secondary button
  const secondaryBtn = `text-xs font-semibold hover:text-slate-800 my-3`;

  return (
    <div className="my-10">
      <div className={inter.className}>
        <h1 className="text-center text-sm py-2 font-semibold">
          Zig Forum Discussions
        </h1>
        <div className="relative">
          <h1 className="text-5xl text-slate-800 font-bold text-center mt-8">
            The home <br />
            for web-dev <br />
            communities
          </h1>
          <Image
            className="absolute -z-20 top-14 left-48"
            src="/squigly-line.PNG"
            alt="spiral element"
            width={100}
            height={100}
          ></Image>
        </div>
        <p className="text-center text-sm my-3 py-6 px-5">
          Ask questions,share ideas and build connections with each
          <br /> other - all right next to your code. Zig Forum discussions
          eanbles
          <br /> healthy and productive developer collaborations
        </p>
        <div className="flex flex-col justify-center items-center">
          <button className={primaryBtn}>
            Go to Discussions{" "}
            <BsChevronRight className="inline-block font-bold" />
          </button>
          <button className={secondaryBtn}>
            Watch video <BsChevronRight className="inline-block font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
