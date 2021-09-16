import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { addType } from "../../acions/TypeActions";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  name: "",
};
const AddAdmin = (history) => {
  const [name, setName] = useState(initialState);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name ---------", name);
    dispatch(addType({ ...name }));
    setName(initialState);
  };
  const handleChange = (e) =>
    setName({ ...name, [e.target.name]: e.target.value });

  return (
    <Row className="px-3">
      <h2 className="py-3">Add Admin</h2>
      <Col xl={6} sm={12} md={12} lg={8}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="py-3">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="dark" type="submit" className="my-3">
            Add
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default AddAdmin;
