import React, { Children } from "react";

import "./Navbar.css";
import Logo from "../../assets/Logo";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex-nav">
        <a href="/" style={{textDecoration: "none", cursor: "pointer"}}>
          <Logo />
        </a>
        <a>
          <ComponentButton buttonType="navbar" text="Friend List" />
        </a>
        <a href="/profile" style={{textDecoration: "none", cursor: "pointer"}}>
          <ComponentButton buttonType="navbar" text="Profile" />
        </a>
        <a>
          <ComponentButton buttonType="navbar" text="Sign Out" />
        </a>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
