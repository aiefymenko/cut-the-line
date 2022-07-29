import { useState, useEffect } from "react";
import Axios from "axios";

// SCSS
import "./App.scss";

//Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock, faGear } from "@fortawesome/free-solid-svg-icons";
import SideNav from "./components/admin/SideNav";
import FeatureSection from "./components/admin/FeatureSection";

library.add(faGear, faClock);

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
