import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {addFOOD} from "../../acions/FoodActions";
const initialState = {
  name: "",
  type: "",
  category: "",
  price: "",
  inStock: "",
  description: "",
  discount: "",
  image: "",
};
const AddFood = (history) => {
  const [food, setFood] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = (e) =>
    setFood({ ...food, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("food---------", food);
    dispatch(addFOOD(food, history));

    setFood(initialState);
  };

  return (
    <Row className="px-3">
      <h2 className="py-3">Add Food</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={12} md={6} lg={6} xl={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter food name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                onChange={handleChange}
                placeholder="Enter food price"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Select Type</Form.Label>
              <Form.Control as="select" name="type" onChange={handleChange}>
                <option value="">Choose a type</option>
                <option value="newlyAdded">Newly Added</option>
                <option value="popular">Popular</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Select Category</Form.Label>
              <Form.Control as="select" name="category" onChange={handleChange}>
                <option value="">Choose a category</option>
                <option value="pizza">Pizza</option>
                <option value="burger">Burger</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <Form.Group className="mb-3">
              <Form.Label className="mr-2">inStock :</Form.Label>

              <Form.Check
                inline
                label="Yes"
                value="Yes"
                name="inStock"
                type="radio"
                onChange={handleChange}
              />
              <Form.Check
                inline
                label="No"
                value="No"
                name="inStock"
                type="radio"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Add Image :</Form.Label>
              <Form.Control
                type="file"
                name="image"
                size="sm"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                rows={3}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Discount</Form.Label>
              <Form.Control
                type="number"
                name="discount"
                placeholder="Add Discount"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Row>
  );
};

export default AddFood;
