import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../images/logo.jpeg";
import "./UserJoin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

const userJoin = () => {
  return (
    <div className="main-join">
      <div className="user-join">
        <h1>Cut The Line</h1>
        <img src={logo} />
        <div className="site">
          <h3>Passport Service</h3>
          <h3>
            <FontAwesomeIcon icon="fa-solid fa-passport" />
          </h3>
        </div>
        <NavLink to="form">
          <Button variant="primary">Join Waitlist</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default userJoin;
