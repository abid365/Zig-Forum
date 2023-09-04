import { Inter, Roboto } from "next/font/google";
import Image from "next/image";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["cyrillic"], weight: ["400", "700"] });

const CommunitySection = () => {
  const commonPstyles = `w-fit px-3 py-2 rounded-md hover:bg-[#eaf4fc]`;
  return (
    <div className="bg-[#fffafa] py-10">
      <div
        className={`${inter.className} bg-gradient-to-r from-[#EEEEFF] via-[#f6f1f4] to-[#eaf4fc] shadow-xl py-10 rounded-lg px-10 mx-10`}
      >
        <h1 className="font-semibold lg:text-3xl text-2xl">
          Get connected with diverse community
        </h1>
        <div>
          {/* 1st grid item */}
          <div>
            <div className="lg:text-xs text-[10px] grid lg:grid-cols-4 grid-cols-2 my-6 gap-3">
              <p className={commonPstyles}>Ask about anything</p>
              <p className={commonPstyles}>Get Engages with club</p>
              <p className={commonPstyles}>Participate in Q&A</p>
              <p className={commonPstyles}>Get clear concepts</p>
            </div>
          </div>
          {/* 2nd grid item */}
          <div className="border  rounded-lg border-slate-100 bg-gradient-to-r from-amber-100 via-purple-100 to-sky-200 grid lg:grid-cols-2 grid-cols-1 gap-y-3">
            <Image
              className="lg:rounded-l-lg rounded-lg w-full"
              src="/3dAvatar.jpeg"
              alt="3D Avatar"
              height={300}
              width={300}
            ></Image>
            <div className="p-5">
              <h1 className="text-3xl font-semibold text-slate-600">
                Ask anything! 💣
              </h1>
              <p className="lg:text-xs text-[10px] py-4 text-slate-700">
                From MERN to MEVN ask anything from any stack , our expertise
                will answer every relevant questions of yours.
              </p>
              <p className="text-xs text-slate-600">
                We have opened this area for your contribution:
              </p>
              <ul className="text-xs my-3">
                <li className="text-slate-700 my-4 py-1 w-fit">
                  🐐 JavaScript
                </li>
                <li className="text-slate-700 my-4 py-1 w-fit">🦒 HTML</li>
                <li className="text-slate-700 my-4 py-1 w-fit">🦋 CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
