import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";

import Login from "./Components/loginpage";
import Signup from "./Components/signuppage";
import Homepage from "./Components/homepage";
import Appointment from "./Components/appointment";
import AppointmentPage from "./Components/appointmentpage";
import LoginDetails from "./Context/LoginContext";
import { BASE_URL } from "./config/base";

const App = () => {
	const [user, setUser] = useState({});
	const [loggedIn, setLoggedIn] = useState(false);
	const baseURL = BASE_URL;

	useEffect(() => {
		const savedUser = localStorage.getItem("user");
		if (!loggedIn && savedUser) {
			setUser(JSON.parse(savedUser).user);
			console.log(user);
			setLoggedIn(true);
		}
		// eslint-disable-next-line
	}, []);

	return (
		<LoginDetails.Provider value={{ loggedIn, user, setUser, baseURL }}>
			<Router>
				<div>
					<Switch>
						<Route path={"/"} exact>
							<Homepage />
						</Route>
						<Route path={"/login"}>
							<Login />
						</Route>
						<Route path={"/signup"}>
							<Signup />
						</Route>
						<Route path={"/appointments"}>
							<Appointment />
						</Route>
						<Route path={"/appointmentpage"}>
							<AppointmentPage />
						</Route>
						<Route path={"/about-us"}>
							<Redirect to={"/#about-us"} />
						</Route>
						<Route path={"/404"}>
							<h1>Page not found</h1>
						</Route>
						<Route path={"/**"}>
							<Redirect to={"/404"} />
						</Route>
					</Switch>
				</div>
			</Router>
		</LoginDetails.Provider>
	);
};

export default App;
