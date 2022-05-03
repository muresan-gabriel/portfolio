import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <a
        class="btn btn-menu"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        MENU
      </a>
      <div
        class="offcanvas offcanvas-top"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header d-flex flex-column">
          <h5>Gabriel Mureșan</h5>
          <span>FRONTEND DEVELOPER</span>
          <span>GRAPHIC DESIGNER</span>
        </div>
        <div class="offcanvas-body d-flex flex-column justify-content-center align-items-center">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/services">SERVICES</Link>
        </div>
        <div className="social-container d-flex justify-content-center">
          <a
            href="https://www.linkedin.com/in/gabrielmuresanionut/"
            className="social-icon"
            target="_blank"
          >
            <i className="bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/muresan-gabriel"
            className="social-icon"
            target="_blank"
          >
            <i className="bi-github"></i>
          </a>
          <a
            href="https://www.behance.net/muresangabriel"
            className="social-icon"
            target="_blank"
          >
            <i className="bi-behance"></i>
          </a>
          <a
            href="https://dribbble.com/muresangabriel"
            className="social-icon"
            target="_blank"
          >
            <i className="bi-dribbble"></i>
          </a>
          <a
            href="https://www.instagram.com/muresan__gabriel/"
            className="social-icon"
            target="_blank"
          >
            <i className="bi-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
