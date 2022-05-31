import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import GreetingHeading from "../components/GreetingHeading";
import PresentationHeading from "../components/PresentationHeading";

const Homepage = () => {
  return (
    <>
      <div className="container d-flex flex-column home-container justify-content-center">
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center mt-5">
          <div className="blurred-highlight-1"></div>

          <GreetingHeading />
          <PresentationHeading />
          <div>
            <Link
              className="btn btn-primary btn-projects d-flex justify-content-center align-items-center"
              to="/projects"
            >
              My projects
            </Link>
          </div>
        </div>
      </div>
      <div className="container skill-set-container">
        <h3 className="greeting-heading">Services</h3>
        <div className="info-container-home d-flex flex-column flex-wrap justify-content-center align-items-center col">
          <h3 className="info-heading">Web Development</h3>
          <div className="d-flex flex-wrap flex-row justify-content-center">
            <span className="sub-info">React.js</span>
            <span className="sub-info">Node.js</span>
            <span className="sub-info">express.js</span>
            <span className="sub-info">MongoDB</span>
            <span className="sub-info">socket.io</span>
          </div>
          <div className="code-header align-self-center">App.js</div>
          <div className="code-snippet align-self-center">
            <span className="code-formatting code-pink">import</span> React{" "}
            <span className="code-formatting code-pink">from </span>'
            <span className="code-formatting code-yellow">react</span>';
            <br />
            <br />
            <span className="code-formatting code-blue">function</span>{" "}
            <span className="code-formatting code-green">App</span>
            <span className="code-formatting code-pink">()</span>{" "}
            <span className="code-formatting code-pink">&#123;</span> <br />
            &nbsp;<span className="code-formatting code-pink">return</span>{" "}
            <span className="code-formatting code-orange">(</span> <br />
            &nbsp;&nbsp;&#60;
            <span className="code-formatting code-pink">div</span>{" "}
            <span className="code-formatting code-blue">className</span>
            <span className="code-formatting code-pink">=</span>"
            <span className="code-formatting code-yellow">App</span>"&#62;{" "}
            <br />
            &nbsp;&nbsp;&nbsp;&#60;
            <span className="code-formatting code-pink">h1</span>
            &#62;Hello!&#60;/
            <span className="code-formatting code-pink">h1</span>&#62;
            <br />
            &nbsp;&nbsp;&#60;/
            <span className="code-formatting code-pink">div</span>&#62; <br />{" "}
            &nbsp;<span className="code-formatting code-orange">)</span>; <br />
            <span className="code-formatting code-pink">&#125;</span>;
          </div>
        </div>
        <div className="info-container-home info-container-logo-design d-flex flex-column flex-wrap justify-content-center align-items-center col">
          <h3 className="info-heading">Logo Design</h3>
          <div className="d-flex flex-wrap flex-row justify-content-center">
            <span className="sub-info">Minimalistic</span>
            <span className="sub-info">Modern</span>
            <span className="sub-info">Clean</span>
            <span className="sub-info">Responsive</span>
            <span className="sub-info">Expressive</span>
          </div>
          <img
            className="logo-skeleton"
            src="../img/logo-svg-skeleton.svg"
            alt="logo-skeleton"
          />
        </div>
      </div>
      <div className="container">
        <h3 className="greeting-heading">About me</h3>
        <div className="container process-container d-flex flex-wrap justify-content-center">
          <h3 className="info-header  info-container-header">
            I'm a frontend developer and a self-taught graphic designer.
          </h3>
          <div className="information-card">
            <h3 className="info-header orange-gradient-info">Creative</h3>

            <p className="info-card-description">
              I'm always looking to explore new things, to create fantastic
              designs, and to implement clean solutions.
            </p>
          </div>
          <div className="information-card">
            <h3 className="info-header orange-gradient-info">Flexible</h3>

            <p className="info-card-description">
              I always try my best to adapt to all sorts of situations and
              requirements, especially if they put me outside of my comfort
              zone.
            </p>
          </div>
          <div className="information-card">
            <h3 className="info-header orange-gradient-info">Passionate</h3>

            <p className="info-card-description">
              I'm in love with the web and with the flexibility it offers in
              creating fantastic looking and functional applications.
            </p>
          </div>
          <h3 className="info-header info-container-header info-contact-header">
            Let's get in contact!
          </h3>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
          <Link className="btn-cta-home" to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <script src="reveal.js"></script>
    </>
  );
};

export default Homepage;
