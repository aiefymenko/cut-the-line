import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const BusinessReadOnly = ({ store, handleEditClick }) => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Business Name</Form.Label>
        <p>{store.name}</p>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Business URL</Form.Label>
        <p>{store.url}</p>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <p>{store.location}</p>
      </Form.Group>
      <Button type="button" onClick={(event) => handleEditClick(event, store)}>
        Edit
      </Button>
    </>
  );
};

export default BusinessReadOnly;
