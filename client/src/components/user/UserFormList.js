import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import axios from "axios";
import PhoneInput from "react-phone-number-input";

//bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UserFormList = () => {
  const navigate = useNavigate();
  const [waitlist, setWaitlist] = useState([]);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    groupSize: "",
  });

  const [error, setError] = useState({
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

  //POST sessions
  const addWaitlist = (firstName, lastName, phone, groupSize) => {
    axios
      .post("http://localhost:3001/api/new_session", {
        first_name: firstName,
        last_name: lastName,
        contact_number: phone,
        group_size: groupSize,
      })
      .then((response) => {
        setWaitlist([...waitlist, response.data]);
        navigate(`/user/wait/${response.data.id}`, { state: response.data });
      });
  };
  const message = `Welcome ${user.firstName} you are now in line for Passport Service`;
  const onSave = (e) => {
    e.preventDefault();
    if (!validate()) return false;
    addWaitlist(user.firstName, user.lastName, user.phone, user.groupSize);
    axios
      .post("http://localhost:3001/api/messages", {
        to: `${user.phone}`,
        body: message,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="form-text">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="firstName"
            onChange={handleChange}
            value={user.firstName}
            type="text"
            placeholder="Enter your First Name"
          />
          <p>{error.firstName}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="form-text">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastName"
            onChange={handleChange}
            value={user.lastName}
            type="text"
            placeholder="Last Name"
          />
          <p>{error.lastName}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="form-text">
          <Form.Label>Phone Number</Form.Label>
          <PhoneInput
            name="phone"
            onChange={handleChange}
            placeholder="Enter phone number"
            defaultCountry="CA"
            value={user.phone}
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
          <NavLink to="/user">
            <Button variant="secondary">Back</Button>
          </NavLink>
          <Button
            type="submit"
            className="save"
            variant="primary"
            onClick={onSave}
          >
            Save Changes
          </Button>
        </span>
      </Form>
    </>
  );
};

export default UserFormList;
