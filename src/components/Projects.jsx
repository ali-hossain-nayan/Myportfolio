import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.avif";
import projImg4 from '../assets/img/project-img4.webp';
import projImg5 from '../assets/img/project-img5.webp';
import projImg6 from '../assets/img/grocy-mart.webp';
import projImg7 from "../assets/img/project-img7.avif";
import projImg8 from "../assets/img/project-img8.avif";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
  const projects = [
    {
      title: "MediPlus",
      description:
        "Its a full-stack healthcare application with user authentication, appointment booking, and doctor profiles.",
      imgUrl: projImg8,
      githubLink: "https://github.com/ali-hossain-nayan/careplus",
      deploymentLink: "https://careplus-m1ey.onrender.com/",
      Technology: ["Next.js", "Appwrite"],
    },
    {
      title: "Khai Dai",
      description: "Simplified lunch selection for office employees.",
      imgUrl: projImg5,
      githubLink: "https://github.com/ali-hossain-nayan/foodDel",
      deploymentLink: "https://khaidai-com-frontend.onrender.com/",
      Technology: ["React + Tailwind + Express.js + Node.js"],
    },
    {
      title: "Modern Blogging Platform",
      description:
        "Users can create accounts and publish blogs. Includes real-time updates, SEO, and CRUD operations.",
      imgUrl: projImg1,
      githubLink: "https://github.com/Nayan1234l/Blog-Sites",
      deploymentLink: "https://blog-sites-blue.vercel.app/",
      Technology: ["React", "Appwrite"],
    },
    {
      title: "GrocyMart",
      description: "Frontend project to display grocery items.",
      imgUrl: projImg6,
      githubLink: "https://github.com/ali-hossain-nayan/groccey-shop",
      deploymentLink: "https://grocy-mart-pied.vercel.app/",
      Technology: ["React + Tailwind CSS"],
    },
    {
      title: "Todo App",
      description:
        "Todo app with context API and Auth0. Persisted with localStorage.",
      imgUrl: projImg2,
      githubLink: "https://github.com/Nayan1234l/Todos-React",
      deploymentLink: "https://vivasoft-todo.vercel.app/",
      Technology: ["React", "Auth-0"],
    },
    {
      title: "PhotoGraphy",
      description: "Frontend project displaying photography work.",
      imgUrl: projImg7,
      githubLink: "https://github.com/ali-hossain-nayan/photgraphy",
      deploymentLink: "https://photgraphy.vercel.app/",
      Technology: ["React"],
    },
    {
      title: "Menu Card",
      description: "Users can choose foods by time. Figma included.",
      imgUrl: projImg3,
      githubLink: "https://github.com/ali-hossain-nayan/Restaurant_Manu_React",
      deploymentLink: "https://restaurant-manu-react.vercel.app/",
      Technology: ["React", "Ui-Ux"],
      figmaLink: "https://www.figma.com/",
    },
    {
      title: "Nike Shoes",
      description: "Frontend project to display Nike shoes.",
      imgUrl: projImg4,
      githubLink: "https://github.com/ali-hossain-nayan/Nike",
      deploymentLink: "https://nike-beta-blond.vercel.app/",
      Technology: ["React + Tailwind CSS"],
    },
  ];

  return (
    <section
      className="project"
      id="projects"
      style={{
        padding: "60px 0",
        position: "relative",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center">
            <h2
              style={{
                color: "#222",
                fontWeight: "700",
                fontSize: "2.5rem",
                marginBottom: "1rem",
              }}
            >
              Projects
            </h2>
            <p
              style={{
                color: "#555",
                fontSize: "1.1rem",
                maxWidth: "700px",
                margin: "0 auto 2rem",
              }}
            >
              Explore some of my featured work including full-stack applications, frontend projects, and UI/UX designs.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav
  variant="pills"
  className="nav-pills mb-5 justify-content-center"
  id="pills-tab"
  style={{ gap: '15px' }}
>
  <Nav.Item>
    <Nav.Link
      eventKey="first"
      style={{
        color: "#333",
        backgroundColor: "#e9ecef",
        fontWeight: "500",
        borderRadius: "50px",
        padding: "10px 20px",
      }}
      activeStyle={{
        backgroundColor: "#0d6efd",
        color: "#fff",
      }}
    >
      Front-end
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link
      eventKey="second"
      style={{
        color: "#333",
        backgroundColor: "#e9ecef",
        fontWeight: "500",
        borderRadius: "50px",
        padding: "10px 20px",
      }}
      activeStyle={{
        backgroundColor: "#0d6efd",
        color: "#fff",
      }}
    >
      UI/UX
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link
      eventKey="third"
      style={{
        color: "#333",
        backgroundColor: "#e9ecef",
        fontWeight: "500",
        borderRadius: "50px",
        padding: "10px 20px",
      }}
      activeStyle={{
        backgroundColor: "#0d6efd",
        color: "#fff",
      }}
    >
      Backend
    </Nav.Link>
  </Nav.Item>
</Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects
                      .filter((project) =>
                        project.Technology?.includes("Ui-Ux")
                      )
                      .map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects
                      .filter((project) =>
                        project.Technology?.some((tech) =>
                          tech.toLowerCase().includes("express") ||
                          tech.toLowerCase().includes("node")
                        )
                      )
                      .map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Decoration"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "300px",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />
    </section>
  );
};

export default Projects;
