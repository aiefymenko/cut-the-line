import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CreateUser({addWaitlist, handleClose}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [groupSize, setGroupSize] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    addWaitlist(firstName, lastName, phone, groupSize);

  }
  

  return (
    <Form>
      <Form.Group className="mb-3" controlId="form-text">
        <Form.Label>First Name</Form.Label>
        <Form.Control value={firstName} onChange={e => setFirstName(e.target.value)} type="text" placeholder="Enter your First Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
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
      <Form.Group className="mb-3" controlId="form-text">
        <Form.Select aria-label="Floating label select example" value={groupSize} onChange={e => setGroupSize(e.target.value)}>
          <option>Group size</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </Form.Select>
        </Form.Group>
        <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button type="submit" variant="primary" onClick={onSave}>
            Save Changes
          </Button>
    </Form>
  );
}
