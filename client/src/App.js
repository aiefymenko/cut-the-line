import { Routes, Route } from "react-router-dom";

//Files
import AdminApp from "./components/admin/AdminApp";
import UserJoin from "./components/user/UserJoin";
import UserForm from "./components/user/UserForm";
import UserWait from "./components/user/UserWait";

// SCSS

//Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faClock,
  faGear,
  faCircleCheck,
  faUserPen,
  faCircleXmark,
  faPassport,
  faGhost,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faGear,
  faClock,
  faUserPen,
  faCircleCheck,
  faCircleXmark,
  faPassport,
  faGhost,
  faTrash
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="/user" element={<UserJoin />} />
        <Route path="/user/form" element={<UserForm />} />
        <Route path="/user/wait/:position" element={<UserWait />} />
      </Routes>
    </div>
  );
}

export default App;
