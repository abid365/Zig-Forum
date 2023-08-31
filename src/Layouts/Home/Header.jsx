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
          <h1 className="lg:text-5xl text-4xl text-slate-800 font-bold text-center mt-8">
            The home <br />
            for web-dev <br />
            communities
          </h1>
          <Image
            className="absolute lg:-z-20 lg:top-14 lg:left-48 top-16 left-0 -z-20 lg:block md:block hidden"
            src="/squigly-line.png"
            alt="spiral element"
            width={80}
            height={80}
          ></Image>
          <Image
            className="absolute lg:-z-20 lg:top-14 lg:left-48 top-10 left-0 -z-20 lg:hidden md:hidden"
            src="/squigly-line.png"
            alt="spiral element"
            width={50}
            height={50}
          ></Image>
        </div>
        <p className="text-center lg:text-sm text-xs my-3 lg:py-6 lg:px-5 lg:block hidden">
          Ask questions,share ideas and build connections with each
          <br /> other - all right next to your code. Zig Forum discussions
          eanbles
          <br /> healthy and productive developer collaborations
        </p>
        <p className="text-center text-xs lg:hidden md:hidden my-3 py-3 px-2">
          Ask questions,share ideas and build connections with each other - all
          right next to your code.
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
