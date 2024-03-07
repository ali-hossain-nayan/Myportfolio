import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.jpg";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      ticker();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, text);
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
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Ali Hossain Nayan`}{" "}
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                A passionate React developer exploring the world of technology
                and its limitless possibilities. I have completed Learnathon 2.0
                with Vivasoft Ltd 2023(Sep)-2024(Feb). Have a core idea of HTML,
                Tailwind CSS, Bootstrap, JavaScript, TypeScript, React.js,
                Next.js,
                <button className="btn" onClick={() => console.log("connect")}>
                  Let’s Connect <ArrowRightCircle size={25} />
                </button>
              </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="headerImg" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;
