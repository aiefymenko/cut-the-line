import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/logo.jpeg";
import { Button } from "react-bootstrap";
import "./UserWait.scss";
import ConfirmModal from "./ConfirmModal";

const UserWait = () => {
  const [show, setShow] = useState(false);
  const [waittime, setWaittime] = useState([{
    estimated_wait_time: ""
  }]);
  const [position, setPosition] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { state } = useLocation();

  // console.log(state);

  //get wait time
  const waitTime = () => {
    axios.get("http://localhost:3001/api/get_estimated_wait_time").then((response) => {
      setWaittime(response.data);
    });
  };

  useEffect(() => {
    waitTime();
  }, []) ;

    //get particular session
    const session = () => {
      axios.get(`http://localhost:3001/api/get_position/${state.id}`).then((response) => {
        // console.log('My position...............', response.data.position);
        setPosition(response.data.position);
      });
    };

  useEffect(() => {
    session();
  });

  // console.log('New wait time',waittime);

  //cancel appointment
  const handleDeleteClick = () => {
    axios
    .post(`http://localhost:3001/api/complete_session/${state.id}`, {
      outcome_id: 3,
      position: position,
    })
    .then(() => {
    });
};


  return (
    <div className="main-wait">
      <div className="user-wait">
        <div className="site">
          <h1>Passport Service</h1>
          <h1>
            <FontAwesomeIcon icon="fa-solid fa-passport" />
          </h1>
        </div>
        <h2>Welcome {state.first_name}</h2>
        <h4>
          Your are number <span>{position}</span> in line
        </h4>
        <h4>
          Estimated wait time is: <span>{waittime[0].estimated_wait_time} min</span>
        </h4>
        <div className="user-buttons">
        <Button variant="danger" onClick={handleShow}>
          <i className="fa-solid fa-user-slash"></i>
          &nbsp;Cancel Registration
        </Button>
        <Button className="create" variant="primary" onClick={() => { waitTime(); session();}}>
          <i className="fa-solid fa-rotate"></i>
          &nbsp;Refresh
        </Button>
        </div>
        <ConfirmModal
          show={show}
          setShow={setShow}
          handleClose={handleClose}
          handleShow={handleShow}
          handleDeleteClick={handleDeleteClick}
        />
      </div>
      <div className="powered-by">
        <span>powered by</span>
        <div className="our-logo">
          <h5>Cut The Line</h5>
          <img alt="logo" src={logo} />
        </div>
      </div>
    </div>
  );
};

export default UserWait;
