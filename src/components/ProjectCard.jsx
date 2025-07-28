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
      <article
        className="proj-imgbx"
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: "#1e1e1e",
          color: "#f0f0f0",
          boxShadow: "0 4px 15px rgba(0,0,0,0.35)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          padding: "1.5rem 1.8rem 2rem",
          cursor: "pointer",
          transformOrigin: "center bottom", // Fix scaling origin
        }}
        tabIndex={0}
        aria-label={`Project card for ${title}`}
        onFocus={(e) =>
          (e.currentTarget.style.boxShadow = "0 6px 25px rgba(100,100,255,0.7)")
        }
        onBlur={(e) =>
          (e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.35)")
        }
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.03) translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 10px 40px rgba(100, 100, 255, 0.8)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.35)";
        }}
      >
        <div
          style={{
            width: "100%",
            height: "180px",
            borderRadius: "8px",
            overflow: "hidden",
            flexShrink: 0,
            marginBottom: "1.2rem",
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
          }}
        >
          <img
            src={imgUrl}
            alt={`Screenshot of ${title}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        <div
          className="proj-txtx"
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.4rem",
                marginBottom: "1rem",
                fontWeight: 600,
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "#bbb",
                marginBottom: "1.5rem",
                minHeight: "80px",
              }}
            >
              {description}
            </p>
          </div>

          <div style={{ marginTop: "auto" }}>
            <div
              style={{
                marginBottom: "1rem",
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#61dafb",
                  fontWeight: "600",
                  textDecoration: "none",
                  fontSize: "1rem",
                  border: "1.5px solid #61dafb",
                  padding: "8px 20px",
                  borderRadius: "8px",
                  transition: "background-color 0.3s, color 0.3s",
                  userSelect: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#61dafb";
                  e.currentTarget.style.color = "#121212";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#61dafb";
                }}
                aria-label={`GitHub repository link for ${title}`}
              >
                Code
              </a>
              <a
                href={deploymentLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#61dafb",
                  fontWeight: "600",
                  textDecoration: "none",
                  fontSize: "1rem",
                  border: "1.5px solid #61dafb",
                  padding: "8px 20px",
                  borderRadius: "8px",
                  transition: "background-color 0.3s, color 0.3s",
                  userSelect: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#61dafb";
                  e.currentTarget.style.color = "#121212";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#61dafb";
                }}
                aria-label={`Live site link for ${title}`}
              >
                Live Demo
              </a>
            </div>

            {Technology && Technology.length > 0 && (
              <div style={{ fontSize: "0.9rem", color: "#aaa" }}>
                <strong>Technologies:</strong>
                <ul
                  style={{
                    marginTop: "6px",
                    paddingLeft: "20px",
                    maxHeight: "90px",
                    overflowY: "auto",
                    listStyleType: "disc",
                  }}
                  aria-label={`Technologies used in project ${title}`}
                >
                  {Technology.map((tech, index) => (
                    <li key={index} style={{ marginBottom: "4px" }}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {Technology?.includes("Ui-Ux") && figmaLink && (
              <div
                style={{
                  marginTop: "1rem",
                  fontSize: "1rem",
                  color: "#61dafb",
                }}
              >
                <strong>UI/UX Design:</strong>{" "}
                <a
                  href={figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                  aria-label={`Figma design link for ${title}`}
                >
                  Figma Project
                </a>
              </div>
            )}
          </div>
        </div>
      </article>
    </Col>
  );
};
