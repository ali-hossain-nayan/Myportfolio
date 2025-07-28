import React, { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const formInitialDetails = {
    fullName: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      let result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({ success: false, message: "Something went wrong. Please try again later." });
      }
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: "Network error. Please try again later." });
    }
  };

  return (
    <section
      className="contact"
      id="contact"
      style={{
        // backgroundColor: "#121212",
        color: "#eee",
        padding: "60px 0",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0 text-center">
            <img
              src={contactImg}
              alt="Contact"
              style={{ maxWidth: "100%", height: "auto", filter: "brightness(0.9)" }}
            />
          </Col>
          <Col md={6}>
            <h2 style={{ marginBottom: "1.5rem", fontWeight: "700" }}>
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col xs={12} className="mb-3">
                  <input
                    type="text"
                    value={formDetails.fullName}
                    placeholder="Full Name"
                    required
                    onChange={(e) => onFormUpdate("fullName", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      borderRadius: "8px",
                      border: "1px solid #444",
                      // backgroundColor: "#222",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  />
                </Col>
                <Col xs={12} className="mb-3">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    required
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      borderRadius: "8px",
                      border: "1px solid #444",
                      // backgroundColor: "#222",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  />
                </Col>
                <Col xs={12} className="mb-4">
                  <textarea
                    rows="5"
                    value={formDetails.message}
                    placeholder="Your Message"
                    required
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      borderRadius: "8px",
                      border: "1px solid #444",
                      // backgroundColor: "#222",
                      color: "black",
                      fontSize: "1rem",
                      resize: "vertical",
                    }}
                  />
                </Col>
                <Col xs={12} className="d-flex justify-content-start">
                  <Col xs={12} className="d-flex justify-content-start">
                    <input
                      type="submit"
                      value={buttonText}
                      style={{
                        width: "100%",
                        padding: "12px 15px",
                        borderRadius: "8px",
                        border: "1px solid #444",
                        backgroundColor: "#f5f5f5",
                        color: "#121212",
                        fontSize: "1rem",
                        fontWeight: "500",
                        cursor: "pointer",
                        textAlign: "center",
                        boxSizing: "border-box"
                      }}
                    />
                  </Col>




                </Col>
                {status.message && (
                  <Col xs={12} style={{ marginTop: "1rem" }}>
                    <p
                      style={{
                        color: status.success ? "#4BB543" : "#FF4136",
                        fontWeight: "600",
                      }}
                      role="alert"
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
