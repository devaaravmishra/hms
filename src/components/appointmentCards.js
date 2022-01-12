import React from "react";

import logo from "../assets/imgs/vaccine.png";

const AppointmentCards = (props) => {
	const { appointment } = props;
	var slot = "7AM - 10AM";
	var dateofAppointment = appointment.date.toString().slice(0, 10);
	if (appointment.slot === 1) {
		slot = "12PM - 4PM";
	}
	if (appointment.slot === 3) {
		slot = "6PM - 11 PM";
	}
	return (
		<div className={"card"}>
			<img src={logo} className={"card-img-top"} alt={"vaccine"} />
			<div className={"card-body"}>
				<h5>Date: {dateofAppointment}</h5>
				<p className={"card-text"}>Slot: {slot}</p>
			</div>
		</div>
	);
};

export default AppointmentCards;
