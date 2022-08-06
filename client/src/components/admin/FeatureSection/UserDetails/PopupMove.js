import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import EditPosition from "./EditPosition";

import "./Popup.scss";

export default function PopupMove({ handleClose, updatePosition, sessionId, waitlist }) {

  const index = waitlist.findIndex((session) => session.id === sessionId);
  const [session] = useState(waitlist[index]);

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Position</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditPosition handleClose={handleClose} updatePosition={updatePosition} session={session} sessionId={sessionId} maxPosition={waitlist.length} />
      </Modal.Body>
    </Modal>
  );
}
