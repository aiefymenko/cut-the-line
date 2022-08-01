import { useState, useEffect } from "react";
import Axios from "axios";
import { Routes, Route } from "react-router-dom";

//Files
import UserApp from "./components/user/UserApp";
import AdminApp from "./components/admin/AdminApp";

// SCSS

//Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faClock,
  faGear,
  faEdit,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

library.add(faGear, faClock, faEdit, faCheck, faXmark);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="/user/*" element={<UserApp />} />
      </Routes>
    </div>
  );
}

export default App;
