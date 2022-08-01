import React, { useState } from "react";

// files
import days from "./settingsData";
import ReadOnly from "./Hours/ReadOnlyHours";
import EditableHours from "./Hours/EditableHours";
import BusinessForm from "./BusinessForm";

//Scss
import "./Settings.scss";

const Settings = () => {
  const [hours, setHours] = useState(days);

  const [editHourId, setEditHoursId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    day: "",
    name: "",
    time: "",
  });

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

    const editedHours = {
      id: editHourId,
      day: editFormData.day,
      name: editFormData.name,
      time: editFormData.time,
    };

    const newhours = [...hours];
    console.log(newhours);

    const index = hours.findIndex((hour) => hour.id === editHourId);

    newhours[index] = editedHours;

    setHours(newhours);
    setEditHoursId(null);
  };

  const handleEditClick = (event, hour) => {
    event.preventDefault();
    setEditHoursId(hour.id);

    const formValues = {
      day: hour.day,
      name: hour.name,
      time: hour.time,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditHoursId(null);
  };

  return (
    <div className="card">
      <div className="inside">
        <div className="hour-info">
          <h4>Hours</h4>
          <form onSubmit={handleEditSubmit}>
            <table>
              <tbody>
                {hours.map((hour) => (
                  <>
                    {editHourId === hour.id ? (
                      <EditableHours
                        hour={hour}
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnly hour={hour} handleEditClick={handleEditClick} />
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </form>
        </div>
        <div className="b-info">
          <h4>Business Info</h4>
          <BusinessForm />
        </div>
      </div>
    </div>
  );
};

export default Settings;
