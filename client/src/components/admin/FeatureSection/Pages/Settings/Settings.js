import React from "react";

import HoursForm from "./Hours/HoursForm";
import BusinessForm from "./Business/BusinessForm";
import "./Settings.scss";

const Settings = () => {
  return (
    <div className="card">
      <div className="inside">
        <HoursForm />
        <BusinessForm />
      </div>
    </div>
  );
};

export default Settings;
