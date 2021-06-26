import React from "react";

const Navbar= () =>{ 
    return (
        <div className={"navbar"}>
            <div className={"nav-container"}>
            <i className={"fa fa-hospital-user fa-2x"}></i>&nbsp;&nbsp;
            <h1 className={"nav-head"}>Hospital</h1>
            </div>        
        <ul className={"nav-links"}>
            <li><a href={"#"}>Home</a></li>
            <li><a href={"#services"}>Services</a></li>
            <li><a href={"#"}>Login</a></li>
            <li><a href={"#"}>Sign Up</a></li>
        </ul>
    </div>
    )
}

export default Navbar;