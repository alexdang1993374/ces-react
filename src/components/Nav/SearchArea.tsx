import { cart, logo, register, user } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

const SearchArea = () => {
  return (
    <div className="w-full flex justify-between py-[1rem] px-[2rem] bg-white">
      <Link href="/">
        <Image alt="logo" src={logo} width={122} height={88} />
      </Link>

      <SearchBar />

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
