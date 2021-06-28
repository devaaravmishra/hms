import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "./css/form.css";
import logo from "./imgs/Doctor_20.png";

const Appointment = () => {
    const convertDate = () => {
        var dte = document.getElementById("dateinput").value;
        var dd =dte.getDate();
        var yy = dte.getFullYear();
        var mm = dte.getMonth();
        var utc_date =Date.UTC(yy,mm,dd);
        // console.log("utc date:",utc_date);
    }
    convertDate();
  return (
    <React.Fragment>
      <div id={"super-container"}>
        <Navbar />
        <div className={"parent-container"}>
          <form id={"login-container"}>
            <img src={logo} alt={"Health Insurance"} />
            <br />
            <br />
            <div className={"input-container"}>
              <i class="fa fa-calendar-check icon"></i>
              <input
                id={"dateinput"}
                type={"date"}
                name={"date"}
                placeholder={"Date *"}
                required
              />
            </div>
            <br />
            <br />
            <div className={"radio-container"}>
              <h3 id={"radio-container-head"}>Choose time slot</h3>
              <br />
              <br />
              <label for={"option-one"}>
              <input className={"radio"} type="radio" name="slot" id={"option-one"} tabindex="1"/>
              <span className={"radio-text"}>1</span>&nbsp;&nbsp;
              </label>
              <label  for={"option-two"}>
              <input className={"radio"} type="radio" name="slot" id={"option-two"} tabindex="2"/>
              <span className={"radio-text"}>2</span>&nbsp;&nbsp;
              </label>
              <label for={"option-three"}>
              <input className={"radio"} type="radio" name="slot" id={"option-three"} tabindex="3"/>
              <span className={"radio-text"}>3</span>
              </label>
              <br/>
              <br/>
                <span className={"slots-desc"}>1. Morning</span><span className={"slots-desc"}>&nbsp;&nbsp;2. Afternoon</span><span className={"slots-desc"}>&nbsp;&nbsp;3. Evening</span>
            </div>
            <button id={"submit"} type={"submit"}>
              Make
            </button>
            <br />
            <br />
            <br />
          </form>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Appointment;
