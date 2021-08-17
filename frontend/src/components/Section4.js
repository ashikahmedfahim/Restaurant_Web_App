import React from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import "../assets/css/Section4.css";

import { BagCheck } from "react-bootstrap-icons";
import { CreditCard2Front } from "react-bootstrap-icons";
import { BoxSeam } from "react-bootstrap-icons";
import { TruckFlatbed } from "react-bootstrap-icons";
const Section4 = () => {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#dadada" }}>
      <Container className="my-5">
        <Row className="d-flex justify-content-center">
          <h2
            className="my-5"
            style={{ fontFamily: "Tangerine", fontSize: "3.5rem" }}
          >
            Delivery
          </h2>
          <Col
            sm={12}
            md={6}
            lg={3}
            xl={3}
            className="px-3 d-flex justify-content-center"
          >
            <Card style={{ width: "15rem" }} className="my-5 delivery-card">
              <Card.Img variant="top" src="" />
              <Card.Header
                className="py-4 d-flex justify-content-center delivery"
                style={{ borderBottom: "none", borderRadius: "15px" }}
              >
                <BagCheck color="black" size={40} />
              </Card.Header>
              <Card.Body className="py-4">
                <Card.Title>Order</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={3}
            xl={3}
            className="px-3 d-flex justify-content-center"
          >
            <Card style={{ width: "15rem" }} className="my-5 delivery-card">
              <Card.Img variant="top" src="" />
              <Card.Header
                className="py-3 d-flex justify-content-center delivery"
                style={{ borderBottom: "none", borderRadius: "15px" }}
              >
                <CreditCard2Front color="black" size={40} />
              </Card.Header>
              <Card.Body className="py-4">
                <Card.Title>Payment</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={3}
            xl={3}
            className="px-3 d-flex justify-content-center"
          >
            <Card style={{ width: "15rem" }} className="my-5 delivery-card">
              <Card.Img variant="top" src="" />
              <Card.Header
                className="py-3 d-flex justify-content-center delivery"
                style={{ borderBottom: "none", borderRadius: "15px" }}
              >
                <BoxSeam color="black" size={40} />
              </Card.Header>
              <Card.Body className="py-4">
                <Card.Title>Packaging</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={3}
            xl={3}
            className="px-3 d-flex justify-content-center"
          >
            <Card style={{ width: "15rem" }} className="my-5 delivery-card">
              <Card.Img variant="top" src="" />
              <Card.Header
                className="py-3 d-flex justify-content-center delivery"
                style={{ borderBottom: "none", borderRadius: "15px" }}
              >
                <TruckFlatbed color="black" size={40} />
              </Card.Header>
              <Card.Body className="py-4">
                <Card.Title>Delivery</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Section4;
