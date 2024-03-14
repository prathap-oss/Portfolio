import React from 'react'
import About from "./navbar/About/About";
import Project from "./navbar/Project/Project";
import Contact from "./navbar/Contact/Contact";
import Resume from "./navbar/Resume/Resume";
import Skill from "./navbar/Skill/Skill";
import Footer from './Footer';


const Body = () => {
  return (
    <div>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
        <Resume/>
        <Footer/>
    </div>
  )
}

export default Body