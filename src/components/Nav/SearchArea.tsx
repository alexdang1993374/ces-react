import { cart, logo, register, user } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchArea = () => {
  const [searchValue, setSearchValue] = useState("");

  const clearSearch = () => {
    setSearchValue("");
  };

  return (
    <div className="w-full flex justify-between py-[1rem] px-[2rem] bg-white">
      <div className="flex gap-[3rem] items-center">
        <Image alt="logo" src={logo} width={122} height={88} />

        <div className="flex items-center">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Enter keyword, item, model, or part number"
            className="text-[1.2rem] w-[45rem] focus:border-none outline-none placeholder-gray-500"
          />

          {searchValue && (
            <div className="flex justify-end items-center">
              <button
                className="w-10 h-10  text-gray-400 absolute transform flex justify-center items-center"
                onClick={clearSearch}
              >
                <ClearRoundedIcon fontSize="large" />
              </button>
            </div>
          )}

          <button className="w-[5rem] h-[5rem] bg-red-600 flex justify-center items-center">
            <SearchRoundedIcon fontSize="large" className="text-white" />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-end gap-4">
        <div className="flex gap-6 font-bold text-[1.4rem] justify-end">
          <div className="flex gap-2 items-center">
            <p className="text-red-500">Trade Account Login</p>

            <Image alt="user" src={user} width={20} height={25} />
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-red-500">Sign Up</p>

            <Image alt="user" src={register} width={25} height={25} />
          </div>

          <div className="flex gap-2 items-center">
            <p>
              <span className="text-red-500">Cart</span> | 0 Items
            </p>

            <Image alt="user" src={cart} width={25} height={25} />
          </div>
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
