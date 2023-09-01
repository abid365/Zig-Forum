import Image from "next/image";
import React from "react";

const Space = () => {
  return (
    <div className="px-7 py-3 my-20 relative">
      <span className="text-4xl absolute translate-x-5 rotate-6 top-9 left-40">
        🦋
      </span>
      <div className="flex flex-col justify-center items-center">
        <Image
          className="my-3"
          src="/contract.png"
          alt="forum image"
          height={100}
          width={100}
        ></Image>
        <h1 className="text-2xl font-semibold text-center">
          Dedicated space for conversations
        </h1>
        <p className="text-xs text-center py-3">
          Navigate to feed, discover hundreds of questions and <br />
          get relevant answers for each of them
        </p>
        <div className="border border-slate-50 rounded-full bg-white relative">
          <span className="text-2xl absolute right-16">🐞</span>
          <Image
            className="rounded-md"
            src="/Fortune_future___Seed_Spark-removebg-preview.png"
            alt="user image"
            height={400}
            width={400}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Space;
