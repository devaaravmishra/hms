import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Login from "./Components/loginpage"
import Signup from "./Components/signuppage"
import Homepage from "./Components/homepage";
import Appointment from "./Components/appointment";

const App = () => {
  const [user, setUser] = useState({});
  const loggedIn = useRef(false);

  useEffect(() => {
    let savedUser = localStorage.getItem("user");
    if (!(loggedIn.current) && savedUser) {
      setUser(JSON.parse(savedUser).user);
      loggedIn.current = true;
    }
  }, [user]);

  return (
    <Router>
      <div>
        <Switch>
          <Route path={"/"} exact>
            <Homepage />
          </Route>
          <Route path={"/login"}>
            <Login setUserState={setUser} />
          </Route>
          <Route path={"/signup"}>
            <Signup setUserState={setUser} />
          </Route>
          <Route path={"/appointments"}>
            <Appointment user={user}/>
          </Route>
          <Route path={"/about-us"}>
            <h1>This is about-us page</h1>
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
