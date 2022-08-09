import React, { useEffect, useState } from "react";
import axios from "axios";
//Files
import EditBusinessForm from "./EditBusinessForm";
//BootStrap
import Form from "react-bootstrap/Form";
import BusinessReadOnly from "./BusinessReadOnly";
//scss
import "./BusinessForm.scss";

const BusinessForm = () => {
  //states
  const [stores, setStores] = useState([]);

  const [showEdit, SetShowEdit] = useState(false);
  const [showRead, SetShowRead] = useState(true);

  const clickEdit = () => {
    SetShowEdit(true);
    SetShowRead(false);
  };

  const clickRead = () => {
    SetShowRead(true);
    SetShowEdit(false);
  };

  //load original data
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/get_settings")
      .then((res) => setStores(res.data));
  }, []);

  const editedStores = (storeName, storeUrl, storeLocation, storeCapacity) => {
    const newStore = [...stores];

    newStore.forEach((session) => {
      session.name = storeName;
      session.url = storeUrl;
      session.location = storeLocation;
      session.capacity = storeCapacity;
    });

    axios
      .put(`http://localhost:3001/api/edit_settings`, {
        name: storeName,
        url: storeUrl,
        location: storeLocation,
        capacity: storeCapacity,
      })
      .then(() => {
        setStores(newStore);
      });
  };

  return (
    <div className="b-info">
      <h4>Business Info</h4>
      <Form>
        {stores.map((store) => (
          <>
            {showEdit ? (
              <EditBusinessForm
                store={store}
                clickRead={clickRead}
                editedStores={editedStores}
              />
            ) : (
              <BusinessReadOnly store={store} clickEdit={clickEdit} />
            )}
          </>
        ))}
      </Form>
    </div>
  );
};

export default BusinessForm;
