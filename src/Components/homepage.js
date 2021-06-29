import React ,{useEffect,useRef} from "react";
import "./css/homepage.css";
import Header from "./header";
import Footer from "./footer";
import {useHistory} from "react-router-dom";
const Homepage = (props) => {
  const history = useHistory();
  const {user} = props
  const loggedIn = useRef(false);
  useEffect(() =>{
    let savedUser = localStorage.getItem("user");
    if(savedUser && Object.keys(user).length > 0){
      loggedIn.current = true;
    }
  },[user]);
  const onAppointmentBook =()=>{
    if(loggedIn.current){
      history.push("/appointments")
      window.scrollTo(0, 0)
    }
    window.alert("Please Log in to Book an Appointment!");
    setTimeout(() => {
      history.push("/login");
      window.scrollTo(0, 0)
    }, 3000);
  }
  return (
    <React.Fragment>
      <Header />
      <div className={"services"} id={"services"}>
        <h1 id={"services-head"}>Services We Provide</h1>
        <div className={"container1"}>
          <div className={"service"}>
            <i className={"fa fa-bed fa-3x"}></i>
            <h2>Emergencies</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              magni enim, impedit quidem iste incidunt nulla optio provident qui
              ex.
            </p>
          </div>
          <div className={"service"}>
            <i className={"fa fa-ambulance fa-3x"}></i>
            <h2>Ambulance</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              magni enim, impedit quidem iste incidunt nulla optio provident qui
              ex.
            </p>
          </div>
          <div className={"service"}>
            <i className={"fa fa-medkit fa-3x"}></i>
            <h2>Medical Kit</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              magni enim, impedit quidem iste incidunt nulla optio provident qui
              ex.
            </p>
          </div>
        </div>
        <div className={"container2"}>
          <div className={"service"}>
            <i className={"fa fa-wheelchair fa-3x"}></i>
            <h2>Wheelchair</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              magni enim, impedit quidem iste incidunt nulla optio provident qui
              ex.
            </p>
          </div>
          <div className={"service"}>
            <i className={"fas fa-flask fa-3x"}></i>
            <h2>Laboratory</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              magni enim, impedit quidem iste incidunt nulla optio provident qui
              ex.
            </p>
          </div>
          <div className={"service"}>
            <i className={"fas fa-phone fa-3x"}></i>
            <h2>24x7 Availability</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              magni enim, impedit quidem iste incidunt nulla optio provident qui
              ex.
            </p>
          </div>
        </div>
      </div>
      <div id={"book-appointment"}>
        <h2 id={"book-apt-head"}>Not feeling well? book an appointment with our expertise!</h2>
        <button id={"book-btn"} onClick={onAppointmentBook}>
          Book
        </button>
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default Homepage;
