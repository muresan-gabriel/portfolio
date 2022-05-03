import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container-fluid d-flex justify-content-center flex-column align-items-left about-container-desktop">
      <p className="presentation-paragraph">
        Hello! I'm Gabriel. <br />
        I'm a frontend developer and a graphic designer.
        <br />
        I aspire to craft fantastic web experiences.
        <br />
        Got a great project in mind?
        <br />
        Let's get in contact!
        <br />
      </p>
      <a href="mailto:contact@gabrielmuresan.site" className="btn-email">
        contact@gabrielmuresan.site
      </a>
    </div>
  );
};

export default About;
