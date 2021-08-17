import React, { useState, useEffect } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../acions/UserActions";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";

const UserLogin = ({ switchMode, history, location }) => {
  const loginschema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).required("Password is required"),
  });
  const dispatch = useDispatch();

  const Login = useSelector((state) => state.userLogin);
  const { userloading, usererror, userInfo } = Login;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginschema),
  });
  const onSubmit = (value) => {
    dispatch(userLogin(value, history));
  };

  return (
    <>
      {usererror ? (
        <>
          <ErrorMessage variant="danger" message={usererror} />
        </>
      ) : (
        <></>
      )}
      {userloading ? (
        <>
          <Loading />
        </>
      ) : (
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
      )}
    </>
  );
};

export default UserLogin;
