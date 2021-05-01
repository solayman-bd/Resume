import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import Introduction from "../Introduction/Introduction";

const Home = () => {
  return (
    <Container fluid>
      <Header></Header>
      <Introduction></Introduction>
      <h1>I am from Home</h1>
    </Container>
  );
};

export default Home;
