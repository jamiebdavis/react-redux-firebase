import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-1 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted By Jamie Davis</p>
        <p className="grey-text">12 November</p>
      </div>
    </div>
  );
};

export default ProjectSummary;