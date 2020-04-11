import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
    return (
      <div id="footer">
        <Link to="/" className="footerLink"><h5 className="text-right p-3 m-0" id="copyright">©2020 Jared I. Bucko</h5></Link>
      </div>
    );
  }
  
  export default Footer;
  