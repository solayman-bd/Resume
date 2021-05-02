import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer" className="mx-auto">
      <h5 className="text-center py-3">Some more ways to find me</h5>
      <div className="social-icon-container text-center">
        <a href="https://github.com/solayman-bd" target="_new">
          {" "}
          <FaGithub className="mx-1 social-icon fs-3" />
        </a>
        <a
          href="https://www.linkedin.com/in/md-solayman-3229241aa/"
          target="_new"
        >
          <FaLinkedinIn className="mx-1 social-icon fs-3" />
        </a>
        <a href="https://www.facebook.com/mdsolayman1727041" target="_new">
          <FaFacebook className="mx-1 social-icon fs-3" />
        </a>
      </div>
      <div>
        <p className="text-center py-2">© Solayman | All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
