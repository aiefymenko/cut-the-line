import React from "react";
import { NavLink } from "react-router-dom";
import SideData from "./SideData";
import "./SideNavItems.scss";

const CustomSideLink = ({ to, children, ...props }) => {
  let pathname = window.location.pathname;

  return SideData.map((val, key) => {
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

export default CustomSideLink;
