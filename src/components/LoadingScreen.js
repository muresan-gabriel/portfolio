import { React, useState, useEffect } from "react";

const LoadingScreen = () => {
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      id="loadingScreen"
    >
      <img
        className="logo-svg"
        src="../img/logo-svg.svg"
        alt="logo-loading"
        id="logoSvg"
      />
      <div className="hide-bug">
        {setTimeout(() => {
          document.getElementById("loadingScreen").classList.add("fadeOut");
        }, 1300)}
      </div>
    </div>
  );
};

export default LoadingScreen;
