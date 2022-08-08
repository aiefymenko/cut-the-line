import React, { useState } from "react";
import "react-phone-number-input/style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './CreateUser.scss';

export default function EditPosition({ updatePosition, handleClose, session, sessionId, maxPosition }) {
  const [position, setPosition] = useState(session.position);

  const onSave = (event) => {
    event.preventDefault();
    updatePosition(sessionId, position);
    handleClose();
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="form-text">
        <Form.Label>New Position</Form.Label>
        <Form.Control value={position} onChange={e => setPosition(e.target.value)} type="number" placeholder="Enter a New Position" min="1" max={maxPosition} />
      </Form.Group>

      <span className="user-buttons">
        <Button variant="secondary" onClick={handleClose}>
          Back
        </Button>
        <Button type="submit" variant="primary" onClick={onSave} >
          Save Changes
        </Button>
      </span>
    </Form>
  );
}
