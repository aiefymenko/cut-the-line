import React from "react";

const ReadOnly = ({ hour, handleEditClick }) => {
  return (
    <tr>
      <td className="td-day">{hour.day}</td>
      <td onClick={(event) => handleEditClick(event, hour)} className="td-hour">
        {hour.time}
      </td>
    </tr>
  );
};

export default ReadOnly;
