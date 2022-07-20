import { useParams, useNavigate } from "react-router-dom";
import projectContent from "../components/projects-content";
import React, { useState, useEffect } from "react";

const ProjectPage = ({ match }) => {
  const { name } = useParams();
  const project = projectContent.find((project) => project.name === name);

  const navigate = useNavigate();

  const [transitionOnLeave, setTransitionOnLeave] = useState(
    "main-app-container d-flex flex-column fadein"
  );

  const transitionStart = (navigateTo) => {
    const link = navigateTo;
    if (transitionOnLeave === "main-app-container d-flex flex-column fadein") {
      setTransitionOnLeave("main-app-container d-flex flex-column fadeOut");
    }
    setTimeout(() => {
      navigate({ link });
    }, 760);
  };

  if (!project) return <h1>Project does not exist.</h1>;

  return (
    <div>
      <div className={transitionOnLeave}>
        <div className="d-flex justify-content-center flex-column">
          <h4 className="project-page_project-title">{project.title}</h4>

          <p className="project-page_project-description">
            {project.description}
          </p>
          <div className="project-page_project-tags d-flex flex-wrap">
            {project.technologies.map((tags) => (
              <span key={tags} className="project-page_proj-tag">
                {tags}
              </span>
            ))}
          </div>
          <a
            href={project.external}
            className="project-page_project-external"
            target="_blank"
          >
            Live Website<i className="bi bi-arrow-up-right"></i>
          </a>
        </div>
        <div className="project-page_project-imgs d-flex flex-column justify-content-center align-items-center">
          {project.images.map((imgs) => (
            <img src={imgs} key={imgs} className="project-page_proj-img" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
