import React, { useState } from "react";

import SideNavItems from "./SideNavItems";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SideNavItems.scss";

export default function SideNav() {
  return (
    <nav className="nav">
      <ul>
        {SideNavItems.map((val, key) => {
          return (
            <li className="active">
              <a href="/">
                <span id="icon">{val.icon}</span>
                <span>{val.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <p>ADMIN</p>
    </nav>
  );
}
