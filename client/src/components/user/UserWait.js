import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/logo.jpeg";
import Button from "react-bootstrap/Button";
import "./UserWait.scss";

const UserWait = () => {
  return (
    <div className="main-wait">
      <div className="user-wait">
        <div className="site">
          <h1>Passport Service</h1>
          <h1>
            <FontAwesomeIcon icon="fa-solid fa-passport" />
          </h1>
        </div>
        <h2>Welcome Mike</h2>
        <h4>
          Your are number <span>#7</span> in line
        </h4>
        <h4>
          Estimated wait time is: <span>90 mins</span>
        </h4>
        <Button variant="danger">Cancel</Button>
      </div>
      <div className="powered-by">
        <span>powered by</span>
        <div className="our-logo">
          <h5>Cut The Line</h5>
          <img src={logo} />
        </div>
      </div>
    </div>
  );
};

export default UserWait;
