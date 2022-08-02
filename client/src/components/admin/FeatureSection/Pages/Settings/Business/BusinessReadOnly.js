import React from "react";

//bootstrap font-awesome
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <Form.Group className="mb-3">
        <Form.Label>Capacity</Form.Label>
        <p>{store.capacity}</p>
      </Form.Group>
      <button
        className="edit"
        type="button"
        onClick={(event) => handleEditClick(event, store)}
      >
        <span>
          <FontAwesomeIcon icon="fa-solid fa-user-pen" />
        </span>
      </button>
    </>
  );
};

export default BusinessReadOnly;
