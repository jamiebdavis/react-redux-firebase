import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-1">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cum
            asperiores? Id similique amet labore vitae alias inventore
            consequuntur aperiam accusantium harum est, quam doloribus at a
            nemo. Soluta, doloremque!
          </p>
        </div>
        <div className="card-action grey lighten-3 grey-text">
          <div>Posted by Jamie davis</div>
          <div>12 November, 3pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
