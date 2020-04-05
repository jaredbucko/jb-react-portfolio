import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
      <div className="" id="navbar">
        <ul className="nav justify-content-center mt-0 ml-4 mr-4">
          <li>
            <Link to="/about" className="App-link"><h3 className="m-4 text-center navItem">About</h3></Link>
          </li>
          <li>
            <Link to="/portfolio" className="App-link"><h3 className="m-4 text-center navItem">Portfolio</h3></Link>
          </li>
          <li>
            <Link to="/contact" className="App-link"><h3 className="m-4 text-center navItem">Contact</h3></Link>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  