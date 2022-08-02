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
      phone_number: "",
      party_size: 3,
      wait_time: "2hrs",
    },
    {
      id: 2,
      first_name: "Artem",
      last_name: "Iefymenko",
      phone_number: "",
      party_size: 2,
      wait_time: "2.5hrs",
    },
    {
      id: 3,
      first_name: "Michael",
      last_name: "Buffone",
      phone_number: "",
      party_size: 4,
      wait_time: "3hrs",
    },
  ]);

  const addWaitlist = (firstName, lastName, phone, groupSize) => {
    setWaitlist([
      ...waitlist,
      {
        id: 4,
        first_name: firstName,
        last_name: lastName,
        phone_number: phone,
        party_size: groupSize,
        wait_time: "",
      },
    ]);
  };

  return (
    <>
      <Header addWaitlist={addWaitlist} />
      <Routes>
        <Route path="settings" element={<Setting />} />
        <Route path="waitlist" element={<Waitlist waitlist={waitlist} />} />
      </Routes>
    </>
  );
};

export default FeatureSection;
