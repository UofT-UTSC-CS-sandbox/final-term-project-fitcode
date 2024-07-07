import React, { Children } from "react";

import "./Navbar.css";
import Logo from "../../assets/Logo";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";
import { Form, Outlet } from "react-router-dom";

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
        <form method="post" action="/accounts/logout/">
          <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
          <ComponentButton buttonType="navbar" text="Sign Out" />
          <input type="hidden" name="next" value="/"/>
        </form>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
