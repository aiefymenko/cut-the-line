import React from "react";
import { NavLink } from "react-router-dom";

import CreateUser from "../admin/FeatureSection/UserDetails/CreateUser";
import logo from "../../images/logo.jpeg";
//Scss and font-awesome
import "./UserForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserForm = () => {
  return (
    <div className="userForm">
      <div className="site">
        <h3>Passport Service</h3>
        <h3>
          <FontAwesomeIcon icon="fa-solid fa-passport" />
        </h3>
      </div>
      {/* <CreateUser /> */}
      <span>powered by</span>
      <div className="logo">
        <h3>Cut The Line</h3>
        <img src={logo} />
      </div>
    </div>
  );
};

export default UserForm;
