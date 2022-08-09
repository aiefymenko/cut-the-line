import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./Header/Header";
import Setting from "./Pages/Settings/Settings";
import Waitlist from "./Pages/Waitlist";
import History from "./Pages/History";

const FeatureSection = () => {
  const [waitlist, setWaitlist] = useState([]);

  const helpRefresh = () => {
    axios.get("http://localhost:3001/api/get_sessions").then((response) => {
      setWaitlist(response.data);
    });
  };

  // GET sessions
  useEffect(() => {
    helpRefresh();
  }, []);

  //POST sessions
  const addWaitlist = (firstName, lastName, phone, groupSize) => {
    axios
      .post("http://localhost:3001/api/new_session", {
        first_name: firstName,
        last_name: lastName,
        contact_number: phone,
        group_size: groupSize,
      })
      .then((response) => {
        setWaitlist([...waitlist, response.data]);
      });
  };

  //Admit user
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
    axios
      .post(`http://localhost:3001/api/complete_session/${sessionId}`, {
        outcome_id: 1,
        position: waitlist[index].position,
      })
      .then(() => {
        newWaitlist.splice(index, 1);
        setWaitlist(newWaitlist);
      });
  };

  //Admin canceled session
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
    axios
      .post(`http://localhost:3001/api/complete_session/${sessionId}`, {
        outcome_id: 4,
        position: waitlist[index].position,
      })
      .then(() => {
        newWaitlist.splice(index, 1);
        setWaitlist(newWaitlist);
      });
  };

  //User didn't show up
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
    axios
      .post(`http://localhost:3001/api/complete_session/${sessionId}`, {
        outcome_id: 2,
        position: waitlist[index].position,
      })
      .then(() => {
        newWaitlist.splice(index, 1);
        setWaitlist(newWaitlist);
      });
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

    axios
      .post(`http://localhost:3001/api/edit_user/${sessionId}`, {
        first_name: firstName,
        last_name: lastName,
        contact_number: phone,
        group_size: groupSize,
      })
      .then(() => {
        setWaitlist(newWaitList);
      });
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
        if (
          session.id !== sessionId &&
          session.position >= newPosition &&
          session.position < oldPosition
        ) {
          session.position++;
        }
      });
    } else {
      newWaitlist.forEach((session) => {
        if (
          session.id !== sessionId &&
          session.position > oldPosition &&
          session.position <= newPosition
        ) {
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

  return (
    <>
      <Header addWaitlist={addWaitlist} />
      <Routes>
        <Route path="settings" element={<Setting />} />
        <Route
          path="waitlist"
          element={
            <Waitlist
              helpRefresh={helpRefresh}
              waitlist={waitlist}
              handleDeleteClick={handleDeleteClick}
              handleNoShowClick={handleNoShowClick}
              handleAdmitClick={handleAdmitClick}
              editWaitlist={editWaitlist}
              updatePosition={updatePosition}
            />
          }
        />
        <Route path="history" element={<History />} />
      </Routes>
    </>
  );
};

export default FeatureSection;
