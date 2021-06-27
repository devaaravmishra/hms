import React from "react";
import "./css/form.css";
import {useHistory} from "react-router-dom"
const LoginForm = () => {
  const history = useHistory();
  const toSignUp = () =>{
    history.push("/signup")
  }
  return (
    <React.Fragment>
      <div className={"parent-container"}>
        <form id={"login-container"}>
          <img
            src="http://www.simpleimageresizer.com/_uploads/photos/8a5047b0/HealthInsurance_3_16.png"
            alt={"Health Insurance"}
          />
          <br />
          <br />
          <div className={"input-container"}>
            <i className={"fa fa-envelope icon"}></i>
            <input
              className={"logininput"}
              type={"email"}
              name={"email"}
              placeholder={"Email *"}
              required
            />
          </div>
          <br />
          <br />
          <br />
          <div class="input-container">
            <i class="fa fa-lock icon"></i>
            <input
              className={"logininput"}
              type={"password"}
              name={"password"}
              placeholder={"Password *"}
              required
            />
          </div>
          <button id={"submit"} type={"submit"}>
            Login
          </button>
          <br />
          <br />
          <span class={"spantext"}>Doesn't have one, Create here.</span>
          <br />
          <button id={"lastbtn"} type={"button"} onClick={toSignUp}>
            Sign Up
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
