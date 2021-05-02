import React from "react";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid green",
    borderRadius: "20px",
    width: "70%",
    maxHeight: "500px",
  },
};

Modal.setAppElement("#root");

const ProjectDetailsModals = ({ modalIsOpen, closeModal, featureDetails }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center">Features</h2>

        <div>
          <ol>
            {featureDetails.map((data) => (
              <li>{data}</li>
            ))}
          </ol>
        </div>
        <button onClick={closeModal} className="btn btn-danger">
          close
        </button>
      </Modal>
    </div>
  );
};

export default ProjectDetailsModals;
