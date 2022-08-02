import React from "react";

//bootstrap fontawesome
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditBusinessForm = ({
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
      <Form.Group className="mb-3">
        <Form.Label>Capacity</Form.Label>
        <Form.Control
          name="capacity"
          type="number"
          className="number-edit"
          placeholder="Enter Capacity"
          value={editFormData.capacity}
          onChange={handleEditFormChange}
        />
      </Form.Group>
      <button type="submit" className="submit">
        <span>
          <FontAwesomeIcon icon="fa-solid fa-circle-check" />
        </span>
      </button>
      <button type="button" className="cancel-edit" onClick={handleCancelClick}>
        <span>
          <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
        </span>
      </button>
    </>
  );
};

export default EditBusinessForm;
