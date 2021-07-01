import React from "react";
import { useHistory } from "react-router-dom";
import "./css/homepage.css";
import Header from "./header";
import Footer from "./footer";

const Homepage = () => {
  const history = useHistory();

  const onAppointmentBook = () => {
    history.push("/appointments");
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <Header />
      <div className={"services"} id={"services"}>
        <h1 id={"services-head"}>Best in Town</h1>
        <div className={"container1"}>
          <div className={"service"}>
            <i className={"fa fa-bed fa-3x"}></i>
            <h2>Emergencies</h2>
          </div>
          <div className={"service"}>
            <i className={"fa fa-ambulance fa-3x"}></i>
            <h2>Ambulance</h2>
          </div>
          <div className={"service"}>
            <i className={"fa fa-medkit fa-3x"}></i>
            <h2>Medical Kit</h2>
          </div>
        </div>
        <div className={"container2"}>
          <div className={"service"}>
            <i className={"fa fa-wheelchair fa-3x"}></i>
            <h2>Wheelchair</h2>
          </div>
          <div className={"service"}>
            <i className={"fas fa-flask fa-3x"}></i>
            <h2>Laboratory</h2>
          </div>
          <div className={"service"}>
            <i className={"fas fa-phone fa-3x"}></i>
            <h2>24x7<br/>Availability</h2>
          </div>
        </div>
      </div>
      <div id={"book-appointment"}>
        <h2 id={"book-apt-head"}>
          Not feeling well? Book an appointment with our Expertise!
        </h2>
        <button id={"book-btn"} onClick={onAppointmentBook}>
          Book
        </button>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Homepage;
