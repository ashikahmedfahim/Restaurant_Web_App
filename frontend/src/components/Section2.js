import React from 'react';
import {Container, Col, Row, Navbar, Nav, Card, Button} from 'react-bootstrap';
import image from '../assets/images/pizza.jpg';

const Section2 = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <p>Menu</p>
          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto px-5">
                <Nav.Link href="/" className="px-5">
                  Newly Added
                </Nav.Link>
                <Nav.Link href="#link" className="px-5">
                  Popular
                </Nav.Link>
                <Nav.Link href="#link" className="px-5">
                  Top Selling
                </Nav.Link>
                <Nav.Link href="#link" className="px-5">
                  All
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Card style={{width: '18rem'}} className="px-0">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Section2;
