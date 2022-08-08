//Files
import SideNav from "./SideBar/SideNav";
import FeatureSection from "./FeatureSection/FeatureSection";

// SCSS
import "./AdminApp.scss";

//Font Awesome
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faClock, faGear } from "@fortawesome/free-solid-svg-icons";

// library.add(faGear, faClock);

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
