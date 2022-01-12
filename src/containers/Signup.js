import Axios from "axios";
import React, { useState, useContext } from "react";

import Footer from "../components/footer";
import LoginDetails from "../context/LoginContext";
import Navbar from "../components/navbar";

import logo from "../assets/imgs/logo.png";
import "../assets/css/form.css";

const Signup = () => {
	const [user, setUser] = useState({});
	const { baseURL } = useContext(LoginDetails);
	const onFormSubmit = async (event) => {
		event.preventDefault();
		await Axios.post(`${baseURL}/user/signup`, user)
			.then(({ data }) => {
				console.info(data);
				localStorage.setItem("user", JSON.stringify(data));
				window.location.href = "/";
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				console.info("Login API call finished.");
			});
	};

	return (
		<React.Fragment>
			<div id={"super-container"}>
				<Navbar />
				<div className={"parent-container"}>
					<form id={"signin-container"}>
						<img src={logo} alt={"Health Insurance"} />
						<div className={"input-container"}>
							<i className={"fa fa-user icon"}></i>
							<input
								className={"logininput"}
								type={"name"}
								name={"name"}
								placeholder={"Name"}
								required
								onChange={(e) => {
									setUser({ ...user, name: e.target.value });
								}}
							/>
						</div>
						<div className={"input-container"}>
							<i className={"fa fa-envelope icon"}></i>
							<input
								className={"logininput"}
								type={"email"}
								name={"email"}
								placeholder={"Email"}
								required
								onChange={(e) => {
									setUser({ ...user, email: e.target.value });
								}}
							/>
						</div>
						<div className={"input-container"}>
							<i className="fa fa-fingerprint icon"></i>
							<input
								className={"logininput"}
								type={"password"}
								name={"password"}
								placeholder={"Password"}
								required
								onChange={(e) => {
									setUser({
										...user,
										password: e.target.value,
									});
								}}
							/>
						</div>
						<div className={"input-container"}>
							<i className={"fa fa-clock icon"}></i>
							<input
								className={"logininput"}
								type={"number"}
								name={"age"}
								placeholder={"Age"}
								required
								onChange={(e) => {
									setUser({ ...user, age: e.target.value });
								}}
							/>
						</div>
						<button
							id={"submit"}
							type={"submit"}
							onClick={onFormSubmit}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Signup;
