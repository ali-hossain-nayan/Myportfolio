import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  githubLink,
  deploymentLink,
  Technology,
  figmaLink,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{" "}
            {/* Add space here */}
            <a href={deploymentLink} target="_blank" rel="noopener noreferrer">
              Deployment
            </a>
            {Technology && (
              <div>
                <strong>Technology:</strong>
                <ul>
                  {Technology.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
            {Technology &&
              Technology.includes("Ui-Ux") &&
              figmaLink && ( // Check if 'Ui-Ux' is in the Technology array
                <div>
                  <strong>UI/UX Design:</strong>
                  <a href={figmaLink} target="_blank" rel="noopener noreferrer">
                    Figma Project
                  </a>
                </div>
              )}
          </div>
        </div>
      </div>
    </Col>
  );
};
