import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
      <div className="p-0" id="navbar">
        <ul className="nav justify-content-center p-2 m-0">
          <li className="navList">
            <Link to="/" className="App-link"><h3 className="m-2 p-3 text-center navItem d-flex align-items-center">jib_</h3></Link>
          </li>
          <li className="navList">
            <Link to="/about" className="App-link"><h3 className="m-2 p-3 text-center navItem d-flex align-items-center">bio_</h3></Link>
          </li>
          <li className="navList">
            <Link to="/portfolio" className="App-link"><h3 className="m-2 p-3 text-center navItem d-flex align-items-center">projects_</h3></Link>
          </li>
          <li className="navList">
            <Link to="/contact" className="App-link"><h3 className="m-2 p-3 text-center navItem d-flex align-items-center">@_</h3></Link>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  