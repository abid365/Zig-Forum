import Image from "next/image";
import React from "react";

// custom component for space sections
const CustomSection = ({
  customStyle,
  sectionHeader,
  sectionDesc,
  imageURL,
  headerText,
  order,
}) => {
  return (
    <div className="py-5">
      <div className={customStyle}>
        <div>
          <h1 className="my-10 font-semibold text-sm">{headerText}</h1>
          <h1 className="text-2xl w-3/4 font-bold my-2">{sectionHeader}</h1>
          <p className="my-4 text-sm text-slate-400">{sectionDesc}</p>
        </div>
        <div
          className={`${order} place-self-center border-2 border-indigo-400 rounded-md p-1`}
        >
          <Image
            className="rounded-lg"
            src={imageURL}
            alt="Image"
            height={400}
            width={400}
          ></Image>
        </div>
      </div>
    </div>
  );
};

const Space = () => {
  const commonStyels = `grid lg:grid-cols-2 grid-cols-1 gap-4`;
  return (
    <div className="px-10 py-16 relative bg-black text-white">
      <div className="flex lg:justify-between flex-col items-center mb-10">
        {/* <Image
          className="my-3"
          src="/contract.png"
          alt="forum image"
          height={100}
          width={100}
        ></Image> */}
        <span className="text-2xl absolute right-16">🐞</span>
        <h1 className="lg:text-4xl text-3xl font-semibold text-center">
          Dedicated sp
          <span className="border-b-2 border-indigo-400">ace</span> for <br />{" "}
          <span className="text-indigo-400">con</span>
          versations
        </h1>
        <p className="text-[8px] text-center py-4">
          Navigate to feed and discover hundreds of active <br />
          Communities on different niche
        </p>
      </div>

      <div className="my-5">
        {/* Proximity and visibility */}
        <CustomSection
          customStyle={commonStyels}
          headerText={"Proximity and Visibility"}
          sectionHeader={"Fuel Your Coding Curiosity: Join Our Community Today"}
          sectionDesc={
            "Communicate, collaborate, and feel more connected in a persistent space that reflects your unique team culture."
          }
          imageURL={
            "https://img.freepik.com/free-photo/team-working-animation-project_23-2149269881.jpg?w=740&t=st=1693723425~exp=1693724025~hmac=15664315d9d5a91c2c4a8b3c2df2ee86f0f7d4789bb63b65043992e95f9ef96e"
          }
        ></CustomSection>

        {/* SERENDIPITOUS MOMENTS */}
        <CustomSection
          customStyle={commonStyels}
          order={"lg:order-first"}
          headerText={"Serendipitous Moments"}
          sectionHeader={
            "Elevate Your Coding Skills: Ask, Share, and Learn with Our Dynamic Feed Feature!"
          }
          sectionDesc={
            "Supercharge Your Coding Skills: Ask, Share, and Flourish with Our Dynamic Feed Feature! Join a thriving community of passionate coders, gain expert insights, and embark on a transformative coding journey filled with confidence, success, and endless learning opportunities."
          }
          imageURL={
            "https://img.freepik.com/free-photo/ai-site-helping-with-software-production_1268-21620.jpg?w=996&t=st=1693724371~exp=1693724971~hmac=bc92f5d4e00c6ee6859f7ef8343ed41b13e8822a4504b23d185102cd123d32f0"
          }
        ></CustomSection>

        {/*Productive coversations */}
        <CustomSection
          customStyle={commonStyels}
          headerText={"Productive Conversations"}
          sectionHeader={"Coding challenge made easy: collaborate and gather"}
          sectionDesc={
            "Coding Problems? Find Solutions, Share Insights, and Chart Your Learning Journey Here!, made a headline for this"
          }
          imageURL={
            "https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=740&t=st=1693724657~exp=1693725257~hmac=5b47743a876161c9666169a8ab8ec689d62be02ad63206e841c1ea904b5c4c97"
          }
        ></CustomSection>
      </div>
    </div>
  );
};

export default Space;
