import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Axios from "axios";
import Login from "./Components/loginpage";
import Signup from "./Components/signuppage";
import Homepage from "./Components/homepage";
import Appointment from "./Components/appointment";
import AppointmentPage from "./Components/appointmentpage";

require("dotenv").config();

const {BASE_URL} = process.env;

const App = () => {
  const [user, setUser] = useState({});
  const isAppoined = useRef(false);
  const loggedIn = useRef(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (!loggedIn.current && savedUser) {
      setUser(JSON.parse(savedUser).user);
      loggedIn.current = true;
    }
  }, [user]);

  const fetchAppointments = async () => {
    await Axios.get(`https://hmsystem-backend.herokuapp.com/user/getApt/${user._id}`)
      .then(({ data }) => {
        isAppoined.current = true;
      })
  };

  if(loggedIn.current) {
  fetchAppointments();
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path={"/"} exact>
            <Homepage/>
          </Route>
          <Route path={"/login"} >
            <Login setUserState={setUser} baseURL={BASE_URL}/>
          </Route>
          <Route path={"/signup"} >
            <Signup setUserState={setUser} baseURL={BASE_URL}/>
          </Route>
          <Route path={"/appointments"} >
            <Appointment user={user} loggedIn={loggedIn} baseURL={BASE_URL}/>
          </Route>
          <Route path={"/appointmentpage"} >
            <AppointmentPage user={user} loggedIn={loggedIn} baseURL={BASE_URL}/>
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
  );
};

export default App;
