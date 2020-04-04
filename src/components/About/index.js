import React from "react";
import profileImg from "../../assets/aboutme.jpeg";
import "./style.css";

function About() {
    return (
      <div className="container max-vh-10">
          <div className="row d-flex justify-content-center"><h2 className="text-center mt-4 mb-4">About</h2></div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4" style={{paddingBottom: "15px"}}>
              <img src={profileImg} className="img-fluid img-thumbnail" alt="profile"></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8">
              <p>Teacher, musician, seminarian, barista, Uber driver, stay-at-home-parent... my journey into the world of web and software development has definitely not been a straight line. While I began my professional career as a Social Studies teacher, from 2016-2019 I transitioned to a substitute role while pursuing other career and educational opportunities. After my wife gave birth to our son in 2019, I began to consider whether or not to return to teaching full-time. In the end, I decided instead to sign up for the a 6-month Web Development boot camp through the University of Oregon, and I am so glad that I did! While I greatly value my 8 years as an educator, I am thrilled to be in a new field, taking on a new challenge--one that better taps into my love for technology and interest in solving complex problems while constantly learning new skills. As I near the end of Bootcamp, I am close to earning my certificate in full-stack web development, and I am also taking my first steps in learning C#.net in my new role as an Operations Technician at Selectron Technologies in Tigard, OR.</p>
            </div>
          </div> 
      </div>
    );
  }
  
  export default About;
 