import Image from "next/image";
import React from "react";

const links = [1, 2, 3, 4];

interface ProductCartProps {
  id: string;
  name: string;
  availability: number;
  price: string;
  image: string;
}

const ProductCard = ({
  id,
  name,
  availability,
  price,
  image,
}: ProductCartProps) => {
  return (
    <div className="w-[26.6rem] h-[56rem] border border-black flex flex-col p-4">
      <div className="w-full h-1/2 border border-black flex items-center justify-center">
        <Image
          alt="Product Image"
          src={image}
          width={200}
          height={200}
          className="object-cover"
        />
      </div>

      <div className="flex w-full h-[8%]">
        <div className="w-1/3 h-full flex items-center justify-center border border-black">
          1
        </div>

        <div className="w-full bg-red-600 flex items-center justify-center uppercase">
          add to cart
        </div>
      </div>

      <div className="w-full h-[8%] flex items-center justify-between gap-2">
        {links.map((link) => (
          <div
            key={link}
            className="w-[5.5rem] h-full flex items-center justify-center border border-black"
          >
            {link}
          </div>
        ))}
      </div>

      <div className="w-full h-[34%] flex flex-col justify-between py-4">
        <p className="text-[1.4rem] font-bold">{name}</p>

        <p className="text-[1.2rem]">Available: {availability}</p>

        <p className="text-[1.8rem] font-bold text-green-500">{price} per 1</p>
      </div>
    </div>
  );
};

export default ProductCard;
