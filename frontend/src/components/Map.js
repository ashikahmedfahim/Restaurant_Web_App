import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Map = () => {
  return (
    <Container className="my-5">
      <Row>
        <h2
          className="my-5"
          style={{ fontFamily: "Tangerine", fontSize: "3.5rem" }}
        >
          We are Here..
        </h2>
        <Col>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29215.705242788157!2d90.37910216336392!3d23.748693261026453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c75f68e3e199%3A0x1091c4aa2634b568!2sTejgaon%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1629232370521!5m2!1sen!2sbd"
            // width="800"
            // height="600"
            style={{ border: "0", width: "100%", minHeight: "35rem" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Map;
