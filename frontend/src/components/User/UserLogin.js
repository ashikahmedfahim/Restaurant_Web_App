import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const UserLogin = ({ switchMode }) => {
  const loginschema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginschema),
  });
  const onSubmit = (value) => console.log(value);

  return (
    <Col>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            {...register("email")}
            placeholder="Enter email"
          />
          <Form.Text style={{ color: "red" }}>
            {errors.email?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          <Form.Text style={{ color: "red" }}>
            {errors.password?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="dark" type="submit" className="my-3">
          Login
        </Button>
        <p
          onClick={() => {
            switchMode("true");
          }}
          style={{ cursor: "pointer" }}
        >
          "Don't have an account? Sign Up"
        </p>
      </Form>
    </Col>
  );
};

export default UserLogin;
