import React, { useContext } from "react";

import LoginDetails from "../context/LoginContext";

const Navbar = () => {
	const { loggedIn, user } = useContext(LoginDetails);
	return !loggedIn ? (
		<div className={"navbar"}>
			<div className={"nav-container"}>
				<h1
					onClick={() => {
						window.location.href = "/";
					}}
					className={"nav-head"}>
					HMS
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
					<a
						rel="noreferrer"
						href={"https://github.com/Aarav619/hms-frontend"}
						target={"_blank"}>
						About-Us
					</a>
				</li>
			</ul>
		</div>
	) : (
		<div className={"navbar"}>
			<div className={"nav-container"}>
				<h1
					onClick={() => {
						window.location.href = "/";
					}}
					className={"nav-head"}>
					HMS
				</h1>
			</div>
			<ul className={"nav-links"}>
				<li>
					<a href={"/appointmentpage"}>{user.name}</a>
				</li>
				<li>
					<a href={"/appointments"}>Book Appoinment</a>
				</li>
				<li>
					<a
						rel="noreferrer"
						href={"https://github.com/Aarav619/hms-frontend"}
						target={"_blank"}>
						About-Us
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
