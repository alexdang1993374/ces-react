import { billPay, map, orderHistory, usFlag } from "@/assets";
import Image from "next/image";
import React from "react";

const TopLinks = () => {
  return (
    <div className="w-full flex justify-between items-center p-[1rem] font-bold text-[1.2rem]">
      <div className="flex gap-4">
        <div className="flex gap-2">
          <Image alt="USA" src={usFlag} width={22} height={12} />

          <p>USA</p>

          <p className="text-[#5297ff]">Change to Canada</p>
        </div>

        <div className="flex gap-2 text-[#5297ff]">
          <p>Email Us</p>

          <p>or</p>

          <p>1-866-634-9853</p>
        </div>
      </div>

      <div className="flex justify-end gap-6">
        <div className="flex items-end gap-1">
          <Image alt="map" src={map} width={22} height={20} />

          <p>
            Ship to:{" "}
            <span className="text-[#5297ff] decoration-solid underline">
              89044
            </span>
          </p>
        </div>

        <div className="flex items-end gap-1">
          <Image alt="map" src={orderHistory} width={22} height={20} />

          <p>Order Products</p>
        </div>

        <div className="flex items-end gap-1">
          <Image alt="map" src={billPay} width={22} height={20} />

          <p>Pay Bill</p>
        </div>
      </div>
    </div>
  );
};

export default TopLinks;
