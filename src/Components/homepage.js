import React from "react";
import "./css/homepage.css";
import Header from "./header";
const Homepage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={"services"} id={"services"}>
        <h1 id={"services-head"}>Services we provide</h1>
        <div className={"container"}>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quas perferendis nam explicabo aspernatur temporibus, ut labore
              quibusdam consequatur inventore?
            </p>
          </div>
          <div className={"service"}>
            <i className={"fa fa-wheelchair fa-3x"}></i>
            <h2>Wheelchair</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              reprehenderit ullam doloribus, praesentium ad nihil. Corporis
              assumenda accusantium magnam nam!
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
