import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./Header/Header";
import Setting from "./Pages/Settings/Settings";
import Waitlist from "./Pages/Waitlist";

const FeatureSection = () => {
  const [waitlist, setWaitlist] = useState([]);

  // GET sessions
  useEffect(() => {
    axios.get("http://localhost:3001/api/get_sessions").then((response) => {
      setWaitlist(response.data);
    });
  }, []);

  //POST sessions
  const addWaitlist = (firstName, lastName, phone, groupSize) => {
    axios.post("http://localhost:3001/api/new_session",
      {
        first_name: firstName,
        last_name: lastName,
        contact_number: phone,
        group_size: groupSize,
      })
      .then((response) => {
        setWaitlist(...waitlist, response.data);
      })
  };

  const editWaitlist = (sessionId, firstName, lastName, phone, groupSize) => {
    const newWaitList = [...waitlist];

    newWaitList.forEach((session) => {
      if (session.id === sessionId) {
        session.first_name = firstName;
        session.last_name = lastName;
        session.contact_number = phone;
        session.group_size = groupSize;
      }
    });

    setWaitlist(newWaitList);
  };

  const updatePosition = (sessionId, newPosition) => {
    const newWaitlist = [...waitlist];
    let oldPosition = -1;

    newWaitlist.forEach((session) => {
      if (session.id === sessionId) {
        oldPosition = session.position;
      }
    });

    if (newPosition < oldPosition) {
      newWaitlist.forEach((session) => {
        if (session.id !== sessionId && session.position >= newPosition && session.position < oldPosition) {
          session.position++;
        }
      });
    }
    else {
      newWaitlist.forEach((session) => {
        if (session.id !== sessionId && session.position > oldPosition && session.position <= newPosition) {
          session.position--;
        }
      });
    }

    newWaitlist.forEach((session) => {
      if (session.id === sessionId) {
        session.position = newPosition;
      }
    });

    setWaitlist(newWaitlist);
  };

  const handleDeleteClick = (sessionId) => {
    const newWaitlist = [...waitlist];
    let oldPosition = -1;

    newWaitlist.forEach((session) => {
      if (session.id === sessionId) {
        oldPosition = session.position;
      }
    });

    newWaitlist.forEach((session) => {
      if (session.position > oldPosition) {
        session.position--;
      }
    });

    const index = waitlist.findIndex((session) => session.id === sessionId);

    newWaitlist.splice(index, 1);

    setWaitlist(newWaitlist);
  }

  const handleNoShowClick = (sessionId) => {
    const newWaitlist = [...waitlist];
    let oldPosition = -1;

    newWaitlist.forEach((session) => {
      if (session.id === sessionId) {
        oldPosition = session.position;
      }
    });

    newWaitlist.forEach((session) => {
      if (session.position > oldPosition) {
        session.position--;
      }
    });

    const index = waitlist.findIndex((session) => session.id === sessionId);

    newWaitlist.splice(index, 1);

    setWaitlist(newWaitlist);
  }

  const handleAdmitClick = (sessionId) => {
    const newWaitlist = [...waitlist];
    let oldPosition = -1;

    newWaitlist.forEach((session) => {
      if (session.id === sessionId) {
        oldPosition = session.position;
      }
    });

    newWaitlist.forEach((session) => {
      if (session.position > oldPosition) {
        session.position--;
      }
    });

    const index = waitlist.findIndex((session) => session.id === sessionId);

    newWaitlist.splice(index, 1);

    setWaitlist(newWaitlist);
  }

  return (
    <>
      <Header addWaitlist={addWaitlist} />
      <Routes>
        <Route path="settings" element={<Setting />} />
        <Route path="waitlist" element={<Waitlist waitlist={waitlist} handleDeleteClick={handleDeleteClick} handleNoShowClick={handleNoShowClick} handleAdmitClick={handleAdmitClick} editWaitlist={editWaitlist} updatePosition={updatePosition} />} />
      </Routes>
    </>
  );
};

export default FeatureSection;
