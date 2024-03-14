import React from "react";
import "./Assets/Css/Home.css";
import { Link } from "react-router-dom";
import menu from "./Assets/images/menu_FILL0_wght400_GRAD0_opsz24.svg";
import close from "./Assets/images/close_FILL0_wght400_GRAD0_opsz24.svg";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import About from "./navbar/About/About";
import Project from "./navbar/Project/Project";
import Contact from "./navbar/Contact/Contact";
import Resume from "./navbar/Resume/Resume";
import Skill from "./navbar/Skill/Skill";
import Body from "./Body";

const Home = () => {

  return (
    <div>
      <Router>
      <nav className="nav">
        <input type="checkbox" id="sidebar-active" />
        <label for="sidebar-active" className="open-sidebar-button">
          <img className="img" alt="M" src={menu} />
        </label>
        <label for="sidebar-active" id="overlay"></label>
        <div className="link-container">
          <label for="sidebar-active" className="close-sidebar-button">
            <img className="img" alt="X" src={close} />
          </label>
          <Link className="Link home-link" to="/">
            PortFolio
          </Link>
          <Link className="Link " to="/About"> 
            About
          </Link>
          <Link className="Link" to="/Skills">
            Skills
          </Link>
          <Link className="Link" to="/Project">
            Project
          </Link>
          <Link className="Link" to="/Contact">
            Contact
          </Link>
          <Link className="Link" to="/Resume">
            Resume
          </Link>
        </div>
      </nav>

      
        <Switch>
          <Route path="/" exact Component={Body} />
          <Route path="/About" exact Component={About} ></Route>
          <Route path="/Resume" exact Component={Resume} />
          <Route path="/Contact" exact Component={Contact} />
          <Route path="/Project" exact Component={Project} />
          <Route path="/Skills" exact Component={Skill} />
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
