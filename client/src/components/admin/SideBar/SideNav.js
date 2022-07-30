import React, { useState } from "react";
import SideNavItems from "./SideNavItems";

import "./SideNavItems.scss";

export default function SideNav() {
  return (
    <nav className="nav">
      <div className="title-links">
        <h4>Passport Service</h4>
        <ul>
          <SideNavItems />
        </ul>
      </div>
      <p>ADMIN</p>
    </nav>
  );
}
