import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './CreateUser.scss';

export default function EditUser({ editWaitlist, handleClose, session, sessionId }) {
  const [firstName, setFirstName] = useState(session.first_name);
  const [lastName, setLastName] = useState(session.last_name);
  const [phone, setPhone] = useState(session.contact_number);
  const [groupSize, setGroupSize] = useState(session.group_size);

  const onSave = (event) => {
    event.preventDefault();
    editWaitlist(sessionId, firstName, lastName, phone, groupSize);
    handleClose();
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="form-text">
        <Form.Label>First Name</Form.Label>
        <Form.Control value={firstName} onChange={e => setFirstName(e.target.value)} type="text" placeholder="Enter your First Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="form-text">
        <Form.Label>Last Name</Form.Label>
        <Form.Control value={lastName} onChange={e => setLastName(e.target.value)} type="text" placeholder="Last Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="form-text">
        <Form.Label>Phone Number</Form.Label>
        <PhoneInput
          placeholder="Enter phone number"
          defaultCountry="CA"
          value={phone}
          onChange={setPhone}
        />
      </Form.Group>

      <Form.Label>Group Size</Form.Label>
      <Form.Group className="mb-3" controlId="form-text">
        <Form.Select aria-label="Floating label select example" value={groupSize} onChange={e => setGroupSize(e.target.value)}>
          <option value="">Group size </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </Form.Select>
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
