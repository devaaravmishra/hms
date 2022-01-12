import React, { useState, useContext } from "react";
import Navbar from "../components/navbar";
import Axios from "axios";

import Footer from "../components/footer";
import LoginDetails from "../context/LoginContext";

import logo from "../assets/imgs/logo.png";
import "../assets/css/form.css";

const Login = () => {
	const { setUser, baseURL } = useContext(LoginDetails);
	const [credentials, setCredentials] = useState({});

	const onFormSubmit = async (event) => {
		event.preventDefault();
		await Axios.post(`${baseURL}/user/login`, credentials)
			.then(({ data }) => {
				console.info(data);
				localStorage.setItem("user", JSON.stringify(data));
				setUser(data.user);
				window.location.href = "/appointmentpage";
			})
			.catch((error) => {
				var incCredentials = document.getElementById(
					"Incorrect-credentials"
				);
				incCredentials.style.display = "block";
			})
			.finally(() => {
				console.info("Login API call finished.");
			});
	};

	const toSignUp = () => {
		window.location.href = "/signup";
	};

	return (
		<React.Fragment>
			<div id={"super-container"}>
				<Navbar />
				<div className={"parent-container"}>
					<form id={"login-container"}>
						<img src={logo} alt={"Health Insurance"} />
						<div className={"input-container"}>
							<i className={"fa fa-envelope icon"}></i>
							<input
								className={"logininput"}
								type={"email"}
								name={"email"}
								placeholder={"Email *"}
								required
								onChange={(e) => {
									setCredentials({
										...credentials,
										email: e.target.value,
									});
								}}
							/>
						</div>
						<div className="input-container">
							<i className="fa fa-lock icon"></i>
							<input
								className={"logininput"}
								type={"password"}
								name={"password"}
								placeholder={"Password *"}
								required
								onChange={(e) => {
									setCredentials({
										...credentials,
										password: e.target.value,
									});
								}}
							/>
						</div>
						<div id={"Incorrect-credentials"}>
							Incorrect Email or Password!
						</div>
						<button
							id={"submit"}
							type={"submit"}
							onClick={onFormSubmit}>
							Login
						</button>
						<span className={"spantext"}>
							Doesn't have one, Create here.
						</span>
						<button
							id={"lastbtn"}
							type={"button"}
							onClick={toSignUp}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Login;
