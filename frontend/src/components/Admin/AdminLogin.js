import React from "react";
import { Col, Form, Button } from "react-bootstrap";

const AdminLogin = ({handleSubmit, loginhandleChange}) => {
  return (
    <Col>
      <Col className="d-flex justify-content-center align-items-center">
          <h3>Admin LogIn</h3>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={loginhandleChange}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={loginhandleChange}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="dark" type="submit" className="my-3">
            Login
          </Button>
      </Col>
    </Col>
  );
};

export default AdminLogin;
