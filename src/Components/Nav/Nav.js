// CSS
import "./Nav.css";

// Packages
import { useState } from "react";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div className="navbar__logo">Logo</div>
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1">
          <a href="/" className="navbar__link">
            Accueil
          </a>
        </li>
        <li className="navbar__item slideInDown-2">
          <a href="/a-propos" className="navbar__link">
            A propos
          </a>
        </li>
        <li className="navbar__item slideInDown-3">
          <a href="/portfolio" className="navbar__link">
            Portfolio
          </a>
        </li>
        <li className="navbar__item slideInDown-4">
          <a href="/contact" className="navbar__link">
            Contact
          </a>
        </li>
      </ul>

      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}
export default Nav;
