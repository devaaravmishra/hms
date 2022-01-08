import React, { useState, useContext } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import logo from "./imgs/logo.png";
import "./css/form.css";
import LoginDetails from "../Context/LoginContext";

const Login = () => {
	const { setUser, baseURL } = useContext(LoginDetails);
	const history = useHistory();
	const [credentials, setCredentials] = useState({});

	const onFormSubmit = async (event) => {
		event.preventDefault();
		await Axios.post(`${baseURL}/user/login`, credentials)
			.then(({ data }) => {
				console.info(data);
				localStorage.setItem("user", JSON.stringify(data));
				setUser(data.user);
				history.push("/appointmentpage");
				window.location.reload();
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				console.info("Login API call finished.");
			});
	};

	const toSignUp = () => {
		history.push("/signup");
	};

	return (
		<React.Fragment>
			<div id={"super-container"}>
				<Navbar />
				<div className={"parent-container"}>
					<form id={"login-container"}>
						<img src={logo} alt={"Health Insurance"} />
						<br />
						<br />
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
						<br />
						<br />
						<br />
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
						<button
							id={"submit"}
							type={"submit"}
							onClick={onFormSubmit}
						>
							Login
						</button>
						<br />
						<br />
						<span className={"spantext"}>
							Doesn't have one, Create here.
						</span>
						<br />
						<button
							id={"lastbtn"}
							type={"button"}
							onClick={toSignUp}
						>
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
