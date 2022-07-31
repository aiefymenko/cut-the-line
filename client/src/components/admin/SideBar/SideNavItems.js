import React from "react";
import { NavLink } from "react-router-dom";
import SideNavData from "./SideNavData";
import "./SideNavItems.scss";

const SideNavItems = () => {
  return SideNavData.map((val, key) => {
    return (
      <li key={key}>
        <NavLink
          to={val.link}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <span id="icon">{val.icon}</span>
          <span>{val.title}</span>
        </NavLink>
      </li>
    );
  });
};

export default SideNavItems;
