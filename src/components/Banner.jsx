import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaReact, FaJs, FaHtml5, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import headerImg from "../assets/img/header-img.jpg";
import resume from "../assets/Updated-Resume .pdf";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

 return (
    <section
      className="banner"
      id="home"
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
        padding: "40px 0",
        margin: "20px"
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Text Section */}
          <Col xs={12} md={7} className="text-start">
            <div style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              <h1 className="fw-bold mb-3">Front-end React Developer</h1>
              <p className="mb-4">
                Hi, I am Ali Hossain Nayan. A passionate React developer with
                hands-on experience in building responsive web applications from
                Dhaka, Bangladesh.
              </p>

              {/* Resume Download Button */}
              <a
                href={resume}
                download="Ali_Hossain_Nayan_Resume.pdf"
                className="btn btn-primary mb-4"
                style={{
                  padding: "10px 25px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  borderRadius: "8px",
                  textDecoration: "none",
                  display: "inline-block",
                  backgroundColor: "#61dafb",
                  color: "#121212",
                  transition: "background-color 0.3s ease",
                  userSelect: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#21a1f1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#61dafb";
                }}
                aria-label="Download Resume"
              >
                Download Resume
              </a>

              {/* Tech Stack Section */}
              <div
                className="mt-4 d-flex flex-wrap align-items-center"
                style={{
                  fontSize: "1.8rem",
                  gap: "1.2rem",
                  justifyContent: "flex-start",
                }}
              >
                <h4 className="mb-0">Tech Stack |</h4>
                <FaReact color="#61DBFB" title="React.js" />
                <FaJs color="#F0DB4F" title="JavaScript" />
                <SiTypescript color="#3178C6" title="TypeScript" />
                <SiNextdotjs color="#000000" title="Next.js" />
                <SiTailwindcss color="#38B2AC" title="Tailwind CSS" />
                <FaHtml5 color="#E34C26" title="HTML5" />
                <SiMongodb color="#4DB33D" title="MongoDB" />
                <FaNodeJs color="#68A063" title="Node.js" />
              </div>
            </div>
          </Col>

          {/* Image Section */}
          <Col
            xs={10}
            md={5}
            className="d-flex justify-content-center justify-content-md-end mt-4 mt-md-0"
          >
            <img
              src={headerImg}
              alt="headerImg"
              className="img-fluid rounded shadow"
              style={{
                maxHeight: "400px",
                objectFit: "cover",
                animation: "none",
                transform: "none",
                transition: "none",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
