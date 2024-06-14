import React from "react";

import "./Navbar.css";
import Logo from "../../assets/Logo";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";

const Navbar = () => {
  return (
    <div className="flex-nav">
      <Logo />
      <ComponentButton buttonType="navbar" text="Friend List" />
      <ComponentButton buttonType="navbar" text="Profile" />
      <ComponentButton buttonType="navbar" text="Sign Out" />
    </div>
  );
};

export default Navbar;
