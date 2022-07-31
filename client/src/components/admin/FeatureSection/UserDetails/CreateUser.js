import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-number-input/style.css";
import Form from "react-bootstrap/Form";

export default function CreateUser() {
  const [phone, setPhone] = useState("");

  return (
    <Form>
      <Form.Group className="mb-3" controlId="form-text">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your First Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
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
        <Form.Select aria-label="Floating label select example">
          <option>Group size</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
}
