import { logo } from "@/assets";
import Image from "next/image";
import React from "react";

const SearchArea = () => {
  return (
    <div className="w-full flex justify-between p-[1rem]">
      <div className="flex gap-10 items-center">
        <Image alt="logo" src={logo} width={122} height={88} />

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter keyword, item, model, or part number"
            className="text-[1.2rem] w-[45rem] focus:border-none outline-none placeholder-gray-500"
          />

          <button className="w-[5rem] h-[5rem] bg-red-600"></button>
        </div>
      </div>

      <div className="flex flex-col justify-end gap-4">
        <div className="flex gap-6 font-bold text-[1.4rem] justify-end">
          <p className="text-red-500">Trade Account Login</p>

          <p className="text-red-500">Sign Up</p>

          <p>
            <span className="text-red-500">Cart</span> | 0 Items
          </p>
        </div>

        <div className="flex justify-end gap-6 font-bold text-[1.4rem] uppercase">
          <p>company</p>

          <p>manufacturers</p>

          <p>services</p>

          <p>branch locator</p>

          <p>contact us</p>
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
