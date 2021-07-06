import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const AddCategory = () => {
  return (
    <Row className="px-3">
      <h2 className="py-3">Add Category</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter New Category</Form.Label>
          <Form.Control type="email" placeholder="Enter category" />
        </Form.Group>
        <Button variant="dark" type="submit" className="my-3">
          Add
        </Button>
      </Form>
    </Row>
  );
};

export default AddCategory;
