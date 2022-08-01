import React from "react";
import Modal from "react-bootstrap/Modal";
import CreateUser from "./CreateUser";

import "./Popup.scss";

export default function Popup({ handleClose, addWaitlist }) {

  return (
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateUser handleClose={handleClose} addWaitlist={addWaitlist}/>
        </Modal.Body>
      </Modal>
  );
}
