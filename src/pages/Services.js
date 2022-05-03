import React from "react";

const Services = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center services-container-desktop">
      <div className="service-card d-flex flex-column justify-content-center">
        <h3>LOGO DESIGN</h3>
        <span>€50 - €150</span>
        <hr />
        <p>
          We find the perfect logo to fit your brand.
          <br />
          Includes three unique options to pick from.
          <br />
        </p>
      </div>
      <div className="service-card d-flex flex-column justify-content-center">
        <h3>BRAND STRATEGY</h3>
        <span>€-</span>
        <hr />
        <p>Currently unavailable.</p>
      </div>
      <div className="service-card d-flex flex-column justify-content-center">
        <h3>PRESENTATION WEBSITE / LANDING</h3>
        <span>€50 - €350</span>
        <hr />
        <p>
          Fantastic landing pages for your projects or custom portfolios to
          showcase your work.
        </p>
      </div>
      <div className="service-card d-flex flex-column justify-content-center">
        <h3>PRINT DESIGN</h3>
        <span>€50 - €550</span>
        <hr />
        <p>
          Includes, but is not limited to business cards, packages, menus,
          stickers, etc.
        </p>
      </div>
      <div className="service-card d-flex flex-column justify-content-center">
        <h3>CUSTOM SERVICE</h3>
        <span>Minimum €475</span>
        <hr />
        <p>
          Mixed services, specially accomodated for your project's needs.
          <br />
        </p>
      </div>
    </div>
  );
};

export default Services;
