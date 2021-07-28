import React from "react";
import { Container, Row, Navbar, Nav, Button, Dropdown } from "react-bootstrap";
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
  const User = JSON.parse(localStorage.getItem("UserInfo"));
  const handleLogout = () => {};
  return (
    <Navbar expand="lg" sticky="top" style={{ backgroundColor: "#fff" }}>
      <Container fluid>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ fontSize: "15px", border: "none" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <LinkContainer to="/">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
          </LinkContainer>
          <Nav className="mr-auto ml-auto">
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
        </Navbar.Collapse>
        <LinkContainer to="/search" style={{ borderRadius: "2.2rem" }}>
          <Button
            variant="dark"
            style={{ borderRadius: "2.2rem" }}
            className="mr-auto px-3"
          >
            Search
          </Button>
        </LinkContainer>
        <Nav className="ml-auto" style={{ flexDirection: "row" }}>
          <LinkContainer to="/favourite">
            <Nav.Link href="#link" className="d-flex align-items-center">
              <FontAwesomeIcon
                icon="heart"
                style={{ color: "red", fontSize: "1.5rem" }}
              />
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cart">
            <Nav.Link href="#link" className="d-flex align-items-center">
              <p
                style={{
                  display: "flex",
                  fontSize: ".6rem",
                  position: "relative",
                  top: "-2px",
                  right: "-33px",
                  width: "15px",
                  height: "15px",
                  color: "#fff",
                  backgroundColor: "#418deb",
                  borderRadius: "50%",
                  textAlign: "center",
                  border: "1px solid white",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: "2px",
                }}
              >
                0{/* {Number(cartQty) > 0 ? <>{cartQty}</> : <>0</>} */}
              </p>
              <FontAwesomeIcon
                icon="shopping-cart"
                style={{ fontSize: "1.5rem", color: "black" }}
              />
            </Nav.Link>
          </LinkContainer>
          {User ? (
            <>
              <Dropdown>
                <Dropdown.Toggle
                  size="sm"
                  variant="light"
                  id="dropdown-basic"
                  className="d-flex justify-content-end align-items-center mx-3"
                >
                  <FontAwesomeIcon
                    icon="user"
                    style={{ fontSize: "1.5rem", color: "black" }}
                    className="mx-2"
                  />
                  {/* <Image
                    src={image}
                    roundedCircle
                    style={{
                      width: "3rem",
                      height: "3rem",
                      border: "2px solid black",
                    }}
                    alt="avatar"
                  /> */}
                  <p className="mx-2 my-0">{User.name}</p>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <LinkContainer to="/Profile">
                    <Dropdown.Item>Profile</Dropdown.Item>
                  </LinkContainer>
                  <Dropdown.Divider />
                  <LinkContainer to="/Suport">
                    <Dropdown.Item>Suport</Dropdown.Item>
                  </LinkContainer>
                </Dropdown.Menu>
              </Dropdown>

              <Button variant="dark" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <LinkContainer to="/login" style={{ color: "black" }}>
                <Nav.Link href="#link" className="d-flex align-items-center">
                  {" "}
                  <FontAwesomeIcon
                    icon="user"
                    style={{ fontSize: "1.5rem", color: "black" }}
                    className="mx-2"
                  />{" "}
                  Login
                </Nav.Link>
              </LinkContainer>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
