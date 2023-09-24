import Image from "next/image";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Games = () => {
  return (
    <div className="bg-black text-white py-10 px-10">
      <h1 className="pt-10 text-3xl text-center font-bold">Never Get Bored</h1>
      <p className="text-xs text-center pt-2 animate-pulse">
        Play outstanding games in our <br /> dedicated gaming zone //
      </p>
      <div className="py-lg:32 py-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5">
          {/* 1st child */}
          <div className="rounded-lg p-1 bg-gradient-to-r from-emerald-400 via-pink-400 to-sky-400 lg:col-span-2 md:col-span-2">
            <div className="p-5 bg-black rounded-lg h-full">
              <h1 className="text-2xl font-semibold">
                Play Stunning <br /> Games
              </h1>
              <p className="text-sm py-4 text-justify">
                Get ready for an exhilarating gaming experience! In our Play
                Stunning Games section, youll find a carefully curated selection
                of games that promise hours of excitement. Whether youre a
                seasoned gamer or just looking to unwind, our games cater to all
                levels of expertise. From epic quests to mind-bending puzzles
                and heart-pounding action, our collection has it all. Immerse
                yourself in breathtaking graphics and captivating storylines.
                Your adventure starts with a simple click—choose your game and
                let the excitement begin!
              </p>
              <button className="my-4 border-2 bg-indigo-400 border-[#171717] px-7 py-3 rounded-md text-semibold hover:bg-indigo-500">
                Go to Game
                <Image
                  className="inline-block mx-1 animate-pulse"
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
              className="rounded-lg"
              src={
                "https://cdn.dribbble.com/userupload/6308728/file/original-85fdcebbb67c6a04ea7b753b2698b29d.png?resize=1024x768"
              }
              alt="Game Image"
              height={400}
              width={400}
            ></Image>

            {/* outer div to create gradient */}
            <div className="rounded-lg p-1 bg-gradient-to-l from-emerald-400 via-pink-400 to-sky-400 backdrop-blur-md h-full text-slate-700">
              {/* inner div */}
              <div className="bg-black p-4 text-white rounded-md">
                <h1 className="text-md font-semibold">
                  Spark your acitivity
                  <Image
                    className="inline mx-3"
                    src={"/potion.png"}
                    alt="Potion"
                    height={20}
                    width={20}
                  ></Image>
                </h1>
                <p className="text-xs py-2 font-semibold text-justify">
                  Boost your mood with our mind triggering Games. Play with your
                  friends and share in your social accounts
                </p>
                <button className="hover:font-bold font-semibold text-sm">
                  Play Now{" "}
                  <BsArrowRightShort className="inline-block text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center rounded-full mb-5">
        <Image
          className="bg-gradient-to-t from-amber-100 via-orange-200 to-red-300 rounded-full"
          src={"/spades.png"}
          height={50}
          width={50}
          alt="Spade"
        ></Image>
      </div> */}
    </div>
  );
};

export default Games;
