import React from "react";
import "./NavbarItems.scss";
import Button from "react-bootstrap/Button";

const NavbarItems = () => {
  return (
    <div className="nav-main">
      <div className="img-title">
        <img src="./images/logo.jpeg" />
        <h2>Waitlist</h2>
      </div>
      <div className="btn">
        <Button variant="primary">Add Client</Button>{" "}
      </div>
    </div>
  );
};

export default NavbarItems;
