import Image from "next/image";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Games = () => {
  return (
    <div className="bg-black text-white py-14 px-10">
      {/* parent container */}
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-5">
        {/* 1st child */}
        <div className="rounded-lg p-[2px] bg-gradient-to-r from-emerald-400 via-pink-400 to-sky-400 lg:col-span-2 md:col-span-2">
          <div className="p-5 bg-black rounded-lg">
            <h1 className="text-3xl font-semibold">
              Play Stunning <br /> Games
            </h1>
            <p className="text-sm py-4">
              Get ready for an exhilarating gaming experience! In our Play
              Stunning Games section, youll find a carefully curated selection
              of games that promise hours of excitement. Whether youre a
              seasoned gamer or just looking to unwind, our games cater to all
              levels of expertise. From epic quests to mind-bending puzzles and
              heart-pounding action, our collection has it all. Immerse yourself
              in breathtaking graphics and captivating storylines. Your
              adventure starts with a simple click—choose your game and let the
              excitement begin!
            </p>
            <button className="my-4 border border-slate-700 px-7 py-3 rounded-md text-semibold hover:bg-[#171717]">
              Go to Game
              <Image
                className="inline-block mx-1"
                src={"/slash.png"}
                alt="Slashing sword"
                height={20}
                width={20}
              ></Image>
            </button>
          </div>
        </div>
        {/* 2nd child {group} */}
        <div className="flex flex-col gap-y-2">
          <Image
            className="rounded-md"
            src={
              "https://cdn.dribbble.com/userupload/6308728/file/original-85fdcebbb67c6a04ea7b753b2698b29d.png?resize=1024x768"
            }
            alt="Game Image"
            height={400}
            width={400}
          ></Image>
          <div className="rounded-md p-4 bg-[#171717] h-full">
            <h1 className="text-md font-semibold">
              Boost your acitivity
              <Image
                className="inline mx-3"
                src={"/potion.png"}
                alt="Potion"
                height={20}
                width={20}
              ></Image>
            </h1>
            <p className="text-xs py-2">
              Boost your mood with our mind triggering Games. Play with your
              friends and share in your social accounts
            </p>
            <button className="hover:font-bold font-semibold text-sm">
              Play Now <BsArrowRightShort className="inline-block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
