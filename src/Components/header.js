import React from "react";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className={"header"}>
      <Navbar />
      <div className={"welcome-container"}>
        <h1 className={"welcome-head"}>Stay Safe and Secure</h1>
        <button className={"about-us"}>About-us</button>
      </div>
    </header>
  );
};
export default Header;
