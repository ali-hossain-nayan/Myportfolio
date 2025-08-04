import React, { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const formInitialDetails = { fullName: "", email: "", message: "" };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(formDetails),
      });
      let result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus(
        result.code === 200
          ? { success: true, message: "Message sent successfully!" }
          : { success: false, message: "Something went wrong, please try later." }
      );
    } catch {
      setButtonText("Send");
      setStatus({ success: false, message: "Network error, please try later." });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row className="align-items-center">
          <Col
            md={6}
            className="mb-4 mb-md-0 d-flex justify-content-center"
            aria-label="Contact Illustration"
          >
            <img src={contactImg} alt="Contact Us Illustration" className="contact-image" />
          </Col>

          <Col md={6}>
            <h2 className="section-title">Get In Touch</h2>

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <input
                type="text"
                name="fullName"
                value={formDetails.fullName}
                placeholder="Full Name"
                onChange={(e) => onFormUpdate("fullName", e.target.value)}
                required
                className="input-field"
                aria-label="Full Name"
              />
              <input
                type="email"
                name="email"
                value={formDetails.email}
                placeholder="Email Address"
                onChange={(e) => onFormUpdate("email", e.target.value)}
                required
                className="input-field"
                aria-label="Email Address"
              />
              <textarea
                name="message"
                rows="5"
                value={formDetails.message}
                placeholder="Your Message"
                onChange={(e) => onFormUpdate("message", e.target.value)}
                required
                className="textarea-field"
                aria-label="Message"
              />
              <button type="submit" className="btn-submit" aria-live="polite">
                {buttonText}
              </button>

              {status.message && (
                <p
                  className={`status-message ${status.success ? "success" : "error"}`}
                  role="alert"
                  tabIndex={-1}
                >
                  {status.message}
                </p>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
