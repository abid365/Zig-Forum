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
          className={`${order} place-self-center p-10 border border-emerald-400`}
        >
          <Image src={imageURL} alt="Image" height={300} width={300}></Image>
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
          <span className="border-b-2 border-emerald-400">ace</span> for <br />{" "}
          <span className="text-emerald-400">con</span>
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
          imageURL={""}
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
        ></CustomSection>

        {/*Productive coversations */}
        <CustomSection
          customStyle={commonStyels}
          headerText={"Productive Conversations"}
          sectionHeader={"Coding challenge made easy: collaborate and gather"}
          sectionDesc={
            "Coding Problems? Find Solutions, Share Insights, and Chart Your Learning Journey Here!, made a headline for this"
          }
        ></CustomSection>
      </div>
    </div>
  );
};

export default Space;
