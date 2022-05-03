import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="container-fluid d-flex flex-column align-items-end justify-items-end homepage-container-desktop">
      <div className="container-fluid projects-container">
        <a
          className="project-href"
          href="https://devlibproject.netlify.app/"
          target="_blank"
        >
          <div className="project">DEV.LIB</div>
        </a>
        <a
          className="project-href"
          href="https://orgnz.netlify.app/"
          target="_blank"
        >
          <div className="project">ORGNZ.</div>
        </a>
        <a
          className="project-href"
          href="https://muresan-gabriel.github.io/"
          target="_blank"
        >
          <div className="project">PORTFOLIO v1.0</div>
        </a>
        <a
          className="project-href"
          href="https://la-moara-cognizant-softvision-course.netlify.app"
          target="_blank"
        >
          <div className="project">LA MOARĂ</div>
        </a>
        <a className="project-href">
          <div className="project inactive-link">LOGO DESIGN COLLECTION</div>
        </a>
        <a className="project-href">
          <div className="project inactive-link">UI DESIGN COLLECTION</div>
        </a>
      </div>
    </div>
  );
};

export default Homepage;
