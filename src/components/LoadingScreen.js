import { React, useState, useEffect } from "react";

const LoadingScreen = (props) => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      id="loadingScreen"
    >
      <img
        className="logo-svg"
        src="../img/logo-svg.svg"
        alt="logo-loading"
        id="logoSvg"
      />
    </div>
  );
};

export default LoadingScreen;
