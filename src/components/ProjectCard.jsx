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
    <Col xs={12} sm={6} lg={4} className="d-flex align-items-stretch mb-4">
      <article
        className="project-card w-100"
        tabIndex={0}
        aria-label={`Project card for ${title}`}
      >
        <div className="project-image">
          <img src={imgUrl} alt={`Screenshot of ${title}`} />
        </div>

        <div className="project-content d-flex flex-column">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>

          <div className="mt-auto">
            <div className="project-buttons">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Code
                </a>
              )}
              {deploymentLink && (
                <a
                  href={deploymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Live Demo
                </a>
              )}
            </div>

            {Technology?.length > 0 && (
              <div className="project-tech mt-3">
                <strong>Technologies:</strong>
                <ul>
                  {Technology.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}

            {Technology?.includes("Ui-Ux") && figmaLink && (
              <div className="project-figma">
                <strong>UI/UX Design:</strong>{" "}
                <a href={figmaLink} target="_blank" rel="noopener noreferrer">
                  Figma Project
                </a>
              </div>
            )}
          </div>
        </div>
      </article>

      <style jsx>{`
        .project-card {
          background-color: #1e1e1e;
          color: #f0f0f0;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.35);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          padding: 1.5rem;
        }

        .project-card:hover,
        .project-card:focus {
          transform: scale(1.02) translateY(-4px);
          box-shadow: 0 12px 32px rgba(100, 100, 255, 0.4);
        }

        .project-image img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .project-description {
          font-size: 1rem;
          color: #ccc;
          margin-bottom: 1rem;
          flex-grow: 1;
          line-height: 1.5;
        }

        .project-buttons {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .project-btn {
          color: #61dafb;
          border: 1.5px solid #61dafb;
          padding: 0.5rem 1.25rem;
          border-radius: 8px;
          font-weight: 500;
          font-size: 1rem;
          text-decoration: none;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .project-btn:hover {
          background-color: #61dafb;
          color: #121212;
        }

        .project-tech {
          font-size: 0.9rem;
          color: #aaa;
          margin-top: 1rem;
        }

        .project-tech ul {
          padding-left: 1.25rem;
          margin-top: 0.5rem;
        }

        .project-tech li {
          margin-bottom: 0.3rem;
          list-style-type: disc;
        }

        .project-figma {
          margin-top: 0.75rem;
          font-size: 0.95rem;
        }

        .project-figma a {
          color: #61dafb;
          text-decoration: underline;
        }

        @media (max-width: 576px) {
          .project-description {
            font-size: 0.95rem;
          }
          .project-btn {
            font-size: 0.95rem;
            padding: 0.45rem 1rem;
          }
        }
      `}</style>
    </Col>
  );
};
