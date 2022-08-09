//Files
import SideNav from "./SideBar/SideNav";
import FeatureSection from "./FeatureSection/FeatureSection";

// SCSS
import "./AdminApp.scss";

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
