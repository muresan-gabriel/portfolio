import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Homepage = (props) => {
  const [firstVisit, setFirstVisit] = useState(props.firstVisit);
  const [string, setString] = useState("Hello!");
  const [stringClassList, setStringClassList] = useState("main-text fadein");
  const [counter, setCounter] = useState(0);
  const [scrollClassList, setScrollClassList] = useState(
    "scroll-tap-container"
  );

  const navigate = useNavigate();

  const [transitionOnLeave, setTransitionOnLeave] = useState(
    "main-app-container d-flex flex-column"
  );

  const transitionStart = () => {
    if (transitionOnLeave === "main-app-container d-flex flex-column") {
      setTransitionOnLeave("main-app-container d-flex flex-column fadeOut");
    }
    setTimeout(() => {
      navigate("/portfolio");
    }, 760);
  };

  const textArray = [
    "I'm Gabriel.",
    "I'm a web developer.",
    "I'm a Software Engineer @ Computacenter.",
    "Let's craft a fantastic web together.",
  ];

  const handleScroll = () => {
    if (counter === textArray.length) setStringClassList("main-text");
    else setStringClassList("main-text fadeOut");
    if (counter < textArray.length) {
      setTimeout(() => {
        setString(textArray[counter]);
        setStringClassList("main-text fadein");
        setCounter(counter + 1);
      }, 800);
    }

    if (counter === textArray.length) {
      setStringClassList("main-text fadeOut");
      setScrollClassList("scroll-tap-container fadeOut");
      setTimeout(() => {
        setFirstVisit(false);

        props.setFirstVisit(false);

        setTimeout(() => {
          setScrollClassList("scroll-tap-container fadeOut");
          setStringClassList("main-text fadein");
        }, 800);
      }, 800);
    }
  };

  if (firstVisit) {
    return (
      <section
        className="home-container"
        onTouchStart={handleScroll}
        onWheel={handleScroll}
      >
        <div className="main-home d-flex justify-content-center align-items-center">
          <h4 className={stringClassList}>{string}</h4>
        </div>
        <div className={scrollClassList}>
          <span className="scroll-desktop fadein">Scroll</span>
          <div className="tap-mobile fadein">
            Tap the screen
            <div className="circle-fill"></div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className={transitionOnLeave}>
        <div className="social-container d-flex flex-column align-self-end">
          <a
            href="https://www.linkedin.com/in/gabrielmuresanionut/"
            target="_blank"
            className="bi social-icon bi-linkedin slide-in-right-1"
          ></a>
          <a
            href="https://github.com/muresan-gabriel"
            target="_blank"
            className="bi social-icon bi-github slide-in-right-2"
          ></a>
          <a
            href="https://dribbble.com/muresangabriel"
            target="_blank"
            className="bi social-icon bi-dribbble slide-in-right-3"
          ></a>
          <a
            href="https://www.behance.net/muresangabriel"
            target="_blank"
            className="bi social-icon bi-behance slide-in-right-4"
          ></a>
        </div>
        <section className="home-container d-flex flex-column justify-content-center container">
          <div className="main-container d-flex flex-column">
            <h1 className="display-heading">
              <span className="fadein-1">Web Developer</span>
              <br />
              <span className="fadein-2">Graphic Designer</span>
            </h1>

            <p className="fadein-3">
              I'm a junior developer experienced with React.
              <br /> I'm doing my best to contribute to a fantastic web.
            </p>

            <a className="btn btn-portfolio fadein-3" onClick={transitionStart}>
              Portfolio
            </a>
          </div>
        </section>
      </div>
    );
  }
};

export default Homepage;
