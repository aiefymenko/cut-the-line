import React, { useEffect, useState } from "react";
import axios from "axios";
//Files
import EditBusinessForm from "./EditBusinessForm";
//BootStrap
import Form from "react-bootstrap/Form";
import BusinessReadOnly from "./BusinessReadOnly";

const BusinessForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  //states
  const [stores, setStores] = useState([]);
  const [editStoreId, setEditStoreId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    url: "",
    location: "",
    capacity: null,
  });

  //load original data
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/get_settings")
      .then((res) => setStores(res.data));
  }, []);

  //edit functions
  // When clicking edit button renders editpage
  const handleEditClick = (event, store) => {
    event.preventDefault();
    setEditStoreId(store.id);

    const formValues = {
      name: store.name,
      url: store.url,
      location: store.location,
      capacity: store.capacity,
    };

    setEditFormData(formValues);
  };

  //handles onchange event on form in edit page
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  //taking a new value to pass in submit function

  // const handleEditSubmit = (event) => {
  //   event.preventDefault();

  //   const editedFields = {
  //     id: editStoreId,
  //     name: editFormData.name,
  //     url: editFormData.url,
  //     location: editFormData.location,
  //     capacity: editFormData.capacity,
  //   };

  //   const newFields = [...stores];

  //   const index = stores.findIndex((store) => store.id === editStoreId);

  //   newFields[index] = editedFields;
  //   setStores(newFields);
  //   setEditStoreId(null);
  // };
  // axios.put("http://localhost:3001/api/edit_settings", stores).then((res) => {
  //   handleEditSubmit();
  // });

  const editedFields = {
    id: editStoreId,
    name: editFormData.name,
    url: editFormData.url,
    location: editFormData.location,
    capacity: editFormData.capacity,
  };
  const handleEditSubmit = (event) => {
    axios
      .put("http://localhost:3001/api/edit_settings", editedFields)
      .then((response) => {
        console.log(editedFields);
        setStores(
          stores.map((val) => {
            console.log(val);
            return val
              ? {
                  id: val.id,
                  name: val.name,
                  url: val.url,
                  location: val.location,
                  capacity: val.capacity,
                }
              : val;
          })
        );
        window.location = "/admin/settings";
      });
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
