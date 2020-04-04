import React from "react";
import "./style.css";

function Header() {
    return (
      <div className="mb-4">
        <div id="spacer"></div>
        <div>
          <h1 className="text-center mt-4 m-4" id="title">Jared Bucko</h1>
        </div>
        <ul className="nav justify-content-center">
          <li className="navItem">
            <h3 className="nav-item mt-2 ml-2 mr-2 text-center">About</h3>
          </li>
          <li className="navItem">
            <h3 className="nav-item mt-2 ml-2 mr-2 text-center">Portfolio</h3>
          </li>
          <li className="navItem">
            <h3 className="nav-item mt-2 ml-2 mr-2 text-center">Contact</h3>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Header;
  