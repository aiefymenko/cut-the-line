import React, { useState } from "react";

import FeatureListItems from "./FeatureListItems";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FeatureListItems.scss";

export default function FeatureList() {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {FeatureListItems.map((val, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => (window.location.pathname = val.link)}
              className="sidebar-rows"
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
      <p>ADMIN</p>
    </div>
  );
}
