import React from "react";
import ParticlesBg from "particles-bg";
import profileImg from "../../../image/profileImg.jpg";
import { Image } from "react-bootstrap";
import "./Introduction.css";
import Typist from "react-typist";
const Introduction = () => {
  return (
    <div
      sty
      className=" introduction row align-items-center justify-content-center"
    >
      <ParticlesBg
        type="circle"
        bg={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "700px",
          top: 0,
          left: 0,
        }}
      />
      <div className="col-sm-12 col-md-6 text-center">
        <Image
          className="mt-1"
          style={{ width: "70%" }}
          src={profileImg}
          roundedCircle
          fluid
        />
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="intro-content text-center mt-1 pb-2">
          <h3 className="pt-1">Hello</h3>
          <h2> I'm Solayman</h2>
          <Typist>
            <h1>A passionate</h1>
            <h1>MERN stack Developer.....</h1>
          </Typist>
          <button className="btn btn-primary mb-3"> Get My Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;