import React, { useState } from "react";

//bootstrap fontawesome
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditBusinessForm = ({ clickRead, store, editedStores }) => {
  const [storeName, setStoreName] = useState(store.name);
  const [storeUrl, setStoreUrl] = useState(store.url);
  const [storeLocation, setStoreLocation] = useState(store.location);
  const [storeCapacity, setStoreCapacity] = useState(store.capacity);

  const onSave = (event) => {
    event.preventDefault();
    editedStores(storeName, storeUrl, storeLocation, storeCapacity);
    clickRead();
  };
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Business Name</Form.Label>
        <Form.Control
          required
          name="name"
          type="text"
          placeholder="Company Name"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Business URL</Form.Label>
        <Form.Control
          required
          disabled
          readOnly
          className="bus-label"
          name="url"
          type="text"
          placeholder="google.com"
          value={storeUrl}
          onChange={(e) => setStoreUrl(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control
          required
          name="location"
          type="text"
          placeholder="Enter City, Prov, Country"
          value={storeLocation}
          onChange={(e) => setStoreLocation(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Capacity</Form.Label>
        <Form.Control
          required
          name="capacity"
          type="number"
          className="number-edit"
          placeholder="Enter Capacity"
          value={storeCapacity}
          onChange={(e) => setStoreCapacity(e.target.value)}
        />
      </Form.Group>
      <button type="submit" className="submit" onClick={onSave}>
        <span>
          <FontAwesomeIcon icon="fa-solid fa-circle-check" />
        </span>
      </button>
      <button type="button" className="cancel-edit" onClick={clickRead}>
        <span>
          <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
        </span>
      </button>
    </>
  );
};

export default EditBusinessForm;
