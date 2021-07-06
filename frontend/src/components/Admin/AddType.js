import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const AddType = () => {
  return (
    <Row className="px-3">
      <h2 className="py-3">Add Type</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter New Type</Form.Label>
          <Form.Control type="email" placeholder="Enter type" />
        </Form.Group>
        <Button variant="dark" type="submit" className="my-3">
          Add
        </Button>
      </Form>
    </Row>
  );
};

export default AddType;
