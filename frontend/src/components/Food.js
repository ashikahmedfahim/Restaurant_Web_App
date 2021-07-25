import React from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import image from '../assets/images/pizza.jpg';
import image from '../assets/images/burger.png';

const Food = ({name, price, des, id, img}) => {
  return (
    <Card className="my-3 px-0">
      <Link to={`/food/${id}`}>
        <Card.Img variant="top" src={image} />
      </Link>
      <Card.Body>
        <Row>
          <Col>
            <Link
              to={`/food/${id}`}
              style={{textDecoration: 'none', color: 'black'}}
            >
              <Card.Title>{name}</Card.Title>
            </Link>
          </Col>
          <Col className="mr-auto">
            <Card.Text as="h6" style={{textAlign: 'end'}}>
              ${price}.00
            </Card.Text>
          </Col>
        </Row>
        <Card.Subtitle className="mb-2 text-muted">{des}</Card.Subtitle>
        <Row>
          <Col>
            <Button variant="primary">Cart</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Food;
