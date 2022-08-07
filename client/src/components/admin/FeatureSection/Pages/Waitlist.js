import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./Waitlist.scss";
import PopupEdit from "../UserDetails/PopupEdit";
import PopupMove from "../UserDetails/PopupMove";

export default function Waitlist({ waitlist, handleDeleteClick, handleNoShowClick, handleAdmitClick, editWaitlist, updatePosition }) {
  const [showEdit, setShowEdit] = useState({ visible: false, sessionId: - 1 });
  const [showMove, setShowMove] = useState({ visible: false, sessionId: - 1 });

  const handleCloseEdit = () => setShowEdit({ visible: false, sessionId: -1 });
  const handleShowEdit = (sessionId) => setShowEdit({ visible: true, sessionId: sessionId });

  const handleCloseMove = () => setShowMove({ visible: false, sessionId: -1 });
  const handleShowMove = (sessionId) => setShowMove({ visible: true, sessionId: sessionId });

  const newWaitlist = [...waitlist].sort((a, b) => a.position - b.position);

  return (

    <div>
      <h3 className="title">Active Sessions</h3>
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
                <td>{session.id}</td>
                <td>{session.first_name}</td>
                <td>{session.last_name}</td>
                <td>{session.contact_number}</td>
                <td>{session.group_size}</td>
                <td>{session.wait_duration}</td>
                <td>{session.position}</td>
                <td className="icon">
                  <button className="button-solid" onClick={() => handleAdmitClick(session.id)}>
                    <i className="fa-solid fa-circle-check fa-2x check-icon"></i>
                  </button>
                  <button className="button-solid" onClick={() => handleDeleteClick(session.id)}>
                    <i className="fa-solid fa-trash fa-2x no-show"></i>
                  </button>
                  <button className="button-solid" onClick={() => handleShowMove(session.id)}>
                    <i className="fa-solid fa-arrows-up-down fa-2x move"></i>
                  </button>
                  <button className="button-solid" onClick={() => handleShowEdit(session.id)}>
                    <i className="fa-solid fa-user-pen fa-2x update"></i>
                  </button>
                  <button className="button-solid" onClick={() => handleNoShowClick(session.id)}>
                    <i className="fa-solid fa-ghost fa-2x no-show"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
