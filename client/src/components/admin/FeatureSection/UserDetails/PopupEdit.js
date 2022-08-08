import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import EditUser from "./EditUser";

import "./Popup.scss";

export default function PopupEdit({ handleClose, editWaitlist, sessionId, waitlist }) {

  const index = waitlist.findIndex((session) => session.id === sessionId);
  const [session] = useState(waitlist[index]);

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditUser handleClose={handleClose} editWaitlist={editWaitlist} session={session} sessionId={sessionId} />
      </Modal.Body>
    </Modal>
  );
}
