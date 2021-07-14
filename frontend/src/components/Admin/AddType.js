import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { addType } from "../../acions/TypeActions";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  name: "",
};
const AddType = (history) => {
  const [name, setName] = useState(initialState);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name ---------", name);
    dispatch(addType({ ...name}));
    setName(initialState);
  };
  const handleChange = (e) =>
  setName({ ...name, [e.target.name]: e.target.value });

  return (
    <Row className="px-3">
      <h2 className="py-3">Add Type</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter New Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter type"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="dark" type="submit" className="my-3">
          Add
        </Button>
      </Form>
    </Row>
  );
};

export default AddType;
