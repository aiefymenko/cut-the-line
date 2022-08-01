import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./Waitlist.scss";


export default function Waitlist({waitlist}) {

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
        {waitlist.map(waitlist => {
          return (
          <tr key={waitlist.id}>
            <td>{waitlist.id}</td>
            <td>{waitlist.first_name}</td>
            <td>{waitlist.last_name}</td>
            <td>{waitlist.phone_number}</td>
            <td>{waitlist.party_size}</td>
            <td>{waitlist.wait_time}</td>
            <td className="icon">
            <button className="button-solid" ><i className="fa-solid fa-circle-check fa-2x check-icon"></i></button>
            <button className="button-solid" ><i className="fa-solid fa-bell fa-2x no-show"></i></button>
            <button className="button-solid" ><i className="fa-solid fa-arrows-up-down fa-2x move"></i></button>
            <button className="button-solid" ><i className="fa-solid fa-user-pen fa-2x update"></i></button>
            <button className="button-solid" ><i className="fa-solid fa-comment-sms fa-2x sms"></i></button>
            </td>
          </tr>
            )})}
        </tbody>
      </Table>
      </div>
    )


}

