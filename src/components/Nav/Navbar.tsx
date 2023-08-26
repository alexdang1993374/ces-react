import React from "react";
import TopLinks from "./TopLinks";
import Banner from "./Banner";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full">
      <TopLinks />

      <Banner />
    </nav>
  );
};

export default Navbar;
