import React from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import image from '../assets/images/pizza.jpg';

const Food = () => {
  return (
    <Card className="my-3 px-0">
      <Link to={`/food/id`}>
        <Card.Img variant="top" src={image} />
      </Link>
      <Card.Body>
        <Row>
          <Col>
            <Link
              to={`/food/id`}
              style={{textDecoration: 'none', color: 'black'}}
            >
              <Card.Title>Burger</Card.Title>
            </Link>
          </Col>
          <Col className="mr-auto">
            <Card.Text as="h6" style={{textAlign: 'end'}}>
              $10.00
            </Card.Text>
          </Col>
        </Row>
        <Card.Subtitle className="mb-2 text-muted">Ingredients</Card.Subtitle>
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
