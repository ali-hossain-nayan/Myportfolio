import { Container, Row, Col } from "react-bootstrap";

const About = () => {
    return (
        <section id="about" className="about-section">
            <Container>
                <Row className="align-items-center">
                    <Col md={12}>
                        <div className="about-content">
                            <h2 className="section-title text-center">About Me</h2>

                            <p className="section-paragraph text-center">
                                I'm <strong>Ali Hossain Nayan</strong>, a passionate Front-End React Developer based in Dhaka, Bangladesh.
                                With strong knowledge in JavaScript and experience in modern frameworks like React, Next.js, and Tailwind CSS,
                                I specialize in building clean, responsive, and user-focused web apps.
                                I've completed internships at <strong>Vivasoft</strong> and <strong>Okobiz</strong>,
                                where I worked on real-world projects, collaborated with developers, and strengthened my MERN stack skills.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
