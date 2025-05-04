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
    <Col xs={12} sm={6} md={4} className="mb-4">
      <div className="proj-imgbx" style={{ border: "1px solid #ddd", borderRadius: "8px", overflow: "hidden", backgroundColor: "#fff" }}>
        <img src={imgUrl} alt={title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
        <div className="proj-txtx" style={{ padding: "15px" }}>
          <h4>{title}</h4>
          <p>{description}</p>
          <div style={{ marginTop: "10px" }}>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: "10px" }}>
              GitHub
            </a>
            <a href={deploymentLink} target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
            {Technology && (
              <div style={{ marginTop: "10px" }}>
                <strong>Technologies:</strong>
                <ul style={{ paddingLeft: "20px" }}>
                  {Technology.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
            {Technology?.includes("Ui-Ux") && figmaLink && (
              <div style={{ marginTop: "10px" }}>
                <strong>UI/UX Design:</strong>{" "}
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
