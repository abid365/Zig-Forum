import FooterItems from "@/app/components/FooterItems";
import React from "react";
import { PiShootingStarBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-black text-white h-2/5">
      <div className="h-1 bg-sky-400"></div>
      <div className="py-8 px-10 mt-3">
        {/* parent div for upper footer section */}
        {/* left side */}
        <div>
          <h1 className="text-lg font-semibold">
            <PiShootingStarBold className="inline-block text-2xl" />
            Zig Forum
          </h1>
          <p className="text-xs py-3">
            Connect with expertise <br />
            and get reliable solutions
          </p>
          <div className="mt-4">
            <FooterItems
              li1={"Overview"}
              li2={"Features"}
              li3={"Pricing"}
              li4={"Careers"}
              li5={"Help"}
              li6={"Privacy"}
            ></FooterItems>
          </div>
        </div>
        {/* right side */}
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
