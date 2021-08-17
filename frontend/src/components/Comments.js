import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import "../assets/css/comments.css";
import { PersonFill } from "react-bootstrap-icons";
import Carousel from "react-bootstrap/Carousel";
const Comments = () => {
  return (
    <Container fluid style={{ background: "#000" }}>
      <Container>
        <h2
          className="py-5"
          style={{ color: "#fff", fontFamily: "Tangerine", fontSize: "3.5rem" }}
        >
          Comments
        </h2>
        <Carousel variant="dark">
          <Carousel.Item>
            <Row className="d-flex justify-content-center">
              <Col className="d-flex justify-content-center" sm={4} xl={4}>
                <Card style={{ width: "28rem" }} className="my-5 comments-card">
                  <Card.Img variant="top" src="" />
                  <Card.Header
                    className="py-4 d-flex justify-content-start comments"
                    style={{ borderBottom: "none", borderRadius: "15px" }}
                  >
                    <PersonFill color="black" size={40} />
                  </Card.Header>
                  <Card.Body className="py-4">
                    <Card.Title>Nayeem</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="d-flex justify-content-center" sm={4} xl={4}>
                <Card style={{ width: "28rem" }} className="my-5 comments-card">
                  <Card.Img variant="top" src="" />
                  <Card.Header
                    className="py-4 d-flex justify-content-start comments"
                    style={{ borderBottom: "none", borderRadius: "15px" }}
                  >
                    <PersonFill color="black" size={40} />
                  </Card.Header>
                  <Card.Body className="py-4">
                    <Card.Title>Ahmed</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="d-flex justify-content-center">
              <Col className="d-flex justify-content-center" sm={4} xl={4}>
                <Card style={{ width: "28rem" }} className="my-5 comments-card">
                  <Card.Img variant="top" src="" />
                  <Card.Header
                    className="py-4 d-flex justify-content-start comments"
                    style={{ borderBottom: "none", borderRadius: "15px" }}
                  >
                    <PersonFill color="black" size={40} />
                  </Card.Header>
                  <Card.Body className="py-4">
                    <Card.Title>Ashik</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="d-flex justify-content-center" sm={4} xl={4}>
                <Card style={{ width: "28rem" }} className="my-5 comments-card">
                  <Card.Img variant="top" src="" />
                  <Card.Header
                    className="py-4 d-flex justify-content-start comments"
                    style={{ borderBottom: "none", borderRadius: "15px" }}
                  >
                    <PersonFill color="black" size={40} />
                  </Card.Header>
                  <Card.Body className="py-4">
                    <Card.Title>Ahmed</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
};

export default Comments;
