import React from "react";
import { Container, Row, Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faUser,
  faShoppingCart,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import "../assets/css/Navbar.css";
const NavBar = () => {
  library.add(faCheckSquare, faUser, faShoppingCart, faHeart);
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
              <LinkContainer to="/favourite">
                <Nav.Link href="#link">
                  <FontAwesomeIcon icon="heart" style={{ color: "red" }} />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link href="#link">
                  <FontAwesomeIcon icon="shopping-cart" />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link href="#link">
                  {" "}
                  <FontAwesomeIcon icon="user" /> Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
};

export default NavBar;
