import React, { useEffect, useState } from "react";
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

  const handleChange = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
    } else {
      setUser({ ...user, phone: e });
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
        console.log(response.data);
        setWaitlist([...waitlist, response.data]);
        // eslint-disable-next-line no-undef
        navigate(`/user/wait/${response.data.position}`, {state: {
          firstName: response.data.first_name,
          position: response.data.position
        }});

      });
  };
  const message = `Welcome ${user.firstName} you are now in line for Passport Service`;
  const onSave = (e) => {
    e.preventDefault();
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
        </Form.Group>
        <span className="user-buttons">
          <NavLink to="/user">
            <Button variant="secondary">Back</Button>
          </NavLink>
          {/* <Link to="/user/wait"> */}
          <Button
            type="submit"
            className="save"
            variant="primary"
            onClick={onSave}
          >
            Save Changes
          </Button>
          {/* </Link> */}
        </span>
      </Form>
    </>
  );
};

export default UserFormList;
