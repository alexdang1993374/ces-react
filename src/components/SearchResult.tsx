import Image from "next/image";
import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

interface SearchResultProps {
  id: string;
  name: string;
  availability: number;
  price: string;
  image: string;
}

const SearchResult = ({
  id,
  name,
  availability,
  price,
  image,
}: SearchResultProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full h-[15rem] border-b border-black flex gap-2 px-2">
      <div className="w-[20%] h-full py-2">
        <Image alt="Product Imgae" src={image} width={100} height={100} />
      </div>

      <div className="flex flex-col w-[50%] h-full justify-between p-4 text-[1.2rem]">
        <p className="font-bold">{name}</p>

        <p>Available: {availability}</p>

        <p className="font-bold">{price} per 1</p>
      </div>

      <div className="w-[30%] h-1/3 flex px-4 justify-between">
        <button className="flex w-[20%]">
          <p className="font-bold text-[2rem]">...</p>
        </button>

        <div className="w-[40%] flex items-center justify-center">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
            className="border border-black w-1/2 text-center"
          />
        </div>

        <div className="w-[40%] flex items-center justify-center">
          <button className="w-full h-[2.6rem] bg-red-600 flex items-center justify-center p-2 gap-2">
            <p className="text-[1.2rem] font-bold uppercase text-white">Add</p>

            <ShoppingCartOutlinedIcon className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
