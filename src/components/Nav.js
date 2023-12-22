import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div>
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <div className={`navbar_logo ${showLinks ? "hide-logo" : ""}`}>
          <img id="windr" src="images/logowindr.png" alt="logo" />
        </div>
        <ul className="navbar_links">
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Accueil
            </a>
          </li>
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Classements
            </a>
          </li>
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Riders
            </a>
          </li>
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Catalogue
            </a>
          </li>
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Documentation
            </a>
          </li>
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Nouveautés
            </a>
          </li>
        </ul>
        <button className="navbar_burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>

        <button
          id="connexion"
          href="/"
          className={`navbar_logo ${showLinks ? "hide-button" : ""}`}
        >
          Connexion
        </button>
      </nav>
    </div>
  );
}

export default Nav;
