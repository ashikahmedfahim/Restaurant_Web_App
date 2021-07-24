import "react-bootstrap-drawer/lib/style.css";
import React, { useState } from "react";
import { Col, Collapse, Container, Row } from "react-bootstrap";
import { Drawer } from "react-bootstrap-drawer";
import "../assets/css/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faPlus,
  faTags,
  faHamburger,
  faUtensils,
  faShoppingBag
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Sidebar = ({ props, appliedbtn }) => {
  library.add(faHome, faUsers, faPlus, faTags, faHamburger, faUtensils ,faShoppingBag);

  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  return (
    <Drawer {...props} style={{ backgroundColor: "white" }}>
      <Drawer.Toggle onClick={handleToggle} className="mr-auto" />

      <Collapse in={open}>
        <Drawer.Overflow
          style={{ backgroundColor: "white" }}
          className="px-3 py-5"
        >
          {/* <Drawer.ToC> */}
          {/* <Drawer.Header>Admin Panel</Drawer.Header> */}

          <Drawer.Nav>
            <Drawer.Item className="sidebar-links-bg">
              <p
                onClick={() => {
                  appliedbtn("home");
                  handleToggle();
                }}
                className="mb-0 sidebar-links"
              >
                <FontAwesomeIcon icon="home" style={{color:"#5e72e4"}}/> Home
              </p>
            </Drawer.Item>
            <Drawer.Item>
              <p
                onClick={() => {
                  appliedbtn("addType");
                  handleToggle();
                }}
                className="mb-0 sidebar-links"
              >
                <FontAwesomeIcon icon="plus" style={{color:"#fb6340"}}/> Add Type
              </p>
            </Drawer.Item>
            <Drawer.Item>
              <p
                onClick={() => {
                  appliedbtn("addCategory");
                  handleToggle();
                }}
                className="mb-0 sidebar-links"
              >
                <FontAwesomeIcon icon="tags" style={{color:"#11cdef"}}/> Add Category
              </p>
            </Drawer.Item>
            <Drawer.Item>
              <p
                onClick={() => {
                  appliedbtn("addFood");
                  handleToggle();
                }}
                className="mb-0 sidebar-links"
              >
                <FontAwesomeIcon icon="hamburger" style={{color:"#6b4800"}}/> Add Food
              </p>
            </Drawer.Item>
            <Drawer.Item>
              <p
                onClick={() => {
                  appliedbtn("allFood");
                  handleToggle();
                }}
                className="mb-0 sidebar-links"
              >
                <FontAwesomeIcon icon="utensils" style={{color:"#ffd600"}}/> All Food
              </p>
            </Drawer.Item>
            <Drawer.Item>
              <p
                onClick={() => {
                  appliedbtn("orders");
                  handleToggle();
                }}
                className="mb-0 sidebar-links"
              >
                <FontAwesomeIcon icon="shopping-bag" style={{color:"#1db933"}}/> Orders
              </p>
            </Drawer.Item>
            <Drawer.Item>
              <p
                onClick={() => {
                  appliedbtn("Users");
                  handleToggle();
                }}
                className="mb-0 sidebar-links"
              >
                <FontAwesomeIcon icon="users" style={{color:"#f3a4b5"}}/> Users
              </p>
            </Drawer.Item>
          </Drawer.Nav>
          {/* </Drawer.ToC> */}
        </Drawer.Overflow>
      </Collapse>
    </Drawer>
  );
};
const Application = (props) => {
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Col as={Sidebar} xs={4} md={3} lg={2} />
        <Col xs={4} md={4} lg={4}>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};
export default Sidebar;
