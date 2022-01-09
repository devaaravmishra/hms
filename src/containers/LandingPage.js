import Axios from "axios";
import React, { useEffect, useState, useContext } from "react";

import AppointmentCard from "../components/appointmentCards";
import Footer from "../components/footer";
import LoginDetails from "../context/LoginContext";
import Navbar from "../components/navbar";

import "../assets/css/main.css";

const LandingPage = () => {
	const { user, loggedIn, baseURL } = useContext(LoginDetails);
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		if (loggedIn) {
			const fetchAppointments = async () => {
				await Axios.get(`${baseURL}/user/getApt/${user._id}`)
					.then(({ data: foundAppointments }) => {
						console.info(
							`Appointments were found for user with name:${user.name}`
						);
						setAppointments(foundAppointments);
					})
					.catch((error) => {
						console.error(
							`Some error occured while fetching Appoinment for user :${user.name}`,
							error
						);
					});
			};
			fetchAppointments();
			if (!loggedIn) {
				setTimeout(() => {
					window.location.href = "/"
				}, 10);
			}
		}
		// eslint-disable-next-line
	}, [user]);

	const BookMore = () => {
		window.location.href = "/appointments"
	};

	const onLogout = () => {
		localStorage.clear();
		window.location.href = "/"
	};
	const renderAppointments = appointments.map((appointment, index) => {
		return <AppointmentCard appointment={appointment} key={index} />;
	});

	return (
		<React.Fragment>
			<div id={"apt-container"}>
				<Navbar />
				<br />
				<h1 id={"welcome-head"}>Welcome,&nbsp;{user.name}!</h1>
				<p id={"Appointment-sub-head"}>
					Get all your pending appointments here.
				</p>
				<button id={"apt-bookmore-btn"} onClick={BookMore}>
					Book More
				</button>
				<button onClick={onLogout} id={"logout-btn"}>
					Logout
				</button>
				<br />
				<br />
				<div id={"appointments-cards"}>{renderAppointments}</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};
export default LandingPage;
