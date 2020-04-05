import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
    return (
      <div className="" id="footer">
        <Link to="/" className="App-link"><h5 className="text-right mb-0 p-4" id="copyright">©2020 Jared Ives Bucko</h5></Link>
      </div>
    );
  }
  
  export default Footer;
  