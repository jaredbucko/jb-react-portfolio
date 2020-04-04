import React from "react";
import ProjectCard from "../Project Card";
import ptr from "../../assets/pass-the-remote.png";
import starGazer from "../../assets/star-gazer.png";
import burgerJournal from "../../assets/burger-journal.png";
import weatherImg from "../../assets/weather.png";
import directoryImg from "../../assets/employee-directory.png";
import plannerImg from "../../assets/day-planner.png";
import "./style.css";

const projects = [
  {
    id: 1,
    screenshot: ptr,
    title: "Pass the Remote",
    description: "Group project one! Pass the Remote is an entertainment discovery engine that helps you narrow down what to watch when the options are overwhelming.",
    launch: "https://jaredbucko.github.io/pass-the-remote/index.html",
    github: "https://github.com/jaredbucko/pass-the-remote"
  },
  {
    id: 2,
    screenshot: starGazer,
    title: "Star Gazer",
    description: "Group project two! Star Gazer is a node.js app featuring user authentication and a clean interface for learning about all 88 celestial constellations.",
    launch: "https://limitless-atoll-63723.herokuapp.com/",
    github: "https://github.com/jaredbucko/star-gazer"
  },
  {
    id: 3,
    screenshot: burgerJournal,
    title: "Burger Journal",
    description: "Admit it, cheeseburgers are amazing. The Burger Journal is a node.js app that allows users to keep a log of burgers they have eaten and burgers they want to eat.",
    launch: "https://guarded-citadel-13071.herokuapp.com/",
    github: "https://github.com/jaredbucko/burger-logger"
  },
  {
    id: 4,
    screenshot: weatherImg,
    title: "Weather Dashboard",
    description: "This weather dashboard displays the current weather conditions and forecast at the user's current location. Users can also search for conditions by city.",
    launch: "https://jaredbucko.github.io/weather-dashboard/index.html",
    github: "https://github.com/jaredbucko/weather-dashboard"
  },
  {
    id: 5,
    screenshot: directoryImg,
    title: "Employee Directory",
    description: "React.js app for displaying a company directory. The search bar dynamically narrows results as the user types and both name columns can be sorted alphabetically.",
    launch: "https://protected-plateau-43028.herokuapp.com/",
    github: "https://github.com/jaredbucko/employee-directory"
  },
  {
    id: 6,
    screenshot: plannerImg,
    title: "Day Planner",
    description: "No-frills day planner app that allows users to save an input for each hour of the business day. The color of each block changes as the day progresses.",
    launch: "https://jaredbucko.github.io/day-planner/index.html",
    github: "https://github.com/jaredbucko/day-planner"
  }
];

function Portfolio() {
    return (
      <div>
          <h2 className="text-center mt-4 mb-4">Portfolio</h2>
          <div>
            <ProjectCard projects={projects}/>
          </div>
      </div>
    );
  }
  
  export default Portfolio;
 