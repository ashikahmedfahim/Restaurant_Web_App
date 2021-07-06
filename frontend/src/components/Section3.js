import React from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import image from '../assets/images/pizza.jpg';

const Section3 = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={8} lg={8} xl={6} className="px-0">
          <Image src={image} style={{width: '100%'}} />
        </Col>
        <Col sm={12} md={4} lg={4} xl={6} className="d-flex justify-content-end align-items-center">
          <div className="d-flex justify-content-end align-items-center">
        <Container>
            <h1>About us</h1>
            <h5>Best Restaurant in Bangladesh</h5>
            <h6>The Best Food and price:</h6>
            <Button variant="dark" style={{borderRadius: '30px'}}>Learn more"</Button>
        </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section3;
