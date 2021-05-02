import React from "react";
import ParticlesBg from "particles-bg";
import profileImg from "../../../image/profileImg.jpg";
import { Image } from "react-bootstrap";
import "./Introduction.css";
import Typist from "react-typist";
import { FaArrowRight } from "react-icons/fa";

const Introduction = () => {
  return (
    <div
      id="introduction"
      className=" introduction row align-items-center justify-content-center"
    >
      <ParticlesBg
        type="circle"
        bg={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "700px",
        }}
      />
      <div className="col-sm-12 col-md-6 text-center">
        <Image
          className="mt-1 border border-4 border-primary"
          style={{ width: "70%" }}
          src={profileImg}
          roundedCircle
          fluid
        />
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="intro-content text-center mt-1 pb-2">
          {" "}
          <h3 className="pt-1">Hello</h3>
          <h2> I'm Solayman</h2>
          <Typist>
            <h1>A passionate</h1>
            <h1>MERN stack Developer........</h1>
          </Typist>
          <a
            href="https://www.linkedin.com/in/md-solayman-3229241aa/"
            target="_new"
            className="btn button-style btn-primary mb-3 text-light"
          >
            {" "}
            Connect With Me
            <FaArrowRight className="mx-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
