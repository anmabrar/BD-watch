import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css"

const Footer = () => {
    return (
        <div>
      <div className="bg sticky-bottom footer-container pt-3 mt-5">
        <Container className="text-light">
          <Row>
            <Col  className="text-start">
              <h6 className="text-decoration-underline fs-3 fw-bold text-warning">
              
                <span>
                  <i className="fas fa-book-reader "></i>
                </span>
                BD Watch
              </h6>
              <p>
                BD Watch is a trusted and reliable Watch seller agency in Bangladesh.Watches are the most elegant and classy accessories, that adorn your wrist in addition to performing its function of telling the time. 
              </p>
            </Col>
            <Col>
              <h6 className="text-decoration-underline text-start">About BD Watch</h6>
              <ul className="text-start">
                <li>Contact Us</li>
                <li>Our Staff</li>
                <li>Our Partners</li>
                <li>Careers</li>
              </ul>
            </Col>
            <Col>
              <h6 className="text-decoration-underline text-start">Contact Info</h6>
              <ul className="text-start">
                <li>
                 
                  <a href="/"> anmabrar13@gmail.com</a>
                </li>
                <li>Call us: 01521332***</li>
                <li>Uttara, Dhaka, Bangladesh</li>
              </ul>
            </Col>
          </Row>
          <div className="mb-0">
            <p>© 2021 All Rights Reserved BD watch</p>
          </div>
        </Container>
      </div>
    </div>
    );
};

export default Footer;