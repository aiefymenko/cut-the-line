import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ReactTooltip from "react-tooltip";

import PopupEdit from "../UserDetails/PopupEdit";
import PopupMove from "../UserDetails/PopupMove";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./Waitlist.scss";


export default function Waitlist({ waitlist, handleDeleteClick, handleNoShowClick, handleAdmitClick, editWaitlist, updatePosition, helpRefresh }) {
  const [showEdit, setShowEdit] = useState({ visible: false, sessionId: - 1 });
  const [showMove, setShowMove] = useState({ visible: false, sessionId: - 1 });

  const handleCloseEdit = () => setShowEdit({ visible: false, sessionId: -1 });
  const handleShowEdit = (sessionId) => setShowEdit({ visible: true, sessionId: sessionId });

  const handleCloseMove = () => setShowMove({ visible: false, sessionId: -1 });
  const handleShowMove = (sessionId) => setShowMove({ visible: true, sessionId: sessionId });

  const newWaitlist = [...waitlist].sort((a, b) => a.position - b.position);

  return (

    <div>
      <div className="active-sessions">
        <h3 className="title">Active Sessions</h3>
        <Button className="create" variant="primary" onClick={helpRefresh}>
          <i className="fa-solid fa-rotate"></i>
          &nbsp;Refresh
        </Button>
      </div>
      <div>
        {showEdit.visible && <PopupEdit editWaitlist={editWaitlist} handleClose={handleCloseEdit} sessionId={showEdit.sessionId} waitlist={waitlist} />}
        {showMove.visible && <PopupMove updatePosition={updatePosition} handleClose={handleCloseMove} sessionId={showMove.sessionId} waitlist={waitlist} />}
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Group Size</th>
            <th>Wait Time (in min)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {newWaitlist.map((session) => {
            return (
              <tr key={session.id}>
                <td>{session.position}</td>
                <td>{session.first_name}</td>
                <td>{session.last_name}</td>
                <td>{session.contact_number}</td>
                <td>{session.group_size}</td>
                <td>{session.wait_duration}</td>
                <td className="icon">
                  <button className="button-solid" onClick={() => handleAdmitClick(session.id)} data-tip data-for="AdmitToolTip">
                    <i className="fa-solid fa-circle-check fa-2x check-icon"></i>
                  </button>
                  <ReactTooltip id="AdmitToolTip" place="top" effect="solid">
                    Admit
                  </ReactTooltip>
                  <button className="button-solid" onClick={() => handleDeleteClick(session.id)} data-tip data-for="RemoveToolTip">
                    <i className="fa-solid fa-trash fa-2x no-show"></i>
                  </button>
                  <ReactTooltip id="RemoveToolTip" place="top" effect="solid">
                    Remove
                  </ReactTooltip>
                  <button className="button-solid" onClick={() => handleShowMove(session.id)} data-tip data-for="MovePositionToolTip">
                    <i className="fa-solid fa-arrows-up-down fa-2x move"></i>
                  </button>
                  <ReactTooltip id="MovePositionToolTip" place="top" effect="solid">
                    Move Position
                  </ReactTooltip>
                  <button className="button-solid" onClick={() => handleShowEdit(session.id)} data-tip data-for="EditUserToolTip">
                    <i className="fa-solid fa-user-pen fa-2x update"></i>
                  </button>
                  <ReactTooltip id="EditUserToolTip" place="top" effect="solid">
                    Edit User
                  </ReactTooltip>
                  <button className="button-solid" onClick={() => handleNoShowClick(session.id)} data-tip data-for="NoShowToolTip">
                    <i className="fa-solid fa-ghost fa-2x no-show"></i>
                  </button>
                  <ReactTooltip id="NoShowToolTip" place="top" effect="solid">
                    No Show
                  </ReactTooltip>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
