import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button } from "react-bootstrap";
import '../../Assets/Css/Resume.css'
import resume from '../../Assets/Prathap.pdf'
const Resume = () => {
  const handleDownload = () => {
    // Replace 'resume.pdf' with the actual path to your resume file
    const resumeUrl =resume ;
    window.open(resumeUrl, "_blank");
  };

  return (
    <Container fluid className='bg'>
      <h2>Download Resume</h2>
      <p>You can download my resume by clicking the button below:</p>
      <Button variant="primary" onClick={handleDownload}>
        Download Resume
      </Button>
    </Container>
  );
};

export default Resume;
