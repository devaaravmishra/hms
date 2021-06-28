import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Login from "./Components/loginpage"
import Signup from "./Components/signinpage"
import Homepage from "./Components/homepage";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={"/"} exact>
            <Homepage />
          </Route>
          <Route path={"/login"}>
            <Login />
          </Route>
          <Route path={"/signup"}>
            <Signup />
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
