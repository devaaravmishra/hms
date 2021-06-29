import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import Axios from "axios";
import logo from "./imgs/logo.png";
import "./css/form.css";

const Signup = (props) => {
  const history = useHistory();
  const { setUserState } = props;
  const [user, setUser] = useState({});

  const onFormSubmit = async (event) => {
    event.preventDefault();
    await Axios.post("http://localhost:7000/user/signup", user)
      .then(({ data }) => {
        console.info(data);
        localStorage.setItem("user", JSON.stringify(data));
        setUserState(data);
        history.push("/");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.info("Login API call finished.");
      });
  };

  return (
    <React.Fragment>
      <div id={"super-container"}>
        <Navbar />
        <div className={"parent-container"}>
          <form id={"signin-container"}>
            <img src={logo} alt={"Health Insurance"} />
            <br />
            <br />
            <div className={"input-container"}>
              <i className={"fa fa-user icon"}></i>
              <input
                className={"logininput"}
                type={"name"}
                name={"name"}
                placeholder={"Name"}
                required
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value });
                }}
              />
            </div>
            <br />
            <br />
            <div className={"input-container"}>
              <i className={"fa fa-envelope icon"}></i>
              <input
                className={"logininput"}
                type={"email"}
                name={"email"}
                placeholder={"Email"}
                required
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </div>
            <br />
            <br />
            <div className="input-container">
              <i className="fa fa-fingerprint icon"></i>
              <input
                className={"logininput"}
                type={"password"}
                name={"password"}
                placeholder={"Password"}
                required
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </div>
            <br />
            <br />
            <div className="input-container">
              <i className="fa fa-clock icon"></i>
              <input
                className={"logininput"}
                type={"number"}
                name={"age"}
                placeholder={"Age"}
                required
                onChange={(e) => {
                  setUser({ ...user, age: e.target.value });
                }}
              />
            </div>
            <button id={"submit"} type={"submit"} onClick={onFormSubmit}>
              Create
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Signup;
