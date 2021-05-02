import React from "react";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import Jump from "react-reveal/Jump";

import "./Projects.css";
import tImg from "../../../image/teachingSolution.PNG";
import rImg from "../../../image/ridingSolution.PNG";
import gImg from "../../../image/groceryStore.PNG";
import sImg from "../../../image/sportsMania.PNG";

const projectsData = [
  {
    name: "Teaching Solution",
    img: tImg,
    feature:
      "This is a teaching service website from where the students can buy their required courses by a reasonable price.",
    featureDetails: [
      "In Homepage Items are represented in cards designed by bootstrap",
      "Products information are loaded from database.",
      "If user click in buy now and if he is logged in, it will take him to checkout page where user will see some of his order details and at the same time the info will be saved in database. If he is not loggedIn, he has to log in first. Google Sign In us used",
      "Firebase authentication is used to implement authentication and only gmail login option is added.",
      "By clicking the order option of the navbar the user will be able to see his orders if loggedIn otherwise he has to log in first.",
      "By clicking the admin option of the navbar admin can add products with details that will saved in database and will be shown in the homepage dynamically. Admin can delete the products from database also by simply clicking the delete button in manage product option.",
      "In homepage spinner is added when the data are loaded from the database.",
      "Used technology : html, css, javascript, react , node, mongodb, heroku etc.",
    ],
    gitHub: "https://github.com/solayman-bd/Teaching-Solution-Client",
    liveLink: "https://teaching-solution.netlify.app/",
  },
  {
    name: "Grocery Store",
    img: gImg,
    feature:
      "This website is a online grocery store from where the customer can buy their necessary grocery items.",
    featureDetails: [
      "In Homepage Items are represented in cards designed by bootstrap",
      "Products information are loaded from database.",
      "If user click in buy now and if he is logged in, it will take him to checkout page where user will see some of his order details and at the same time the info will be saved in database. If he is not loggedIn, he has to log in first. Google Sign In us used.",
      "Firebase authentication is used to implement authentication and only gmail login option is added.",
      "By clicking the order option of the navbar the user will be able to see his orders if loggedIn otherwise he has to log in first.",
      "By clicking the admin option of the navbar admin can add products with details that will saved in database and will be shown in the homepage dynamically. Admin can delete the products from database also by simply clicking the delete button in manage product option.",
      "In homepage spinner is added when the data are loaded from the database",
      "Used technologies : html, css, javascript, react , bootstrap, react-hook-form, react-router, node, mongodb, netlify, heroku etc.",
    ],
    gitHub: "https://github.com/solayman-bd/Grocery-Store-Client",
    liveLink: "https://general-grocery-store.netlify.app/",
  },
  {
    name: "Riding Solution",
    img: rImg,
    feature:
      "This is a ride sharing website from where the passengers can choose their favorite ride to go to their destination .",
    featureDetails: [
      "This is a riding solution based website where the customer can choose his/her riding option.",
      "In the homepage some travel options are shown that are designed by bootstrap where the data are loaded from fake data that are generated.",
      " React Router , private route are used",

      "This is a website focused in firebase authentication where in login system email-password and google-sign-in methods are used.",
      "Google map is added by generating api key and a package google-map-react.",
      "Responsive (Desktop and mobile version) ",
      "Used Technologies : React Js, React Router, Java Script, Bootstrap, firebase etc.",
    ],
    gitHub: "https://github.com/solayman-bd/Riding-Solution",
    liveLink: "https://riding-solution.netlify.app/",
  },
  {
    name: "Sports Mania",
    img: sImg,
    feature:
      "This website is all about football club. User can get the information of his favourite club here.",
    featureDetails: [
      "This site is all about the football clubs and their details where the user by a simple click will be able to explore the information about the famous clubs.Focused on react Routing",
    ],
    gitHub: "https://github.com/solayman-bd/Sports-Mania",
    liveLink: "https://sports-mania.netlify.app/",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="row py-5">
      <Jump>
        {" "}
        <h1 className="heading text-center mb-5">Projects</h1>
      </Jump>

      {projectsData.map((data) => (
        <ProjectsCard data={data}></ProjectsCard>
      ))}
    </section>
  );
};

export default Projects;
