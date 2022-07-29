import { useState, useEffect } from "react";
import Axios from "axios";

import FeatureList from "./components/admin/FeatureList";
import Navbar from "./components/admin/Navbar";
// SCSS
import "./App.scss";

//Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock, faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import FeatureListItems from "./components/admin/FeatureListItems";

library.add(faGear, faClock, faUser);

function App() {
  return (
    <main className="App">
      <header className="nav">
        <Navbar />
      </header>
      <div className="side-main">
        <aside>
          <FeatureList />
        </aside>
        <article>hello</article>
      </div>
    </main>
  );
}

export default App;
