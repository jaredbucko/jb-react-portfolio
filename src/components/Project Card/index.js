import React from "react";
import "./style.css";

function ProjectCard(props) {
    return (
      <div className="container">
        <div className="row">
          {props.projects.map(item => (
            <div className="col projectCol d-flex justify-content-center">          
              <div className="card" style={{width: "20rem"}}>
                <img src={item.screenshot} className="card-img-top" alt={item.title}></img>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <div className="d-flex justify-content-center">
                      <a href={item.launch} className="btn btn-primary" id="launch">Launch</a>
                      <a href={item.github} className="btn btn-primary" id="github">GitHub</a>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ProjectCard;
  