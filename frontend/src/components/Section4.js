import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const Section4 = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col
          sm={12}
          md={6}
          lg={5}
          xl={4}
          className="d-flex justify-content-center align-items-center my-3"
        >
          <div>
            <Container>
              <h1>Contacts</h1>
              <hr />
              <h5>Phone:</h5>
              <h6>+880 17563258</h6>
              <h6>+880 17563258</h6>
              <br />
              <h5>Email:</h5>
              <h6>restaurent@gmail.com</h6>
              <Button variant="dark" style={{borderRadius: '30px'}}>
                Learn more
              </Button>
            </Container>
          </div>
        </Col>
        <Col
          sm={12}
          md={6}
          lg={7}
          xl={8}
          className="d-flex justify-content-center align-items-center my-3"
        >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter your name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Row>
              <Col sm={12} md={8} lg={8} xl={8}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" bg="dark" label="Accept all rules" />
                </Form.Group>
              </Col>
              <Col sm={12} md={4} lg={4} xl={4}>
                <Button type="submit" variant="dark" style={{borderRadius: '30px'}}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Section4;
