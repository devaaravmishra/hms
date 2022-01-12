import React, { useContext, useEffect } from "react";

import Footer from "./footer";
import Header from "./header";
import LoginDetails from "../context/LoginContext";

import "../assets/css/main.css";

const HomePage = () => {
	const { loggedIn } = useContext(LoginDetails);

	useEffect(() => {
		if (loggedIn) {
			window.location.href = "/appointmentpage";
		}
	});

	const onAppointmentBook = () => {
		window.location.href = "/login";
	};

	return (
		<React.Fragment>
			<Header />
			<div className={"services"} id={"services"}>
				<h1 id={"services-head"}>Best in Town</h1>
				<div className={"container1"}>
					<div className={"service"}>
						<i className={"fa fa-bed fa-3x"}></i>
						<h4>Emergencies</h4>
					</div>
					<div className={"service"}>
						<i className={"fa fa-ambulance fa-3x"}></i>
						<h4>Ambulance</h4>
					</div>
					<div className={"service"}>
						<i className={"fa fa-medkit fa-3x"}></i>
						<h4>Medical Kit</h4>
					</div>
				</div>
				<div className={"container2"}>
					<div className={"service"}>
						<i className={"fa fa-wheelchair fa-3x"}></i>
						<h4>Wheelchair</h4>
					</div>
					<div className={"service"}>
						<i className={"fas fa-flask fa-3x"}></i>
						<h4>Laboratory</h4>
					</div>
					<div className={"service"}>
						<i className={"fas fa-phone fa-3x"}></i>
						<h4>
							24x7
							<br />
							Helpline
						</h4>
					</div>
				</div>
			</div>
			<div id={"book-appointment"}>
				<h4 id={"book-apt-head"}>
					Its hassle free, book an appointment with our system online!
				</h4>
				<button id={"book-btn"} onClick={onAppointmentBook}>
					Login to Book
				</button>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default HomePage;
