import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar container-fluid sticky-top">
        <Link className="navbar-logo" to="/">
          <img
            className="navbar-svg"
            src="../img/logo-svg.svg"
            alt="logo-loading"
          />
        </Link>
        <button
          type="button"
          className="ham-menu"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop"
        >
          <i className="bi-list"></i>
        </button>
        <div
          className="offcanvas offcanvas-top"
          tabIndex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div className="offcanvas-header d-flex flex-column justify-content-center">
            <button
              type="button"
              className="ham-menu close-nav align-self-end"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="bi-x-lg"></i>
            </button>
          </div>
          <div
            className="offcanvas-body d-flex flex-column justify-content-center align-items-center"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <Link className="nav-link" to="/">
              HOME
            </Link>
            <Link className="nav-link" to="/about">
              ABOUT
            </Link>
            <Link className="nav-link" to="/portfolio">
              PORTFOLIO
            </Link>
            <Link className="nav-link" to="/contact">
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
