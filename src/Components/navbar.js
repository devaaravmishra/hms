import React from "react";
const Navbar = () => {
  return (
    <div className={"navbar"}>
      <div className={"nav-container"}>
        <h1 className={"nav-head"}>Hospital</h1>
      </div>
      <ul className={"nav-links"}>
        <li>
          <a href={"/"}>Home</a>
        </li>
        <li>
          <a href={"#services"}>Services</a>
        </li>
        <li>
          <a href={"/login"}>Login</a>
        </li>
        <li>
          <a href={"/signin"}>Sign Up</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
