import React from "react";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import image from "../assets/images/sec-1.jpg";
import "../assets/css/Section-1.css";
const Section1 = () => {
  return (
    <Container fluid id="home">
      <Row>
        <Col xs={12} md={12} sm={12} lg={12} xl={12} className="px-0 sec-1">
          {/* <Image
            src={image}
            variant="top"
            alt={""}
            style={{ objectFit: "cover", width: "100%" }}
          /> */}
          {/* <Col xs={12}
            md={12}
            sm={12}
            lg={12}
            xl={12} className="px-0 d-grid justify-content-end align-items-center">
              dgh
            </Col> */}
          <Col
            xs={12}
            md={12}
            sm={12}
            lg={12}
            xl={11}
            style={{ height: "100%" }}
            className="px-3 d-flex justify-content-end align-items-center"
          >
            <Col
              xs={12}
              md={12}
              sm={12}
              lg={12}
              xl={12}
              className="px-0 d-grid justify-content-end align-items-center"
            >
              <h1 style={{ color: "black", fontFamily: "Merienda" }}>
                Welcome
              </h1>
              <h6 style={{ color: "black", fontFamily: "Merienda" }}>
                To our Restaurent
              </h6>
              <h6 style={{ color: "black", fontFamily: "Merienda" }}>
                We serve Best Food in Bangladesh
              </h6>
              <h3 style={{ color: "black", fontFamily: "Open Sans" }}>
                Get Upto 20% Discount
              </h3>
              <p style={{ color: "black", fontFamily: "Kaushan Script" }}>
                *on Selected Item
              </p>
              <Col>
                <Button
                  variant="dark"
                  style={{ fontSize: "1.2rem", borderRadius: "20px" }}
                >
                  Order now
                </Button>
              </Col>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Section1;
