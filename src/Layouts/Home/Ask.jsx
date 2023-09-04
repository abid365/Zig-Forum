import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const Ask = () => {
  const btnStyles = `px-6 py-2 border border-slate-800 bg-emerald-400 text-xs rounded-sm hover:bg-sky-500 font-semibold`;
  return (
    <div
      className={`bg-[#13113a] text-white grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-2 items-center`}
    >
      {/* 1st item of the grid */}
      <div>
        <div className="px-10 py-10">
          <h1 className="text-3xl font-semibold">Confused??</h1>
          <p className="text-xs my-4">
            Still confused where to start? Go to our personalized ask section
            and post your queries. Our mentors from top tech companies will
            reach you out
          </p>
          <div className="flex gap-3 mt-4">
            <button className={btnStyles}>Get Started</button>
            <button className={btnStyles}>Go to Ask</button>
          </div>
        </div>
      </div>
      {/* second item of the grid */}
      <div className="place-self-center lg:order-first">
        <Image
          src={"/Message_Sent_-_Dark.png"}
          alt="Dog image"
          height={200}
          width={200}
        ></Image>
      </div>
    </div>
  );
};

export default Ask;
