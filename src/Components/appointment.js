import React, { useEffect, useState, useContext } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "./css/form.css";
import logo from "./imgs/Doctor_20.png";
import LoginDetails from "../Context/LoginContext";

import Axios from "axios";
const Appointment = () => {
	const { user, loggedIn, baseURL } = useContext(LoginDetails);
	const [appointment, setAppointment] = useState({});

	useEffect(() => {
		if (!loggedIn) {
			window.alert("Login to make an appointment");
			setTimeout(() => {
				window.location.href = "/login"
			}, 50);
		}
	});

	const onMakeAppointment = async (e) => {
		e.preventDefault();
		await Axios.post(`${baseURL}/user/makeApt`, {
			...appointment,
			pid: user._id,
		})
			.then(() => {
				window.alert("Your appointment successfully scheduled.");
			})
			.catch((error) => {
				console.error(
					"Some error occurred while making appointment",
					error
				);
			});
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
							<i className={"fa fa-calendar-check icon"}></i>
							<input
								id={"dateinput"}
								type={"date"}
								name={"date"}
								placeholder={"Date *"}
								required
								onChange={(e) => {
									setAppointment({
										...appointment,
										date: Date.parse(e.target.value),
									});
								}}
							/>
						</div>
						<br />
						<br />
						<div className={"radio-container"}>
							<h3 id={"radio-container-head"}>
								Choose time slot
							</h3>
							<br />
							<br />
							<label>
								<input
									className={"radio"}
									type="radio"
									name="slot"
									tabIndex="1"
									value={1}
									onChange={(e) => {
										setAppointment({
											...appointment,
											slot: e.target.value,
										});
									}}
								/>
								<span className={"radio-text"}>1</span>
								&nbsp;&nbsp;
							</label>
							<label>
								<input
									className={"radio"}
									type="radio"
									name="slot"
									tabIndex="2"
									value={2}
									onChange={(e) => {
										setAppointment({
											...appointment,
											slot: e.target.value,
										});
									}}
								/>
								<span className={"radio-text"}>2</span>
								&nbsp;&nbsp;
							</label>
							<label>
								<input
									className={"radio"}
									type="radio"
									name="slot"
									tabIndex="3"
									value={3}
									onChange={(e) => {
										setAppointment({
											...appointment,
											slot: e.target.value,
										});
									}}
								/>
								<span className={"radio-text"}>3</span>
							</label>
							<br />
							<br />
							<span className={"slots-desc"}>1. 7AM - 10AM</span>
							<span className={"slots-desc"}>
								&nbsp;&nbsp;2. 12PM - 4PM
							</span>
							<span className={"slots-desc"}>
								&nbsp;&nbsp;3. 6PM - 11 PM
							</span>
						</div>
						<button
							id={"submit"}
							type={"submit"}
							onClick={onMakeAppointment}
						>
							Book
						</button>
						<br />
						<br />
						<br />
					</form>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Appointment;
