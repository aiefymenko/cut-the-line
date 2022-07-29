import { useState, useEffect } from "react";
import Axios from "axios";

// SCSS
import "./App.scss";

//Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock, faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import FeatureListItems from "./components/admin/SideNavItems";
import SideNav from "./components/admin/SideNav";
import FeatureSection from "./components/admin/FeatureSection";

library.add(faGear, faClock, faUser);

function App() {
  return (
    <div className="App">
      <aside>
        <SideNav />
      </aside>
      <main>
        <FeatureSection />
      </main>
    </div>
  );
}

export default App;
