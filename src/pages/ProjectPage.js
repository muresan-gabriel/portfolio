import React from "react";
import { Link, useParams } from "react-router-dom";
import projectContent from "./project-content.js";

const ProjectPage = ({ match }) => {
  const { name } = useParams();

  const project = projectContent.find((project) => project.name === name);

  if (!project) return <h1>Project does not exist.</h1>;

  return (
    <>
      <Link className="btn-back-home" to="/">
        <i className="bi-arrow-left"></i>
      </Link>
      <div
        className="container-fluid d-flex justify-content-center row"
        id="project-container"
      >
        <div className="col-md-6 d-flex align-items-end flex-column order-lg-2">
          <h1 className="project-title">{project.title}</h1>
          <a
            className="project-external-link"
            href={project.link}
            target="_blank"
          >
            External Source
          </a>
        </div>
        <div className="col-md-6 d-flex justify-content-center flex-column p-2 order-lg-1">
          {project.description.map((paragraph) => (
            <p key={name} className="project-description">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
