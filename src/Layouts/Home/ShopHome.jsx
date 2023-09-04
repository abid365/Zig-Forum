import Image from "next/image";
import React from "react";

const ShopHome = () => {
  return (
    <div className="bg-black text-white py-14 px-10">
      <div>
        <h1 className="lg:text-4xl font-semibold">
          Buy anything from <br /> our dev shop{" "}
          <Image
            className="inline-block"
            src={"/sunglasses.png"}
            alt=""
            height={30}
            width={30}
          ></Image>
        </h1>
      </div>
    </div>
  );
};

export default ShopHome;
