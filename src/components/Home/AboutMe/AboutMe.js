import React from "react";
import { Image } from "react-bootstrap";
// import profileImg from "../../../image/profileImg.jpg";
import profileImage from "../../../image/pImg-2.jpeg";
import "./AboutMe.css";
import Fade from "react-reveal/Fade";
import { FaDownload } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="about-me row align-items-center justify-content-center"
    >
      <Fade top cascade>
        <div className="col-sm-12 col-md-6 ">
          <div className="about-content text-center mt-1 pb-2">
            {" "}
            <h1 className="pb-5 mt-5 pt-3 text-warning">ABOUT ME</h1>
            <h3>
              An enthusiastic learner , <br /> currently focused on Web
              Development. I have developed almost 10+ websites having basic to
              professional features where some of them are frontend based and
              some of them are full stack.{" "}
              <span className="text-warning">
                For the frontend, I used React Js and other react-related tools,
                and for the backend, I used Node Js, Express Js, and Mongodb etc
              </span>
            </h3>
            <a
              target="_newTab"
              href="https://drive.google.com/file/d/1egxk2HYJfqYn4Yoo9KeVE9sc5XjNV6X6/view?usp=sharing"
              className="btn btn-primary mb-3 mt-4 text-light button-style"
            >
              {" "}
              <FaDownload />
              Get My Resume
            </a>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 text-center">
          <Image
            className="my-3 border border-4 border-danger"
            style={{ width: "70%" }}
            src={profileImage}
            roundedCircle
            fluid
          />
        </div>
      </Fade>
    </section>
  );
};

export default AboutMe;
