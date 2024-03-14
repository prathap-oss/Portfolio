import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from "react-bootstrap";
import '../../Assets/Css/Project.css'

const ProjectCard = ({ project }) => {
  return (
  
 <Card style={{ width:'300px'}}  className='card_'>
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Card.Link href={project.github}>GitHub</Card.Link>
        {project.demo && <Card.Link href={project.demo}>Demo</Card.Link>}
      </Card.Body>
    </Card> 
  );
};

export default ProjectCard;
