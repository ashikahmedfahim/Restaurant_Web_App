import React from 'react';
import {Container, Col, Row, Navbar, Nav, Card, Button, Pagination} from 'react-bootstrap';
import Cards from './Food';
const Section2 = () => {
  let active = 3;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <p>Menu</p>

          <Nav
            className="mr-auto px-5"
            fill
            variant="tabs"
            defaultActiveKey="/"
          >
            <Nav.Link href="/" className="px-5">
              All
            </Nav.Link>
            <Nav.Link href="#link1" eventKey="link-1" className="px-5">
              Newly Added
            </Nav.Link>
            <Nav.Link href="#link2" className="px-5">
              Popular
            </Nav.Link>
            <Nav.Link href="#link3" className="px-5">
              Top Selling
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Cards />
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Cards />
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Cards />
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Cards />
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Cards />
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Cards />
        </Col>
      </Row>
      <Row className="my-5">
        <Pagination size="sm" className="d-flex justify-content-center">{items}</Pagination>
      </Row>
    </Container>
  );
};

export default Section2;
