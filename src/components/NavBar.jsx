import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import resume from "../assets/Updated-Resume .pdf";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Navbar expand="lg" className={`${scrolled ? "scrolled" : ""} py-3`}>
        <Container>
          <Navbar.Brand href="#home">
            {/* <img src={logo} alt="Logo" /> */}
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Nav Links */}
            <Nav className="me-auto text-center text-lg-start">
              <Nav.Link
                href="#home"
                className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={activeLink === "contact" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="fw-bold text-warning"
                style={{ zIndex: "1000" }}
              >
                <h5 className="m-0">Download Resume</h5>
              </Nav.Link>
            </Nav>

            {/* Social Icons + Button (Responsive) */}
            <span className="navbar-text d-flex flex-column flex-lg-row align-items-center gap-3 mt-3 mt-lg-0">
              <div className="d-flex gap-3 justify-content-center">
                <a href="https://www.linkedin.com/in/ali-hossain-nayan" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="LinkedIn" style={{ width: "24px", height: "24px" }} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100008164755402&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="Facebook" style={{ width: "24px", height: "24px" }} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon3} alt="Instagram" style={{ width: "24px", height: "24px" }} />
                </a>
              </div>
              <button className="vvd btn btn-outline- btn-sm mt-2 mt-lg-0">
                <span>Let's connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
