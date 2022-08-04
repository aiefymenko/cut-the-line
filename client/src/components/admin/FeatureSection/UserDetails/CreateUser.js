import React, { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
//bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//Scss
import "./CreateUser.scss";

export default function CreateUser({ addWaitlist, handleClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [groupSize, setGroupSize] = useState("");

  const message = `Welcome ${firstName} you are now in line for Passport Service`;

  const onSave = (event) => {
    event.preventDefault();
    addWaitlist(firstName, lastName, phone, groupSize);

<<<<<<< HEAD
  }

=======
    axios
      .post("http://localhost:3001/api/messages", {
        to: `${phone}`,
        body: message,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    handleClose();
  };
>>>>>>> 059dce12dc72286d6284ff07b8e2ba65060420bd

  return (
    <Form>
      <Form.Group className="mb-3" controlId="form-text">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="Enter your First Name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="form-text">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
        />
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
<<<<<<< HEAD
        <Form.Select aria-label="Floating label select example" value={groupSize} onChange={e => setGroupSize(e.target.value)}>
=======
        <Form.Select
          aria-label="Floating label select example"
          value={groupSize}
          onChange={(e) => setGroupSize(e.target.value)}
        >
          <option>Group size</option>
>>>>>>> 059dce12dc72286d6284ff07b8e2ba65060420bd
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
<<<<<<< HEAD
        <Button type="submit" variant="primary" onClick={onSave} >
=======
        <Button type="submit" variant="primary" onClick={onSave}>
>>>>>>> 059dce12dc72286d6284ff07b8e2ba65060420bd
          Save Changes
        </Button>
      </span>
    </Form>
  );
}
