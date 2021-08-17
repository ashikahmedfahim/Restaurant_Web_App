import React from "react";
import {
  Container,
  Row,
  Navbar,
  Nav,
  Button,
  Dropdown,
  Col,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faUser,
  faShoppingCart,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Navbar.css";
import { Userlogout } from "../acions/UserActions";
import { Link } from "react-scroll";

const NavBar = () => {
  library.add(faCheckSquare, faUser, faShoppingCart, faHeart);
  const User = JSON.parse(localStorage.getItem("UserInfo"));
  const dispatch = useDispatch();
  let nameIcon = "";
  if (User) {
    const nameSplit = User.result.name.split(" ");
    nameIcon = nameSplit[0].charAt(0).toUpperCase();
  }

  const handleLogout = () => {
    dispatch(Userlogout());
  };
  return (
    <Navbar expand="lg" sticky="top" style={{ backgroundColor: "#fff" }}>
      <Container fluid>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ fontSize: "15px", border: "none" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <LinkContainer to="/">
            <Navbar.Brand href="#">Logo</Navbar.Brand>
          </LinkContainer>
          <Nav className="mr-auto ml-auto">
            {/* <LinkContainer to="/"> */}
            <Link to="home" spy={true} smooth={true} duration={100}>
              <Nav.Link>Home</Nav.Link>
            </Link>
            {/* </LinkContainer> */}
            {/* <LinkContainer to="/"> */}
            <Link to="menu" spy={true} smooth={true} duration={100}>
              <Nav.Link>Menu</Nav.Link>
            </Link>
            {/* </LinkContainer> */}
            {/* <LinkContainer to="/"> */}
              <Link to="about" spy={true} smooth={true} duration={100}>
                <Nav.Link>About us</Nav.Link>
              </Link>
            {/* </LinkContainer> */}
            {/* <LinkContainer to="/"> */}
            <Link to="contact" spy={true} smooth={true} duration={100}>
              <Nav.Link>Contacts</Nav.Link>
            </Link>
            {/* </LinkContainer> */}
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
        <Nav
          className="ml-auto"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
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
              <div
                style={{
                  display: "flex",
                  fontSize: ".6rem",
                  position: "relative",
                  top: "-10px",
                  right: "-33px",
                  width: "15px",
                  height: "15px",
                  color: "#fff",
                  backgroundColor: "#000",
                  borderRadius: "50%",
                  textAlign: "center",
                  border: "1px solid white",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: "2px",
                }}
              >
                <p style={{ top: "9px", right: "0.5px", position: "relative" }}>
                  0
                </p>
                {/* {Number(cartQty) > 0 ? <>{cartQty}</> : <>0</>} */}
              </div>
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
                  <span
                    style={{
                      backgroundColor: "#e0e4e8",
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                      border: "1px solid black",
                      fontWeight: "400",
                      fontSize: "1.9rem",
                    }}
                  >
                    {nameIcon}
                  </span>
                  <p className="mx-2 my-0">{User.result.name}</p>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <LinkContainer to={`/Profile/${User.result._id}`}>
                    <Dropdown.Item>Profile</Dropdown.Item>
                  </LinkContainer>
                  <Dropdown.Divider />
                  <LinkContainer to="/Suport">
                    <Dropdown.Item>Suport</Dropdown.Item>
                  </LinkContainer>
                  <Button
                    variant="dark"
                    onClick={handleLogout}
                    style={{
                      height: "2rem",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "25px",
                    }}
                  >
                    Logout
                  </Button>
                </Dropdown.Menu>
              </Dropdown>
              <br />
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
