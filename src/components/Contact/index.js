import React from "react";
import "./style.css";

function Contact() {
    return (
      <div className="container" id="contactSection">
          <h2 className="text-center mt-4 mb-4">// get in touch</h2>
          <div className="d-flex justify-content-center">
            <div className="card" style={{width: "36rem"}}>
                <div className="card-header text-center">
                    @ me on...
                </div>
                <ul className="list-group list-group-flush socialMedia">
                    <li className="list-group-item text-center"><a className="contactLink" href="https://www.linkedin.com/in/jaredbucko"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                    <li className="list-group-item text-center"><a className="contactLink" href="https://www.github.com/jaredbucko"><i class="fab fa-github"></i> GitHub</a></li>
                    <li className="list-group-item text-center"><a className="contactLink" href="https://twitter.com/jbucko_"><i class="fab fa-twitter"></i> Twitter</a></li>
                    <li className="list-group-item text-center"><a className="contactLink" href="mailto: jaredbucko16@gmail.com"><i class="fas fa-envelope sidenavIcon"></i> Email</a></li>
                </ul>
                </div>
          </div>
      </div>
    );
  }
  
  export default Contact;
  