import React from "react";

const TopLinks = () => {
  return (
    <div className="w-full flex justify-between items-center p-[1rem] font-bold text-[1.2rem]">
      <div className="flex gap-4">
        <div className="flex gap-1">
          <p>USA</p>

          <p className="text-[#5297ff]">Change to Canada</p>
        </div>

        <div className="flex gap-2 text-[#5297ff]">
          <p>Email Us</p>

          <p>or</p>

          <p>1-866-634-9853</p>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <p>
          Ship to:{" "}
          <span className="text-[#5297ff] decoration-solid underline">
            89044
          </span>
        </p>

        <p>Order Products</p>

        <p>Pay Bill</p>
      </div>
    </div>
  );
};

export default TopLinks;
