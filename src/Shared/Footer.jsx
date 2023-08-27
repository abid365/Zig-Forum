import FooterItems from "@/app/components/FooterItems";
import React from "react";
import { PiShootingStarBold } from "react-icons/pi";
import { PiDevToLogoFill } from "react-icons/pi";
import { BsApple, BsGooglePlay } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-white h-2/5">
      <div className="h-1 bg-sky-400"></div>
      <div className="py-8 px-10 mt-3 grid grid-cols-2">
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
        <div className="lg:place-self-end">
          <h1 className="text-sm">Download the app</h1>

          <div className="flex gap-4">
            {/* google play */}
            <div className="border my-3 px-2 py-1 flex items-center gap-3">
              <BsGooglePlay className="inline-block text-lg" />
              <div>
                <h1 className="text-[7px] text-right">Get the app from</h1>
                <h1 className="text-[10px]">Google Play</h1>
              </div>
            </div>

            {/* app store */}
            <div className="border my-3 px-4 py-2 flex items-center gap-3">
              <BsApple className="inline-block text-lg" />
              <div>
                <h1 className="text-[7px] text-right">Get the app from</h1>
                <h1 className="text-[10px]">App Store</h1>
              </div>
            </div>
          </div>

          <h1 className="text-xs">
            Loved by the <PiDevToLogoFill className="inline-block text-2xl" />
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
