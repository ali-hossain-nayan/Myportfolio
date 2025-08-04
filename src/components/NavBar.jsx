import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../index.css";

const NavBar = ({ onToggle }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // track expanded state

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  // Handle toggle event
  const handleToggle = (isExpanded) => {
    setExpanded(isExpanded);
    if (onToggle) onToggle(isExpanded); // notify parent component
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={handleToggle} // called when toggle is clicked
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container className="d-flex justify-content-between align-items-center px-3">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="text-center flex-column flex-lg-row gap-2">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={activeLink === "about" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("about")}
            >
              About
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
