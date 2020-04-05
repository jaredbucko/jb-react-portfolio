import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
      <div className="" id="navbar">
        <ul className="nav justify-content-center mt-0 ml-4 mr-4">
          <li className="navList">
            <Link to="/" className="App-link"><h3 className="m-4 text-center navItem">jib_</h3></Link>
          </li>
          <li className="navList">
            <Link to="/about" className="App-link"><h3 className="m-4 text-center navItem">bio_</h3></Link>
          </li>
          <li className="navList">
            <Link to="/portfolio" className="App-link"><h3 className="m-4 text-center navItem">projects_</h3></Link>
          </li>
          <li className="navList">
            <Link to="/contact" className="App-link"><h3 className="m-4 text-center navItem">@_</h3></Link>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  