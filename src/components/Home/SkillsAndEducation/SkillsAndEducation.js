import React from "react";
import "./SkillsAndEducation.css";
import Fade from "react-reveal/Fade";
import Spin from "react-reveal/Spin";
const comfortableSKill = [
  "HTML",
  "CSS",
  "JavaScript",
  "ES6",
  "React",
  "React Router",
  "SASS",
  "Bootstrap",
  "React Bootstrap",
  "React Reveal",
  "React Typist",
  "particles-bg",
  "Firebase Authentication",
];

const familiarSkill = [
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Material-UI",
  "Wordpress",
  "React Native",
];
const toolsData = ["VS Code", "Netlify", "Firebase", "Heroku", "Git"];
const SkillsAndEducation = () => {
  return (
    <section className="skills-and-education row justify-content-center my-5 py-5">
      <h1 className="text-center fw-bolder">
        <Spin>Skills and Educations</Spin>
      </h1>
      <div className="col-sm-12 col-md-6 mt-3">
        <h1 className=" text-center fw-bold">Skills</h1>
        <div className="skill-container rounded border border-4">
          <div className="comfortable text-center">
            <h3 className="my-2 text-center ">Comfortable</h3>
            {comfortableSKill.map((data) => (
              <button type="button" class="btn btn-outline-success m-1">
                <Fade right>{data}</Fade>
              </button>
            ))}
          </div>
          <div className="familiar text-center">
            <h3 className="my-2 text-center">Familiar</h3>
            {familiarSkill.map((data) => (
              <button type="button" class="btn btn-outline-success m-1">
                <Fade left>{data}</Fade>
              </button>
            ))}
          </div>
          <div className="tools text-center">
            <h3 className="my-2 text-center">Tools</h3>
            {toolsData.map((data) => (
              <button type="button" class="btn btn-outline-success m-1">
                <Fade bottom>{data}</Fade>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <h1 className="fw-bold mt-3 text-center">Education</h1>
        <div className="education-container rounded border border-4">
          <Fade left>
            {" "}
            <div className="university ">
              <h3>BSC Eng.</h3>
              <h3>
                Khulna University of Engineering and Technology (KUET), Khulna.
              </h3>

              <h4>Department of Materials Science and Engineering</h4>
              <h5>2018-present</h5>
            </div>
          </Fade>
          <Fade right>
            {" "}
            <div className="college mt-5">
              <h3>HSC</h3>
              <h3>Akij Foundation School And College (AFSC), Uttara, Dhaka</h3>
              <h4>Group: Science</h4>
              <h5>GPA: 5.00 </h5>
              <h5>2017</h5>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndEducation;
