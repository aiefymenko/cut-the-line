import React from "react";
import { Button, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ConfirmModal = ({ show, handleClose, handleDeleteClick }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="modalBody">
          Are you sure you want to cancel?
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <NavLink to="/user">
            <Button variant="primary" onClick={handleDeleteClick}>
              Confirm
            </Button>
          </NavLink>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ConfirmModal;
