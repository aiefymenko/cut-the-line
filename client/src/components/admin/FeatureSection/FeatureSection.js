import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header/Header";
import Setting from "./Pages/Settings/Settings";
import Waitlist from "./Pages/Waitlist";

const FeatureSection = () => {
  const [waitlist, setWaitlist] = useState([
    {
      id: 1,
      first_name: "Joe",
      last_name: "Tang",
      contact_number: "1416-222-1234",
      group_size: 3,
      wait_duration: "80 mins",
      position: 2
    },
    {
      id: 2,
      first_name: "Artem",
      last_name: "Iefymenko",
      contact_number: "1416-567-7890",
      group_size: 2,
      wait_duration: "90 mins",
      position: 1
    },
    {
      id: 3,
      first_name: "Michael",
      last_name: "Buffone",
      contact_number: "1647-299-4567",
      group_size: 4,
      wait_duration: "60 mins",
      position: 3
    },
  ].sort((a, b) => a.position - b.position));

  const addWaitlist = (firstName, lastName, phone, groupSize) => {
    setWaitlist([
      ...waitlist,
      {
        id: 4,
        first_name: firstName,
        last_name: lastName,
        contact_number: phone,
        group_size: groupSize,
        wait_duration: "0 min",
        position: 4
      },
    ]);
  };

  const handleDeleteClick = (sessionId) => {
    const newWaitlist = [...waitlist];

    const index = waitlist.findIndex((session) => session.id === sessionId);

    newWaitlist.splice(index, 1);

    setWaitlist(newWaitlist);
  }

  const handleNoShowClick = (sessionId) => {
    const newWaitlist = [...waitlist];

    const index = waitlist.findIndex((session) => session.id === sessionId);

    newWaitlist.splice(index, 1);

    setWaitlist(newWaitlist);
  }

  const handleAdmitClick = (sessionId) => {
    const newWaitlist = [...waitlist];

    const index = waitlist.findIndex((session) => session.id === sessionId);

    newWaitlist.splice(index, 1);

    setWaitlist(newWaitlist);
  }

  return (
    <>
      <Header addWaitlist={addWaitlist} />
      <Routes>
        <Route path="settings" element={<Setting />} />
        <Route path="waitlist" element={<Waitlist waitlist={waitlist} handleDeleteClick={handleDeleteClick} handleNoShowClick={handleNoShowClick} handleAdmitClick={handleAdmitClick} />} />
      </Routes>
    </>
  );
};

export default FeatureSection;
