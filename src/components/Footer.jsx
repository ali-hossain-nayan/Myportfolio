import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ali-hossain-nayan"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100008164755402&mibextid=ZbWKwL"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p style={{textAlign: 'left'}}>Copyright 2024.All Rights</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
