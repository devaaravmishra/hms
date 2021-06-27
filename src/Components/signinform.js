import React from "react";
import "./css/form.css";

const SignInForm = () => {
  return (
    <React.Fragment>
      <div className={"parent-container"}>
        <form id={"signin-container"}>
          <img
            src="http://www.simpleimageresizer.com/_uploads/photos/8a5047b0/HealthInsurance_3_16.png"
            alt={"Health Insurance"}
          />
          <br />
          <br />
          <div className={"input-container"}>
            <i className={"fa fa-user icon"}></i>
            <input
              className={"logininput"}
              type={"name"}
              name={"name"}
              placeholder={"Name *"}
              required
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
              placeholder={"Email *"}
              required
            />
          </div>
          <br />
          <br />
          <div class="input-container">
            <i class="fa fa-fingerprint icon"></i>
            <input
              className={"logininput"}
              type={"password"}
              name={"password"}
              placeholder={"Password *"}
              required
            />
          </div>
          <br />
          <br />
          <div class="input-container">
            <i class="fa fa-clock icon"></i>
            <input
              className={"logininput"}
              type={"number"}
              name={"age"}
              placeholder={"Age *"}
              required
            />
          </div>
          <button id={"submit"} type={"submit"}>
            Create
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SignInForm;
