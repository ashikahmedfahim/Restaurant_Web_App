import React from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';

const Cards = ({name, count, price, color, bg}) => {
  return (
    <Card
      className="my-3 px-0"
      bg={bg}
      //   style={{
      //     backgroundColor: Color,
      //   }}
    >
      <Card.Body>
        <Row>
          <Col sm={2} md={8} lg={8} xl={8}>
            <Card.Title>{name}</Card.Title>
          </Col>
          <Col className="mr-auto" sm={6} md={4} lg={4} xl={4}>
            <Card.Text as="h6" style={{textAlign: 'end'}}>
              {count}
            </Card.Text>
          </Col>
        </Row>
        <Card.Subtitle className="mb-2">${price}.00</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default Cards;
