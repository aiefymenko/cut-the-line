import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header/Header";
import Setting from "./Pages/Setting";
import Waitlist from "./Pages/Waitlist";

const FeatureSection = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="admin/settings" element={<Setting />} />
        <Route path="admin/waitlist" element={<Waitlist />} />
      </Routes>
    </>
  );
};

export default FeatureSection;
