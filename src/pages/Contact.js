import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const Contact = () => {
  return (
    <div className="form-container d-flex justify-content-center align-items-center">
      <PrivacyPolicy></PrivacyPolicy>
      <form
        className="contact-form d-flex flex-column align-items-start fadein"
        name="contact"
      >
        <h4 className="display-heading">Let's get in contact!</h4>

        <input
          className="form-input-short-text"
          id="fullName"
          type="text"
          name="name"
          placeholder="Full Name"
        />
        <span className="error-message d-none" id="errorName">
          The name should be longer than 3 characters.
        </span>
        <span className="error-message d-none" id="errorNameCharacters">
          The name should not contain any special characters.
        </span>
        <input
          className="form-input-short-text"
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <span className="error-message d-none" id="errorEmail">
          Please enter a valid email address.
        </span>
        <select className="select" id="select">
          <option>Reason of Contact</option>
          <option>Hiring / Job Proposal</option>
          <option>Project Proposal</option>
          <option>Collaboration</option>
          <option>Requesting Additional Information</option>
        </select>
        <span className="error-message d-none" id="errorSelect">
          Please select a valid reason of contact.
        </span>
        <textarea
          className="form-input-long-text"
          id="message"
          type="text"
          name="message"
          placeholder="Message"
        ></textarea>
        <span className="error-message d-none" id="errorMessage">
          The message should be atleast 50 characters long.
        </span>
        <span className="error-message d-none" id="errorMessageLength">
          The message should not be longer than 250 characters.
        </span>
        <div>
          <input
            className="form-check-box"
            type="checkbox"
            id="privacyPolicy"
            name="privacyPolicy"
          />{" "}
          I have read and I agree with the{" "}
          <button
            type="button"
            className="policy-link"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Privacy Policy
          </button>
          .
        </div>
        <span className="error-message d-none" id="errorPolicy">
          You must read and accept the Privacy Policy.
        </span>
        <button className="btn btn-submit-form" type="submit" id="submitButton">
          Send
        </button>
      </form>
      <Helmet>
        <script src="form-validation.js"></script>
      </Helmet>
    </div>
  );
};

export default Contact;
