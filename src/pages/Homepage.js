import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="container-fluid d-flex flex-column align-items-end justify-items-end homepage-container-desktop">
      <div className="container-fluid projects-container">
        <Link className="project-href" to="/project/dev-lib">
          <div className="project">DEV.LIB</div>
        </Link>
        <Link className="project-href" to="/project/portfolio-v1">
          <div className="project">PORTFOLIO v1.0</div>
        </Link>
        <Link className="project-href" to="/project/la-moara">
          <div className="project">LA MOARĂ</div>
        </Link>
        <Link className="project-href" to="/project/orgnz">
          <div className="project">ORGNZ.</div>
        </Link>
        <Link className="project-href" to="/project/logo-portfolio">
          <div className="project">LOGO DESIGN COLLECTION</div>
        </Link>
        <Link className="project-href" to="/project/ui-portfolio">
          <div className="project">UI DESIGN COLLECTION</div>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
