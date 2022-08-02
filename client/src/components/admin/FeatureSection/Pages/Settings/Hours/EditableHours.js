import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditableHours = ({
  hour,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td className="td-day">{hour.day}</td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="8:00 - 17:00"
          name="time"
          value={editFormData.time}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="edit-buttons">
        <button type="submit">
          <FontAwesomeIcon icon="fa-solid fa-check" />
        </button>
        <p className="cancel" onClick={handleCancelClick}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </p>
      </td>
    </tr>
  );
};

export default EditableHours;
