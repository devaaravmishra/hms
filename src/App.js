import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";

import { BASE_URL } from "./config/base";
import BookAppointments from "./containers/BookAppointments";
import LandingPage from "./containers/LandingPage";
import Login from "./containers/Login";
import LoginDetails from "./context/LoginContext";
import HomePage from "./components/Home";
import Signup from "./containers/Signup";

const App = () => {
	const [user, setUser] = useState({});
	const [loggedIn, setLoggedIn] = useState(false);
	const baseURL = BASE_URL;

	useEffect(() => {
		const savedUser = localStorage.getItem("user");
		if (!loggedIn && savedUser) {
			setUser(JSON.parse(savedUser).user);
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
							<HomePage />
						</Route>
						<Route path={"/login"}>
							<Login />
						</Route>
						<Route path={"/signup"}>
							<Signup />
						</Route>
						<Route path={"/appointments"}>
							<BookAppointments />
						</Route>
						<Route path={"/appointmentpage"}>
							<LandingPage />
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
