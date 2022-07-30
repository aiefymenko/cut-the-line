import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import logo from "../../../../images/logo.jpeg";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} />
      <h1>Cut The Line</h1>
      <Button className="create" variant="primary">
        Add Client
      </Button>
    </div>
  );
};

export default Header;
