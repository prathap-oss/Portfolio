import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectCard from "./projectCard";
import '../../Assets/Css/Project.css'
import weather from  '../../Assets/images/weather.jpeg'
import profile from  '../../Assets/images/port.jpeg'
import Counter from '../../Assets/images/counter.png'
import temp from '../../Assets/images/temp.png'

const projects = [
  {
    title: "WEATHER APP",
    image: weather,
    description: "Developed using html,css,javascript",
    github: "https://github.com/prathap-oss/Besant_course_projects/tree/main/weather",
    
  },
  {
    title: "PortFolio Site",
    image: profile,
    description: "Developed using html,css,javascript",
    github: "https://github.com/prathap-oss/Portfolio",

  },
  {
    title: "Counter",
    image: Counter,
    description: "Developed using html,css,javascript",
    github: "https://github.com/prathap-oss/Besant_course_projects/tree/main/Counter",

  },
  {
    title: "Temperature Convertor",
    image: temp,
    description: "Developed using html,css,javascript",
    github: "https://github.com/prathap-oss/Besant_course_projects/tree/main/TemperatureConvertor",

  },
  {
    title: "Randon number Generator",
    image: profile,
    description: "Developed using html,css,javascript",
    github: "https://github.com/prathap-oss/Besant_course_projects/tree/main/RandomNumberGenerator",

  },
];

const Project = () => {
  return (
    <div className="container_">
      <h2>Projects</h2>
      <Carousel>
        {projects.map((project, index) => (
          <div className="mt-5" key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Project;
