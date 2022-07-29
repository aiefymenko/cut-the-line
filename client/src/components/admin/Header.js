import React from "react";
import Button from "react-bootstrap/Button";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h3>Waitlist</h3>
      <img src="./images/logo.jpeg" />
      <Button variant="primary">Add Client</Button>
    </div>
  );
};

export default Header;
