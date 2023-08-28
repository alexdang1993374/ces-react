import Center from "@/components/Center";
import React from "react";
import productList from "../../constants/data.json";
import ProductCard from "@/components/ProductCard";

const ProductPage = () => {
  console.log(productList);

  return (
    <Center>
      <div className="flex">
        <div className="w-[30rem] h-[69rem] bg-red-600 relative flex items-center justify-center">
          <div className="w-full h-full flex flex-col gap-6">
            <div className="w-full bg-gray-500 p-4">
              <p className="uppercase text-[2rem]">all products</p>
            </div>

            <div className="w-full flex items-center cursor-pointer text-[1.3rem] font-bold text-gray-600 p-4 hover:bg-gray-500 hover:text-white">
              <p>Options</p>
            </div>
          </div>
        </div>

        <div className=" h-screen p-8 flex flex-1 flex-col gap-6">
          <h1 className="text-[2.6rem]">Portable Generators</h1>

          <div className="grid grid-cols-3 gap-3">
            {productList.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </Center>
  );
};

export default ProductPage;
