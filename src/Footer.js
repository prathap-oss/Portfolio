import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <Container fluid>
                <Row>
                    <Col>
                        <ul className="list-inline text-center">
                          
                           
                            <li className="list-inline-item mt-2" >
                                <a href="https://linkedin.com/in/prathap-oss">
                                    <FontAwesomeIcon icon={faLinkedin} style={{width:"40px", height:"40px"}} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/prathap-oss">
                                    <FontAwesomeIcon icon={faGithub} style={{width:"40px", height:"40px"}}  />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
