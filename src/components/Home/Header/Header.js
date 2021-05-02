import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="Header"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="text-center">
        <Nav className="mx-auto" id="header">
          <Nav.Link href="#header">Home</Nav.Link>
          <Nav.Link href="#about-me">About</Nav.Link>
          <Nav.Link href="#pricing">Projects</Nav.Link>
          <Nav.Link href="#pricing">Blogs</Nav.Link>
          <Nav.Link href="#pricing">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
