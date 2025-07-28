import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.avif";
import projImg4 from "../assets/img/project-img4.webp";
import projImg5 from "../assets/img/project-img5.webp";
import projImg6 from "../assets/img/grocy-mart.webp";
import projImg7 from "../assets/img/project-img7.avif";
import projImg8 from "../assets/img/project-img8.avif";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
  const projects = [
    {
      title: "MediPlus",
      description:
        "A full-stack healthcare application with user authentication, appointment booking, and doctor profiles.",
      imgUrl: projImg8,
      githubLink: "https://github.com/ali-hossain-nayan/careplus",
      deploymentLink: "https://careplus-m1ey.onrender.com/",
      Technology: ["Next.js", "Appwrite"],
      category: "backend",
    },
    {
      title: "Khai Dai",
      description: "Simplified lunch selection for office employees.",
      imgUrl: projImg5,
      githubLink: "https://github.com/ali-hossain-nayan/foodDel",
      deploymentLink: "https://khaidai-com-frontend.onrender.com/",
      Technology: ["React + Tailwind + Express.js + Node.js"],
      category: "backend",
    },
    // {
    //   title: "Modern Blogging Platform",
    //   description:
    //     "Users can create accounts and publish blogs. Includes real-time updates, SEO, and CRUD operations.",
    //   imgUrl: projImg1,
    //   githubLink: "https://github.com/Nayan1234l/Blog-Sites",
    //   deploymentLink: "https://blog-sites-blue.vercel.app/",
    //   Technology: ["React", "Appwrite"],
    //   category: "frontend",
    // },
    {
      title: "GrocyMart",
      description: "Frontend project to display grocery items.",
      imgUrl: projImg6,
      githubLink: "https://github.com/ali-hossain-nayan/groccey-shop",
      deploymentLink: "https://grocy-mart-pied.vercel.app/",
      Technology: ["React + Tailwind CSS"],
      category: "frontend",
    },
    {
      title: "Todo App",
      description:
        "Todo app with Context API and Auth0. Persisted with localStorage.",
      imgUrl: projImg2,
      githubLink: "https://github.com/Nayan1234l/Todos-React",
      deploymentLink: "https://vivasoft-todo.vercel.app/",
      Technology: ["React", "Auth-0"],
      category: "frontend",
    },
    {
      title: "PhotoGraphy",
      description: "Frontend project showcasing photography work.",
      imgUrl: projImg7,
      githubLink: "https://github.com/ali-hossain-nayan/photgraphy",
      deploymentLink: "https://photgraphy.vercel.app/",
      Technology: ["React"],
      category: "frontend",
    },
    {
      title: "Menu Card",
      description: "Users can choose foods by time. Figma included.",
      imgUrl: projImg3,
      githubLink:
        "https://github.com/ali-hossain-nayan/Restaurant_Manu_React",
      deploymentLink: "https://restaurant-manu-react.vercel.app/",
      Technology: ["React", "Ui-Ux"],
      category: "frontend",
    },
    {
      title: "Nike Shoes",
      description: "Frontend project to display Nike shoes.",
      imgUrl: projImg4,
      githubLink: "https://github.com/ali-hossain-nayan/Nike",
      deploymentLink: "https://nike-beta-blond.vercel.app/",
      Technology: ["React + Tailwind CSS"],
      category: "frontend",
    },
  ];

  return (
    <section
      className="project"
      id="projects"
      style={{
        padding: "60px 0",
        backgroundColor: "#121212", // updated to darker background
        color: "#fff",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center">
            <h2
              style={{
                fontWeight: "700",
                fontSize: "2.3rem",
                marginBottom: "1rem",
              }}
            >
              Projects
            </h2>
            <p
              style={{
                color: "#ccc",
                fontSize: "1rem",
                maxWidth: "700px",
                margin: "0 auto 2rem",
              }}
            >
              Explore my featured full-stack and frontend projects. Each project
              is built with modern technologies and optimized for all devices.
            </p>

            {/* Tabs with only Frontend and Backend */}
            <Tab.Container id="projects-tabs" defaultActiveKey="frontend">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center flex-wrap"
                id="pills-tab"
                style={{ gap: "10px" }}
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey="frontend"
                    style={{
                      color: "#fff",
                      backgroundColor: "#333",
                      fontWeight: "500",
                      borderRadius: "0px",
                      padding: "8px 18px",
                      fontSize: "0.95rem",
                    }}
                  >
                    Front-end
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="backend"
                    style={{
                      color: "#fff",
                      backgroundColor: "#333",
                      fontWeight: "500",
                      borderRadius: "0px",
                      padding: "8px 18px",
                      fontSize: "0.95rem",
                    }}
                  >
                    Backend
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="frontend">
                  <Row xs={1} sm={2} lg={3} className="g-4 rounded-full">
                    {projects
                      .filter((project) => project.category === "frontend")
                      .map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="backend">
                  <Row xs={1} sm={2} lg={3} className="g-4">
                    {projects
                      .filter((project) => project.category === "backend")
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

      {/* Decorative background image */}
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Decoration"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "280px",
          opacity: 0.1,
          pointerEvents: "none",
        }}
      />
    </section>
  );
};

export default Projects;
