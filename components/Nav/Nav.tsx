import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Nav = () => {
  return (
    <nav className="flex justify-end">
      <DarkModeToggle />
    </nav>
  );
};

export default Nav;
