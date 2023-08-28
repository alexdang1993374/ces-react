import Center from "@/components/Center";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-[69rem] bg-gray-400">
        <Center>
          <div className="flex">
            <div className="w-[30rem] h-[69rem] bg-gray-200 relative flex items-center justify-center">
              <div className="w-full h-full flex flex-col gap-6">
                <div className="w-full bg-gray-300 p-4">
                  <p className="text-[2rem]">All Products</p>
                </div>

                <div
                  className={`w-full flex items-center cursor-pointer text-[1.3rem] font-bold p-4 ${
                    isMenuOpen ? "bg-gray-500 text-white" : "text-gray-700"
                  }`}
                  id="content-container"
                  onMouseEnter={handleOpenMenu}
                  onMouseLeave={handleMouseLeave}
                >
                  <p>Generators</p>
                </div>
              </div>

              {isMenuOpen && (
                <div
                  className="absolute top-0 left-full w-[60rem] h-[64rem] bg-white p-10 flex gap-4"
                  onMouseEnter={handleOpenMenu}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="bg-gray-300 w-[15rem] h-[15rem] flex flex-col cursor-pointer text-[1.2rem] gap-2 hover:text-red-600"
                    href={`/product/portableGenerators`}
                  >
                    <div className="w-full h-[80%]">
                      <Image
                        alt="generator"
                        src="https://cesonline.azureedge.net/media/generac/7683/images/generac_7683_p_med.png"
                        width={200}
                        height={200}
                        className="object-cover"
                      />
                    </div>

                    <div className="w-full h-[20%] flex items-center justify-center">
                      <p>Portable Generators</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <div className="w-[60rem] h-[69rem] flex items-center justify-center border border-black">
              featured product
            </div>
          </div>
        </Center>
      </div>

      <Center>
        <div className="w-full flex items-center justify-center">
          <p className="text-[3.6rem] font-light">
            Welcome to <b>City Electric Supply.</b> The Power to Supply You!
          </p>
        </div>

        <div className="w-full flex items-center justify-center text-center">
          <p className="text-[1.7rem] font-light">
            City Electric Supply is a family-owned electrical wholesale business
            dedicated to providing the best service and support for customers in
            the residential, commercial, and industrial markets since 1983.
            Learn more about us.
          </p>
        </div>
      </Center>
    </div>
  );
}
