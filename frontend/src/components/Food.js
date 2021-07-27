import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import image from '../assets/images/pizza.jpg';
import image from "../assets/images/burger.png";

const Food = ({ name, price, des, id, img, discount }) => {
  return (
    <Card className="my-3 px-0" style={{ height: "25rem" }}>
      <Link to={`/food/${id}`} style={{ objectFit: "cover", height: "14rem" }}>
        <Card.Img
          variant="top"
          src={img}
          alt={""}
          // style={{ height: "16rem" }}
          style={{ objectFit: "cover", height: "100%" }}
        />
      </Link>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Row>
          <Col>
            <Link
              to={`/food/${id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card.Title style={{ fontSize: "1.2rem" }}>
                {name}
                {discount ? (
                  <>
                    <br />
                    <p style={{ fontSize: "0.8rem", color: "grey" }}>
                      {discount}% OFF
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </Card.Title>
            </Link>
          </Col>
          <Col className="mr-auto">
            <Card.Text as="h6" style={{ textAlign: "end" }}>
              {discount === 0 ? (
                <>৳ {price}.00</>
              ) : (
                <>
                  ৳ <s style={{ color: "grey" }}>{price}.00 </s>
                  <p>৳ {price - (discount / 100) * price}.00</p>
                </>
              )}
            </Card.Text>
          </Col>
        </Row>
        <Card.Subtitle className="mb-2 text-muted">{des}</Card.Subtitle>
        <Row>
          <Col>
            <Button variant="dark">Cart</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Food;
