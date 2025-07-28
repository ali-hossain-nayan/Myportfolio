import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#1a1a1a",
        padding: "25px 0",
        color: "#eee",
        fontSize: "0.9rem",
      }}
    >
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0"
          >
            <div className="social-icon d-flex gap-4">
              <a
                href="https://www.linkedin.com/in/ali-hossain-nayan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={navIcon1}
                  alt="LinkedIn"
                  style={{ height: "28px", transition: "transform 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100008164755402&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={navIcon2}
                  alt="Facebook"
                  style={{ height: "28px", transition: "transform 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={navIcon3}
                  alt="Instagram"
                  style={{ height: "28px", transition: "transform 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </a>
            </div>
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center justify-content-md-end"
          >
            <p style={{ margin: 0 }}>© {new Date().getFullYear()} All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
