import Header from "./components/Header";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AreasServed from "./Pages/AreasServed";
import PractisedAreas from "./Pages/PractisedAreas";
import Resources from "./Pages/Resources";
import ContactUs from "./Pages/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/areasserved" element={<AreasServed />} />
            <Route path="/practisedareas" element={<PractisedAreas />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
