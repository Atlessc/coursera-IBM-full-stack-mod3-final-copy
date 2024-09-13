import React from "react";
import "./index.css";

const NavBar = () => {
  return (
    <nav>

      <div className="Section1">
        <h1>Tyler Smith</h1>

        <p>
          {/* icon */}
          email@email.com
        </p>
        
        <p>
          {/* icon */}
          +1 555-555-5555
        </p>
      </div>

      <div className="Section2">
        <button className="NavItem">
          <a href="#AboutMe">
            About me
          </a>
        </button>

        <button className="NavItem">
          <a href="#Skills">
            Skills
          </a>
        </button>

        <button className="NavItem">
          <a href="#Projects">
            Projects
          </a>
        </button>

        <button className="NavItem">
          <a href="#Recommendations">
            Recommendations
          </a>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
