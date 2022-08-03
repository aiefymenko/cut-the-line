import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./Waitlist.scss";

export default function Waitlist({ waitlist, handleDeleteClick, handleNoShowClick, handleAdmitClick }) {
  return (
    <div>
      <h3 className="title">Waitlist</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone number</th>
            <th>Party size</th>
            <th>Wait time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {waitlist.map((session) => {
            return (
              <tr key={session.id}>
                <td>{session.id}</td>
                <td>{session.first_name}</td>
                <td>{session.last_name}</td>
                <td>{session.contact_number}</td>
                <td>{session.group_size}</td>
                <td>{session.wait_duration}</td>
                <td className="icon">
                  <button className="button-solid" onClick={() => handleAdmitClick(session.id)}>
                    <i className="fa-solid fa-circle-check fa-2x check-icon"></i>
                  </button>
                  <button className="button-solid" onClick={() => handleDeleteClick(session.id)}>
                    <i class="fa-solid fa-trash fa-2x no-show"></i>
                  </button>
                  <button className="button-solid">
                    <i className="fa-solid fa-arrows-up-down fa-2x move"></i>
                  </button>
                  <button className="button-solid">
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
