import React from "react";
import { Container } from "react-bootstrap";
import AboutMe from "../AboutMe/AboutMe";
import BlogPost from "../BlogPost/BlogPost";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";
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
      <BlogPost></BlogPost>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </Container>
  );
};

export default Home;
