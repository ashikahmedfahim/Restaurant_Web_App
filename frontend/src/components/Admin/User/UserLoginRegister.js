import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const UserLoginRegister = ({
  handleSubmitForm,
  handleChange,
  isSignup,
  switchMode,
}) => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).required("Password is required"),
    phone: yup.string().min(11).max(11).required("Phone is required"),
    address: yup.string().required("Address is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (value) => console.log(value);

  return (
    <Col>
      <Col className="d-flex justify-content-center align-items-center">
        {/* <Form onSubmit={handleSubmit}> */}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3>{isSignup === "true" ? "User Register" : "User LogIn"}</h3>
          {isSignup === "true" ? (
            <Form.Group controlId="formBasicName">
              <Form.Label>Enter your Name</Form.Label>
              <Form.Control
                type="text"
                {...register("name")}
                placeholder="Enter name"
              />
               {errors.name?.message}
            </Form.Group>
          ) : (
            <></>
          )}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              {...register("email")}
              placeholder="Enter email"
            />
             {errors.email?.message}
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...register("password")}
              placeholder="Password"
            />
          </Form.Group>
          {isSignup === "true" ? (
            <>
              <Form.Group controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  {...register("phone")}
                  placeholder="Enter phone number"
                />
                 {errors.phone?.message}
              </Form.Group>
              <Form.Group controlId="formBasicAddress">
                <Form.Label>Enter your Address</Form.Label>
                <Form.Control
                  type="text"
                  {...register("address")}
                  placeholder="Enter address"
                />
              </Form.Group>
              <Button variant="dark" type="submit" className="my-3">
                SignUp
              </Button>
              <p
                onClick={() => {
                  switchMode("false");
                }}
                style={{ cursor: "pointer" }}
              >
                "Already have an account? Sign in"
              </p>
            </>
          ) : (
            <>
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
            </>
          )}
        </Form>
      </Col>
    </Col>
  );
};

export default UserLoginRegister;
