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
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
  const projects = [
    {
      title: "Modern Blogging Platform",
      description:
        "It's a project where users can create an account and publish different types of blogs with titles, images, etc. CRUD operations, real-time updates, and SEO optimization are professionally handled.",
      imgUrl: projImg1,
      githubLink: "https://github.com/Nayan1234l/Blog-Sites",
      deploymentLink: "https://blog-sites-blue.vercel.app/",
      Technology: ["React", "Appwrite"],
    },
    {
      title: "GrocyMart",
      description:
        "It's a simple frontend projet where different types of GrocyMart are displayed",
      imgUrl: projImg6,
      githubLink: "https://github.com/ali-hossain-nayan/groccey-shop",
      deploymentLink: "https://grocy-mart-pied.vercel.app/",
      Technology: ["React + Tailwind CSS"],
    },
    {
      title: "Todo App",
      description:
        "It's an app where users can add, delete, and update todos. Using Context API, the todo list persists even after page refresh. Also, stores todos in local storage. User authentication is handled using Auth0.",
      imgUrl: projImg2,
      githubLink: "https://github.com/Nayan1234l/Todos-React",
      deploymentLink: "https://vivasoft-todo.vercel.app/",
      Technology: ["React", "Auth-0"],
    },
    {
      title: "Office Lunch Management System",
      description:
        "For the easy way to choose  office employee lunch .  ",
      imgUrl: projImg5,
      githubLink: "https://github.com/ali-hossain-nayan/Office-Lunch-Management",
      deploymentLink: "https://office-lunch-management-theta.vercel.app/",
      Technology: ["React + Express.js + Node.js"],
    },
    {
      title: "PhotoGraphy",
      description:
        "It's a simple frontend projet where different types of photography are displayed",
      imgUrl: projImg7,
      githubLink: "https://github.com/ali-hossain-nayan/photgraphy",
      deploymentLink: "https://photgraphy.vercel.app/",
      Technology: ["React"],
      // figmaLink: "https://www.figma.com/",
    },
    {
      title: "Menu Card",
      description:
        "A menu card where users can choose different types of foods at different times.",
      imgUrl: projImg3,
      githubLink: "https://github.com/ali-hossain-nayan/Restaurant_Manu_React",
      deploymentLink: "https://restaurant-manu-react.vercel.app/",
      Technology: ["React"],
      figmaLink: "https://www.figma.com/",
    },
    {
      title: "Nike Shoes",
      description:
        "It's a simple frontend projet where different types of Nike shoes are displayed",
      imgUrl: projImg4,
      githubLink: "https://github.com/ali-hossain-nayan/Nike",
      deploymentLink: "https://nike-beta-blond.vercel.app/",
      Technology: ["React + Tailwind CSS"],
    },
    // Add more projects with their respective GitHub and deployment links
  ];

  return (
    <section className="project" id="projects" style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Container fluid style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Row style={{ height: "100%", width: "100%" }}>
          <Col style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <h2>Projects</h2>
            <p>
              Here is my some projects
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Front-end</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Ui-Ux</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Backend</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects
                      .filter(
                        (project) =>
                          project.Technology &&
                          project.Technology.includes("Ui-Ux")
                      )
                      .map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                  </Row>
                </Tab.Pane>
                {/* Add more Tab.Pane components for additional tabs */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Color Sharp 2"
        style={{ position: "absolute", bottom: 0, right: 0, width: "50%", height: "auto" }}
      />
    </section>
  );
};

export default Projects;
