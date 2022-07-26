import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container container d-flex flex-column">
      <div class="alert alert-info page-progress-alert fadein-1" role="alert">
        This page is currently work in progress. It the meantime you can explore
        my <Link to="/portfolio">portfolio</Link>.
      </div>
      <h1 className="main-about-heading fadein-3">I'm Gabriel</h1>
      <p className="about-paragraph fadein-4">
        I'm a web developer and a graphic designer.
      </p>
    </div>
  );
};

export default About;
