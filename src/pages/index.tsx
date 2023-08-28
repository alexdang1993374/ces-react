import Center from "@/components/Center";
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
      <div className="w-full h-[69rem] bg-gray-300">
        <Center>
          <div className="flex">
            <div className="w-[30rem] h-[69rem] bg-red-600 relative flex items-center justify-center">
              <div
                className="w-full flex items-center justify-center cursor-pointer"
                id="content-container"
                onMouseEnter={handleOpenMenu}
                onMouseLeave={handleMouseLeave}
              >
                <p>Generators</p>
              </div>

              {isMenuOpen && (
                <div
                  className="absolute top-0 left-full w-[60rem] h-[64rem] bg-blue-400 p-10 flex gap-4"
                  onMouseEnter={handleOpenMenu}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="bg-gray-300 w-[10rem] h-[10rem] flex items-center justify-center cursor-pointer"
                    href={`/product/portableGenerators`}
                  >
                    Portable Generator
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
