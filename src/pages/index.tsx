import Center from "@/components/Center";
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
              <p>content</p>
            </div>

            {isMenuOpen && (
              <div
                className="absolute top-0 left-full w-[60rem] h-[64rem] bg-blue-400 p-6"
                onMouseEnter={handleOpenMenu}
                onMouseLeave={handleMouseLeave}
              >
                menu content
              </div>
            )}
          </div>

          <div className="w-[60rem] h-[69rem] flex items-center justify-center border border-black">
            featured product
          </div>
        </div>
      </Center>
    </div>
  );
}
