import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import logo from "../../../../images/logo.jpeg";
import Popup from "../UserDetails/Popup";

import "./Header.scss";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="header">
        <img src={logo} />
        <h1>Cut The Line</h1>
        <Button className="create" variant="primary" onClick={handleShow}>
          Add Client
        </Button>
      </div>
      {show && <Popup handleClose={handleClose} />}
    </>
  );
};

export default Header;
