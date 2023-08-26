import React from "react";
import TopLinks from "./TopLinks";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full">
      <TopLinks />
    </nav>
  );
};

export default Navbar;
