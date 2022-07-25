import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-container d-flex flex-column justify-content-center align-items-center">
      <h3 className="email-cta fadein-1">
        Drop me an <a href="mailto:contact@gabrielmuresan.site">email</a>!
      </h3>
      <p className="additional-contact-info fadein-3">
        I am currently open to job offers.
        <br />I am not looking for freelance opportunities.
      </p>
    </div>
  );
};

export default Contact;
