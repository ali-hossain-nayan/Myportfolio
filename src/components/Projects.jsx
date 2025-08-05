import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
      title: "AppointEase	",
      description:
        "A full-stack healthcare application with user authentication, appointment booking, and doctor profiles.",
      imgUrl: projImg8,
      githubLink: "https://github.com/ali-hossain-nayan/careplus",
      deploymentLink: "https://careplus-m1ey.onrender.com/",
      Technology: ["Next.js", "Appwrite"],
    },
    {
      title: "QuickBite	",
      description: "Food delivery app using React, Tailwind, Express, and Node.js with user auth and dynamic menus. ",
      imgUrl: projImg5,
      githubLink: "https://github.com/ali-hossain-nayan/foodDel",
      deploymentLink: "https://khaidai-com-frontend.onrender.com/",
      Technology: ["React + Tailwind + Express.js + Node.js"],
    },
    {
      title: "DeshiCart",
      description: "Grocery store frontend built with React and Tailwind CSS for a seamless shopping experience.",
      imgUrl: projImg6,
      githubLink: "https://github.com/ali-hossain-nayan/groccey-shop",
      deploymentLink: "https://grocy-mart-pied.vercel.app/",
      Technology: ["React + Tailwind CSS"],
    },
    {
      title: "LazyDone",
      description:
        "Todo app with Context API and Auth0. Persisted with localStorage.",
      imgUrl: projImg2,
      githubLink: "https://github.com/Nayan1234l/Todos-React",
      deploymentLink: "https://vivasoft-todo.vercel.app/",
      Technology: ["React", "Auth-0"],
    },
    {
      title: "Nayanography",
      description: "Personal photography site frontend built with React and Tailwind CSS for a seamless shopping experience.",
      imgUrl: projImg7,
      githubLink: "https://github.com/ali-hossain-nayan/photgraphy",
      deploymentLink: "https://photgraphy.vercel.app/",
      Technology: ["React"],
    },
    {
      title: "Foodfolio",
      description: "React-based menu card app with intuitive UI/UX design for food selection..",
      imgUrl: projImg3,
      githubLink:
        "https://github.com/ali-hossain-nayan/Restaurant_Manu_React",
      deploymentLink: "https://restaurant-manu-react.vercel.app/",
      Technology: ["React", "Ui-Ux"],
    },
    {
      title: "NikeGrid",
      description: "Responsive React + Tailwind CSS frontend showcasing Nike shoe collections.",
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
        backgroundColor: "#121212",
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
              Explore my featured projects. Built using modern technologies and optimized for performance.
            </p>
          </Col>
        </Row>
        <Row xs={1} sm={2} lg={3} className="g-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
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
          width: "280px",
          opacity: 0.1,
          pointerEvents: "none",
        }}
      />
    </section>
  );
};

export default Projects;
