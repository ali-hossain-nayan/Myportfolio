import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section
      className="skill"
      id="skills"
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      <Container
        fluid
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row style={{ height: "100%", width: "100%" }}>
          <Col
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="skill-bx"
              style={{ width: "100%", maxWidth: "1200px" }}
            >
              <h2>Skills</h2>
              <p>
                I have core idea of Frontend Development && I'm also passionate
                about problem solving with various platform like Codeforces,
                Leetcode, Beecrowd, Hackerrank && Have a good idea about UI
                design specially in Figma!!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Img" />
                  <h5>Front-end Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Img" />
                  <h5>Problem Solving</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Img" />
                  <h5>UI-UX Design</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp}
        alt="CoSharp"
        className="background-image-left"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "50%",
          height: "auto",
        }}
      />
    </section>
  );
};

export default Skills;
