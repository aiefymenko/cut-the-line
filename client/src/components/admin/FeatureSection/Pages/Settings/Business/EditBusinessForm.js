import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditBusinessForm = ({
  store,
  handleEditFormChange,
  editFormData,
  handleCancelClick,
}) => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Business Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Company Name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Business URL</Form.Label>
        <Form.Control
          disabled
          readOnly
          className="bus-label"
          name="url"
          type="text"
          placeholder="google.com"
          value={editFormData.url}
          onChange={handleEditFormChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control
          name="location"
          type="text"
          placeholder="Enter City, Prov, Country"
          value={editFormData.location}
          onChange={handleEditFormChange}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Save
      </Button>
      <Button variant="danger" type="button" onClick={handleCancelClick}>
        Cancel
      </Button>
    </>
  );
};

export default EditBusinessForm;
