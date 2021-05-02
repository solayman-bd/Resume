import React, { useState } from "react";
import ProjectDetailsModals from "../ProjectDetailsModals/ProjectDetailsModals";
import "./ProjectsCard.css";

const ProjectsCard = (props) => {
  const { name, feature, gitHub, liveLink, img, featureDetails } = props.data;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="col-md-6 col-sm-12 ">
      <div
        className="card text-center mx-auto my-2 py-2 border border-3 rounded card-content"
        style={{ width: "90%" }}
      >
        <img src={img} className="img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{feature}</p>
          <a
            href={liveLink}
            target="_new"
            className="btn btn-outline-danger mx-1 my-1 card-button"
          >
            Live Link
          </a>
          <a
            href={gitHub}
            target="_new"
            className="btn btn-outline-danger mx-1 my-1 card-button"
          >
            Git Hub Link
          </a>
          <button
            onClick={openModal}
            className="btn btn-outline-danger my-1 mx-1 card-button"
          >
            Detail Features
          </button>
          <ProjectDetailsModals
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            featureDetails={featureDetails}
          ></ProjectDetailsModals>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
