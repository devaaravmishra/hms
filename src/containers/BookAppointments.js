import Axios from "axios";
import React, { useState, useContext } from "react";

import Footer from "../components/footer";
import LoginDetails from "../context/LoginContext";
import Navbar from "../components/navbar";

import logo from "../assets/imgs/Doctor_20.png";
import "../assets/css/form.css";

const BookAppointments = () => {
	const { user, baseURL } = useContext(LoginDetails);
	const [appointment, setAppointment] = useState({});

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
						<div className={"radio-container"}>
							<h3 id={"radio-container-head"}>
								Choose time slot
							</h3>
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
							<span className={"slots-desc"}>(1) 7AM - 10AM</span>
							<span className={"slots-desc"}>
								&nbsp;&nbsp;(2) 12PM - 4PM
							</span>
							<span className={"slots-desc"}>
								&nbsp;&nbsp;(3) 6PM - 11PM
							</span>
						</div>
						<button
							id={"submit"}
							type={"submit"}
							onClick={onMakeAppointment}>
							Book
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default BookAppointments;
