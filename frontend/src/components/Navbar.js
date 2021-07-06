import React from 'react';
import {Container, Row, Navbar, Nav, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '../assets/css/Navbar.css';
const NavBar = () => {
  return (
    <Container fluid>
      <Row>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>Menu</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>About us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>Contacts</Nav.Link>
              </LinkContainer>
            </Nav>

            <Button variant="outline-success">Search</Button>
            <Nav className="ml-auto">
              <Nav.Link href="#link">Fav</Nav.Link>
              <Nav.Link href="#link">Cart</Nav.Link>
              <Nav.Link href="#link">login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
};

export default NavBar;
