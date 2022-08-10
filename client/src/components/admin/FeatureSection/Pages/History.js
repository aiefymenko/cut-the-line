import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./History.scss";

const History = () => {

  const [outcome, setOutcome] = useState({
    admitted: "",
    no_show: "",
    user_cancelled: "",
    admin_cancelled: "",
    waiting: ""
  })

  const outcomesArr = () => {
    axios.get("http://localhost:3001/api/get_outcomes").then((response) => {
      const countAdmitted = response.data.filter((obj) => obj.outcome_id === 1).length;
      const countNoShow = response.data.filter((obj) => obj.outcome_id === 2).length;
      const countUserCancelled = response.data.filter((obj) => obj.outcome_id === 3).length;
      const countAdminCancelled = response.data.filter((obj) => obj.outcome_id === 4).length;
      const countWaiting = response.data.filter((obj) => obj.outcome_id === 5).length;
      
      setOutcome({
        admitted: countAdmitted,
        no_show: countNoShow,
        user_cancelled: countUserCancelled,
        admin_cancelled: countAdminCancelled,
        waiting: countWaiting
      })
    });
  };

  useEffect(() => {
    outcomesArr();
  }, []) ;

  return (
    <div className="history">
      <div className="history-card">
            <div className="details">
              <h4 className="waiting">
              "Waiting"
                <span><FontAwesomeIcon icon="fa-solid fa-clock" /></span>
              </h4>
              <h2 className="waiting">{outcome.waiting}</h2>
            </div>
            <div className="details">
              <h4 className="admit">
              "Admitted"
                <span><FontAwesomeIcon icon="fa-solid fa-circle-check" /></span>
              </h4>
              <h2 className="admit">{outcome.admitted}</h2>
      </div>
            <div className="details">
              <h4 className="noShow">
              "No Show"
                <span><FontAwesomeIcon icon="fa-solid fa-ghost" /></span>
              </h4>
              <h2 className="noShow">{outcome.no_show}</h2>
      </div>
            <div className="details">
              <h4 className="cancelled">
              "User Cancelled"
                <span><FontAwesomeIcon icon="fa-solid fa-trash" /></span>
              </h4>
              <h2 className="cancelled">{outcome.user_cancelled}</h2>
            </div>
            <div className="details">
              <h4 className="cancelled">
              "Admin Cancelled"
                <span><FontAwesomeIcon icon="fa-solid fa-trash" /></span>
              </h4>
              <h2 className="cancelled">{outcome.admin_cancelled}</h2>
            </div>
      </div>
    </div>
  );
};

export default History;
