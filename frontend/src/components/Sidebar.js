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
  faShoppingBag,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Sidebar = ({ props, appliedbtn }) => {
  library.add(
    faHome,
    faUsers,
    faPlus,
    faTags,
    faHamburger,
    faUtensils,
    faShoppingBag,
    faChevronRight
  );

  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  return (
    <Drawer
      {...props}
      style={{ backgroundColor: "white", borderRight: "none" }}
    >
      <Drawer.Toggle onClick={handleToggle} className="mr-auto" />

      <Collapse in={open}>
        <Drawer.Overflow
          style={{ backgroundColor: "#152530", borderRight: "none" }}
          className="px-0 py-2 drawer"
        >
          {/* <Drawer.ToC> */}
          <Drawer.Header className="py-3">
            <span style={{ color: "#fff", cursor: "pointer" }}>
              Admin Panel
            </span>
          </Drawer.Header>

          <Drawer.Nav>
            <Drawer.Item className="sidebar-links-bg">
              <Row
                onClick={() => {
                  appliedbtn("home");
                  handleToggle();
                }}
                className="mb-0 sidebar-links"
              >
                <Col sm={1} md={2} lg={2} xl={2} className="col-1">
                  <FontAwesomeIcon icon="home" style={{ color: "#8a99ff" }} />{" "}
                </Col>
                <Col sm={10} md={8} lg={8} xl={8} className="col-2">
                  <p className="mb-0">Home</p>
                </Col>
                <Col sm={1} md={2} lg={2} xl={2} className="col-3">
                  <FontAwesomeIcon
                    icon="chevron-right"
                    style={{ color: "#8a99ff" }}
                  />
                </Col>
              </Row>
            </Drawer.Item>
            <Drawer.Item>
              <Row
                onClick={() => {
                  appliedbtn("addCategory");
                  handleToggle();
                }}
                className="mb-0 sidebar-links"
              >
                <Col sm={2} md={2} lg={2} xl={2} className="col-1">
                  <FontAwesomeIcon icon="tags" style={{ color: "#11cdef" }} />
                </Col>
                <Col sm={8} md={8} lg={8} xl={8} className="col-2">
                  <p className="mb-0">Add Category</p>
                </Col>
                <Col sm={2} md={2} lg={2} xl={2} className="col-3">
                  <FontAwesomeIcon
                    icon="chevron-right"
                    style={{ color: "#11cdef" }}
                  />{" "}
                </Col>
              </Row>
            </Drawer.Item>
            <Drawer.Item>
              <Row
                onClick={() => {
                  appliedbtn("addFood");
                  handleToggle();
                }}
                className="mb-0 sidebar-links"
              >
                <Col sm={2} md={2} lg={2} xl={2} className="col-1">
                  <FontAwesomeIcon
                    icon="hamburger"
                    style={{ color: "#6b4800" }}
                  />{" "}
                </Col>
                <Col sm={8} md={8} lg={8} xl={8} className="col-2">
                  <p className="mb-0">Add Food</p>
                </Col>
                <Col sm={2} md={2} lg={2} xl={2} className="col-3">
                  <FontAwesomeIcon
                    icon="chevron-right"
                    style={{ color: "#6b4800" }}
                  />{" "}
                </Col>
              </Row>
            </Drawer.Item>
            <Drawer.Item>
              <Row
                onClick={() => {
                  appliedbtn("allFood");
                  handleToggle();
                }}
                className="mb-0 sidebar-links"
              >
                <Col sm={2} md={2} lg={2} xl={2} className="col-1">
                  <FontAwesomeIcon
                    icon="utensils"
                    style={{ color: "#ffd600" }}
                  />{" "}
                </Col>
                <Col sm={8} md={8} lg={8} xl={8} className="col-2">
                  <p className="mb-0">All Food</p>
                </Col>
                <Col sm={2} md={2} lg={2} xl={2} className="col-3">
                  <FontAwesomeIcon
                    icon="chevron-right"
                    style={{ color: "#ffd600" }}
                  />{" "}
                </Col>
              </Row>
            </Drawer.Item>
            <Drawer.Item>
              <Row
                onClick={() => {
                  appliedbtn("orders");
                  handleToggle();
                }}
                className="mb-0 sidebar-links"
              >
                <Col sm={2} md={2} lg={2} xl={2} className="col-1">
                  <FontAwesomeIcon
                    icon="shopping-bag"
                    style={{ color: "#1db933" }}
                  />{" "}
                </Col>
                <Col sm={8} md={8} lg={8} xl={8} className="col-2">
                  <p className="mb-0">Orders</p>
                </Col>
                <Col sm={2} md={2} lg={2} xl={2} className="col-3">
                  <FontAwesomeIcon
                    icon="chevron-right"
                    style={{ color: "#1db933" }}
                  />{" "}
                </Col>
              </Row>
            </Drawer.Item>
            <Drawer.Item>
              <Row
                onClick={() => {
                  appliedbtn("Users");
                  handleToggle();
                }}
                className="mb-0 sidebar-links"
              >
                <Col sm={2} md={2} lg={2} xl={2} className="col-1">
                  <FontAwesomeIcon icon="users" style={{ color: "#f3a4b5" }} />{" "}
                </Col>
                <Col sm={8} md={8} lg={8} xl={8} className="col-2">
                  <p className="mb-0">Users</p>
                </Col>
                <Col sm={2} md={2} lg={2} xl={2} className="col-3">
                  <FontAwesomeIcon
                    icon="chevron-right"
                    style={{ color: "#f3a4b5" }}
                  />{" "}
                </Col>
              </Row>
            </Drawer.Item>
            <Drawer.Item>
              <Row
                onClick={() => {
                  appliedbtn("addAdmin");
                  handleToggle();
                }}
                className="mb-0 sidebar-links"
              >
                <Col sm={2} md={2} lg={2} xl={2} className="col-1">
                  <FontAwesomeIcon icon="plus" style={{ color: "#f47f47" }} />{" "}
                </Col>
                <Col sm={8} md={8} lg={8} xl={8} className="col-2">
                  <p className="mb-0">Add Admin</p>
                </Col>
                <Col sm={2} md={2} lg={2} xl={2} className="col-3">
                  <FontAwesomeIcon
                    icon="chevron-right"
                    style={{ color: "#f47f47" }}
                  />{" "}
                </Col>
              </Row>
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
