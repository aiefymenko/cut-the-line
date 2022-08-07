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
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    groupSize: "",
  });
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    groupSize: "",
  });

  const handleChange = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
      if (error[name]) {
        setError({ ...error, [name]: "" });
      }
    } else {
      setUser({ ...user, phone: e });
      if (error["phone"]) {
        setError({ ...error, phone: "" });
      }
    }
  };

  const message = `Welcome ${user.firstName} you are now in line for Passport Service`;

  const validate = () => {
    if (!user.firstName && !user.lastName && !user.phone && !user.groupSize) {
      setError({
        ...error,
        firstName: "Please enter your First Name",
        lastName: "Please enter your Last Name",
        phone: "Please enter your valid phone number",
        groupSize: "Please enter your group size",
      });
      return false;
    } else if (!user.firstName) {
      setError({ ...error, lastName: "Please enter your First Name" });
      return false;
    }
    if (!user.lastName) {
      setError({ ...error, lastName: "Please enter your Last Name" });
      return false;
    }
    if (!user.phone) {
      setError({ ...error, phone: "Please enter your valid phone number" });
      return false;
    }
    if (!user.groupSize) {
      setError({ ...error, groupSize: "Please enter your group size" });
      return false;
    } else {
      return true;
    }
  };

  const onSave = (event) => {
    event.preventDefault();
    if (!validate()) return false;
    addWaitlist(user.firstName, user.lastName, user.phone, user.groupSize);
    axios
      .post("http://localhost:3001/api/messages", {
        to: `${user.phone}`,
        body: message,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    handleClose();
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="form-text">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          type="text"
          placeholder="Enter your First Name"
        />
        <p>{error.firstName}</p>
      </Form.Group>

      <Form.Group className="mb-3" controlId="form-text">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          type="text"
          placeholder="Last Name"
        />
        <p>{error.lastName}</p>
      </Form.Group>

      <Form.Group className="mb-3" controlId="form-text">
        <Form.Label>Phone Number</Form.Label>
        <PhoneInput
          name="phone"
          placeholder="Enter phone number"
          defaultCountry="CA"
          value={user.phone}
          onChange={handleChange}
        />
        <p>{error.phone}</p>
      </Form.Group>
      <Form.Label>Group Size</Form.Label>
      <Form.Group className="mb-3" controlId="form-text">
        <Form.Select
          name="groupSize"
          aria-label="Floating label select example"
          value={user.groupSize}
          onChange={handleChange}
        >
          <option value="">Group size </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </Form.Select>
        <p>{error.groupSize}</p>
      </Form.Group>
      <span className="user-buttons">
        <Button variant="secondary" onClick={handleClose}>
          Back
        </Button>

        <Button type="submit" variant="primary" onClick={onSave}>
          Save Changes
        </Button>
      </span>
    </Form>
  );
}
