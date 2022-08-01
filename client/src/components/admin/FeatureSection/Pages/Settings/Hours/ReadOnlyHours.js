import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReadOnly = ({ hour, handleEditClick }) => {
  return (
    <tr>
      <td className="td-day">{hour.day}</td>
      <td onClick={(event) => handleEditClick(event, hour)} className="td-hour">
        {hour.time}
      </td>
      {/* <td>
        <FontAwesomeIcon icon="fas fa-edit" />
      </td> */}
    </tr>
  );
};

export default ReadOnly;
