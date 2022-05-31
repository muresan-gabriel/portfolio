import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar container navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="logo-svg"
            src="../img/logo-svg.svg"
            alt="logo-loading"
            id="logoSvgNavbar"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/about">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/projects">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/services">
                Services
              </Link>
            </li>
          </ul>
          <form class="d-flex justify-content-center">
            <Link class="btn btn-contact" to="/contact">
              Contact me
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
