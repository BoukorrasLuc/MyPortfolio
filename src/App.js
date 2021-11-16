// Scss
import "./App.scss";

// Packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Containers
import Home from "./Containers/Home/Home";
import Portfolio from "./Containers/Portfolio/Portfolio";
import Contact from "./Containers/Contact/Contact";
import Apropos from "./Containers/Apropos/Apropos";

// Components
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Apropos" element={<Apropos />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
