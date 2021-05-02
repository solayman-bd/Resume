import React from "react";
import { Container } from "react-bootstrap";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import Introduction from "../Introduction/Introduction";
import Projects from "../Projects/Projects";
import SkillsAndEducation from "../SkillsAndEducation/SkillsAndEducation";

const Home = () => {
  return (
    <Container fluid>
      <Header></Header>
      <Introduction></Introduction>
      <AboutMe></AboutMe>
      <SkillsAndEducation></SkillsAndEducation>
      <Projects></Projects>
    </Container>
  );
};

export default Home;
