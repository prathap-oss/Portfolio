import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import profile from "../../Assets/images/download.jpeg";
import "../../Assets/Css/About.css";

const About = () => {
  const name = "R Prathap";
  const role = "Java Full Stack Developer (Fresher)";
  const objective = (
    <div>
      <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Passionate about creating scalable and efficient web applications.</p>
      <p style={{ fontSize: '20px' }}>I strive to utilize my skills in HTML, CSS, JavaScript, React, Java, and more to develop innovative solutions that meet user needs and exceed expectations.</p>
    </div>
  );

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Container fluid className={`container-animation ${isVisible ? 'active' : ''}`}>
      <Row className="justify-content-center align-items-center h-100">
        <Col md={6} className={`col-animation ${isVisible ? 'active' : ''}`}>
          <div className="content text-center">
            <Image src={profile} alt="Profile" className="imgage" roundedCircle />
            <h2 className="mb-4"> About Me - {name}</h2>
            <p><strong>Role:</strong> {role}</p>
            <p><strong>Objective:</strong></p>
            <div className="objective">{objective}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
