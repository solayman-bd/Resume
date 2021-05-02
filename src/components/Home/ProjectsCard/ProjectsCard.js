import React from "react";

const ProjectsCard = (props) => {
  const { name, feature, gitHub, liveLink, img, featureDetails } = props.data;
  console.log(img);
  return (
    <div className="col-md-6 col-sm-12 ">
      <div
        className="card text-center mx-auto my-2 py-2"
        style={{ width: "45rem" }}
      >
        <img src={img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{feature}</p>
          <a href={liveLink} className="btn btn-outline-danger">
            Live Link
          </a>
          <a href={gitHub} className="btn btn-outline-danger">
            Git Hub Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
