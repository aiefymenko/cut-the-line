import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const BusinessForm = () => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Business Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Company Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Business URL</Form.Label>
        <Form.Control
          name="url"
          type="text"
          placeholder="Localhost:3000/admin"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control
          name="location"
          type="text"
          placeholder="Toronto Ont, Canada"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </>
  );
};

export default BusinessForm;
