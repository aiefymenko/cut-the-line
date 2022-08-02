import React, { useState } from "react";
//Files
import EditBusinessForm from "./EditBusinessForm";
//BootStrap
import Form from "react-bootstrap/Form";
import BusinessReadOnly from "./BusinessReadOnly";
//dummy data until database
const companies = [
  {
    id: 1,
    name: "Passport Service",
    url: "Localhost:3000/admin",
    location: "Toronto, Canada",
  },
];

const BusinessForm = () => {
  //states
  const [stores, setStores] = useState(companies);
  const [editStoreId, setEditStoreId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    url: "",
    location: "",
  });
  //edit functions
  const handleEditClick = (event, store) => {
    event.preventDefault();
    setEditStoreId(store.id);

    const formValues = {
      name: store.name,
      url: store.url,
      location: store.location,
    };

    setEditFormData(formValues);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();

    const editedFields = {
      id: editStoreId,
      name: editFormData.name,
      url: editFormData.url,
      location: editFormData.location,
    };

    const newFields = [...stores];

    const index = stores.findIndex((store) => store.id === editStoreId);

    newFields[index] = editedFields;

    setStores(newFields);
    setEditStoreId(null);
  };

  const handleCancelClick = () => {
    setEditStoreId(null);
  };

  return (
    <div className="b-info">
      <h4>Business Info</h4>
      <Form onSubmit={handleEditSubmit}>
        {stores.map((store) => (
          <>
            {editStoreId === store.id ? (
              <EditBusinessForm
                store={store}
                editFormData={editFormData}
                handleEditFormChange={handleEditFormChange}
                handleCancelClick={handleCancelClick}
              />
            ) : (
              <BusinessReadOnly
                store={store}
                handleEditClick={handleEditClick}
              />
            )}
          </>
        ))}
      </Form>
    </div>
  );
};

export default BusinessForm;
