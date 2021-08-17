import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../assets/css/Footer.css";
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <Container fluid style={{ background: "black", color: "white" }}>
      <Container>
        <div className="py-5">
          <Row>
            <Col
              sm={12}
              md={3}
              lg={3}
              xl={3}
              className="d-flex justify-content-center align-items-center my-3"
            >
              <h3>logo</h3>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={6}
              xl={6}
              className="d-grid justify-content-space-between align-items-center my-3"
            >
              <Row className="Footer-row-2">
                <Col sm={4} md={4} lg={4} xl={4}>
                  <Col md={4} lg={4} xl={12}>
                    <h6>Menu</h6>
                  </Col>
                  <Col>
                    <h6>About us</h6>
                  </Col>
                  <Col>
                    <h6>Contacts</h6>
                  </Col>
                </Col>
                <Col sm={4} md={4} lg={4} xl={4}>
                  <Col md={4} lg={4} xl={12}>
                    <h6>Services</h6>
                  </Col>
                  <Col>
                    <h6>Delivery</h6>
                  </Col>
                </Col>
                <Col sm={4} md={4} lg={4} xl={4}>
                  <Col md={4} lg={4} xl={12}>
                    <h6>Schedule</h6>
                  </Col>
                  <Col>
                    <h6>Mon-Fri</h6>
                  </Col>
                  <Col>
                    <h6>9:00 am - 10:00 pm</h6>
                  </Col>
                </Col>
              </Row>
            </Col>
            <Col
              sm={12}
              md={3}
              lg={3}
              xl={3}
              className="d-grid justify-content-center align-items-center my-3"
            >
              <h5>Social Media</h5>
              <Col
                className="d-flex"
                style={{ justifyContent: "space-evenly" }}
              >
                <Facebook size={30} style={{ cursor: "pointer" }} />
                <Instagram size={30} style={{ cursor: "pointer" }} />
              </Col>
            </Col>
          </Row>
        </div>
        <Row>
          <Col className="d-flex justify-content-center py-1">
            <p>© 2021, All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
