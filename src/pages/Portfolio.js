import projectContent from "../components/projects-content";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Portfolio = () => {
  const { name } = useParams();
  const project = projectContent.find((project) => project.name === name);
  const navigate = useNavigate();

  const [transitionOnLeave, setTransitionOnLeave] = useState(
    "main-app-container d-flex flex-column fadein"
  );

  const transitionStart = (projectUrl) => {
    const projectLink = projectUrl;
    if (transitionOnLeave === "main-app-container d-flex flex-column fadein") {
      setTransitionOnLeave("main-app-container d-flex flex-column fadeOut");
    }
    setTimeout(() => {
      navigate({ projectLink });
    }, 760);
  };

  return (
    <div className={transitionOnLeave}>
      <div className="projects d-flex flex-wrap flex-column container">
        {projectContent.map((project, key) => (
          <a
            onClick={() => {
              if (
                transitionOnLeave ===
                "main-app-container d-flex flex-column fadein"
              ) {
                setTransitionOnLeave(
                  "main-app-container d-flex flex-column fadeOut"
                );
              }
              setTimeout(() => {
                navigate(project.name);
              }, 760);
            }}
          >
            <div
              className={`project-container d-flex flex-column fadein-${
                key + 1
              } project-border-${project.type}`}
            >
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
              <div className="project-tags align-self-end d-flex flex-wrap justify-content-end">
                {project.technologies.map((tags) => (
                  <span key={tags} className="proj-tag">
                    {tags}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
