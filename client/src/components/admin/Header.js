import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src="./images/logo.jpeg" />
      <h1>Cut The Line</h1>
      <Button className="create" variant="primary">
        Add Client
      </Button>
    </div>
  );
};

export default Header;
