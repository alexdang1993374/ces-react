import React from "react";
import TopLinks from "./TopLinks";
import Banner from "./Banner";
import SearchArea from "./SearchArea";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full border-b-[0.1rem] border-black">
      <TopLinks />

      <Banner />

      <SearchArea />
    </nav>
  );
};

export default Navbar;
