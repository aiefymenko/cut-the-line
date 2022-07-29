import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import Setting from "./Setting";
import Waitlist from "./Waitlist";

const FeatureSection = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/settings" element={<Setting />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
    </>
  );
};

export default FeatureSection;
