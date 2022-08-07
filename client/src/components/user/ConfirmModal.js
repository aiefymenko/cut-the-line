import React from "react";
import { Button, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ConfirmModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="modalBody">
          ARE YOU SURE YOU WANT TO Cancel?
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <NavLink to="/user">
            <Button variant="primary" onClick={handleClose}>
              Confirm
            </Button>
          </NavLink>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ConfirmModal;
