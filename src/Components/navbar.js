import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const refresh = () => {
    window.location.reload(false);
  };
  return (
    <div className={"navbar"}>
      <div className={"nav-container"}>
        <h1
          onClick={() => {
            history.push("/");
            refresh();
          }}
          className={"nav-head"}
        >
          Hospital
        </h1>
      </div>
      <ul className={"nav-links"}>
        <li>
          <a href={"/"}>Home</a>
        </li>
        <li>
        <a href={"/login"}>Login</a>
        </li>
        <li>
        <a href={"/signup"}>Sign Up</a>
        </li>
        <li>
        <a rel="noreferrer" href={"https://github.com/Aarav619/hms-frontend"} target={"_blank"}>About-Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
