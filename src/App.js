// Scss
import "./App.scss";

// Packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Containers
import Home from "./Containers/Home/Home";

// Components
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
