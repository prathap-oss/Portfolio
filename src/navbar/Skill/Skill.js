import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import "../../Assets/Css/Skill.css"
const Skill = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'Bootstrap 5', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'React JS', level: 50 },
    { name: 'Java', level: 75 },
    { name: 'SQL', level: 70 },
    { name: 'Github', level: 40 },
  ];
  const software=[
    {name:'Visual Studio Code'},
    {name:'Mysql WorkBench'},
    {name:'Eclipse Ide'},
    {name:'Node js'},
    {name:'Google Chrome'}
  ]
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div  className=" container_ ">
      <h2>Skills</h2>
      <Row className="mt-3">
        {skills.map((skill, index) => (
          <Col key={index} xs={12} md={6}>
            <div className={`mb-3 ${isVisible ? 'visible' : ''}`}>
              <h4>{skill.name}</h4>
              <ProgressBar
                now={isVisible ? skill.level : 0}
                label={`${isVisible ? skill.level : 0}%`}
                visuallyHidden={false}
              />
            </div>
          </Col>
        ))}
</Row>
<Row className="mt-3">

          <h2>Software Used</h2>
        {software.map((software , index) => (
          <Col key={index} xs={12} md={6}>
           
              <h4>{software.name}</h4>

           
          </Col>
        ))}   
      </Row>
    </div>
  );
};

export default Skill;

