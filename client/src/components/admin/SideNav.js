import React, { useState } from "react";

import CustomSideLink from "./CustomSideLink";

import "./SideNavItems.scss";

export default function SideNav(props) {
  return (
    <nav className="nav">
      <ul>
        <CustomSideLink />
      </ul>
      <p>ADMIN</p>
    </nav>
  );
}
