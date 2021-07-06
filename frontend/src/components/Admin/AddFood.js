import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const AddFood = () => {
  return (
    <Row className="px-3">
      <h2 className="py-3">Add Food</h2>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter food name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter food price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Type</Form.Label>
          <Form.Control as="select">
            <option>Choose a type</option>
            <option>Newly Added</option>
            <option>Popular</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Category</Form.Label>
          <Form.Control as="select">
            <option>Choose a category</option>
            <option>Pizza</option>
            <option>Burger</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mr-2">inStock :</Form.Label>

          <Form.Check
            inline
            label="true"
            name="group1"
            type="checkbox"
            // id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="false"
            name="group1"
            type="checkbox"
            // id={`inline-${type}-2`}
          />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Add Image :</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Discount</Form.Label>
          <Form.Control type="number" placeholder="Add Discount" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </Row>
  );
};

export default AddFood;
