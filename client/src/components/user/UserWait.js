import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/logo.jpeg";
import { Button } from "react-bootstrap";
import "./UserWait.scss";
import ConfirmModal from "./ConfirmModal";

const UserWait = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { state } = useLocation();

  console.log(state);

  return (
    <div className="main-wait">
      <div className="user-wait">
        <div className="site">
          <h1>Passport Service</h1>
          <h1>
            <FontAwesomeIcon icon="fa-solid fa-passport" />
          </h1>
        </div>
        <h2>Welcome {state.firstName}</h2>
        <h4>
          Your are number <span>{state.position}</span> in line
        </h4>
        <h4>
          Estimated wait time is: <span>90 mins</span>
        </h4>
        <Button variant="danger" onClick={handleShow}>
          <i class="fa-solid fa-user-slash"></i>
          &nbsp;Cancel Registration
        </Button>
        <ConfirmModal
          show={show}
          setShow={setShow}
          handleClose={handleClose}
          handleShow={handleShow}
        />
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
