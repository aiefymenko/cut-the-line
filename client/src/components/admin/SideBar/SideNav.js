import React, { useState } from "react";
import SideNavItems from "./SideNavItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SideNavItems.scss";

export default function SideNav() {
  return (
    <nav className="nav">
      <div className="title-links">
        <div className="passport">
          <h4>Passport Service</h4>
          <h4>
            <FontAwesomeIcon icon="fa-solid fa-passport" />
          </h4>
        </div>
        <ul>
          <SideNavItems />
        </ul>
      </div>
      <p>ADMIN</p>
    </nav>
  );
}
