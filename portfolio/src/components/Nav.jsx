import React from "react";
import SimpleMenu from "./SimpleMenu";

function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-menu">
        <ul>
          <li><a href='#about'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#resume'>Resume</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#extras'>Extras</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
      <h1>Lyn Santi</h1>

      <div className="mobileMenu">
        {" "}
        <SimpleMenu />
      </div>
    </div>
  );
}

export default Nav;
