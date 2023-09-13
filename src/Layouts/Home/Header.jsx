import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  // primary button
  const primaryBtn = `px-7 py-3 border rounded-md bg-slate-900 text-white font-semibold text-sm my-3 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300`;

  // secondary button
  const secondaryBtn = `text-xs font-semibold hover:text-slate-800 my-3`;

  return (
    <div className="bg-gradient-to-r from-amber-100 via-sky-200 to-indigo-100 lg:w-full lg:max-h-screen w-full min-h-screen border border-transparent">
      <div className={`${inter.className} lg:my-20 my-10`}>
        <h1 className="text-center text-sm py-2 font-semibold">
          Zig Forum Discussions
        </h1>
        <div className="relative">
          <h1 className="lg:text-5xl text-4xl text-slate-800 font-bold text-center mt-8">
            Enhancing the Hub for
            <br /> Web Development
            <br /> Communities
          </h1>
          <Image
            className="absolute lg:z-20 lg:top-14 lg:left-20 top-16 left-0 lg:block md:block hidden"
            src="/squigly-line.png"
            alt="spiral element"
            width={100}
            height={100}
          ></Image>
          <Image
            className="absolute top-96 left-40 lg:hidden md:hidden"
            src="/squigly-line.png"
            alt="spiral element"
            width={100}
            height={100}
          ></Image>
        </div>
        {/* sub-heading for lg */}

        <p className="text-center lg:text-sm text-xs my-3 lg:py-6 lg:px-5 lg:block hidden">
          Ask questions,share ideas and build connections with each
          <br /> other - all right next to your code. Zig Forum discussions
          eanbles
          <br /> healthy and productive developer collaborations
        </p>

        {/* sub-heading for sm */}
        <p className="text-center text-xs lg:hidden md:hidden my-3 py-3 px-2">
          Ask questions,share ideas and build connections with each
          <br /> other - all right next to your code.
        </p>

        {/* buttons */}
        <div className="flex flex-col justify-center items-center">
          <button className={primaryBtn}>
            Go to Discussions{" "}
            <BsChevronRight className="inline-block font-bold" />
          </button>
          <button className={secondaryBtn}>
            Watch video <BsChevronRight className="inline-block font-bold" />
          </button>
        </div>

        {/* stats */}
        <div className="flex flex-col items-center mt-10">
          <p className="text-[10px] text-black">
            <AiFillCaretDown className="inline-block text-lg text-slate-800" />{" "}
            Scroll Down
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
