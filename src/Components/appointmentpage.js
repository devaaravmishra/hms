import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";
import AppointmentCard from "./apt-cards";
import { useHistory } from "react-router";
import "./css/main.css";

const AppointmentPage = ({baseURL, user, loggedIn}) => {
  const [appointments, setAppointments] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if(loggedIn.current){
      const fetchAppointments = async () => {
        await Axios.get(`https://hmsystem-backend.herokuapp.com/user/getApt/${user._id}`)
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
    }
    // eslint-disable-next-line
  }, [user]);
  
  const reloadToTop = () => {
		window.location.reload(false)
	};

  const BookMore = () => {
    history.push("/appointments");
    reloadToTop();
  }

  const renderAppointments = appointments.map((appointment, index) => {
    return <AppointmentCard appointment={appointment} key={index} />;
  });

  return (
    <React.Fragment>
      <div id={"apt-container"}>
        <Navbar />
        <br />
        <h1 id={"welcome-head"}>Welcome , {user.name}!</h1>
        <p id={"Appointment-sub-head"}>Get all your pending appointments here.</p>
          <button id={"apt-bookmore-btn"} onClick={BookMore}>
            Book More
          </button>
        <br/>
        <br/>
        <div id={"appointments-cards"}>
            {renderAppointments}
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
};
export default AppointmentPage;
