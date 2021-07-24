import React, { useState, useEffect } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import UserLogin from "./UserLogin";
import { useDispatch, useSelector } from "react-redux";

const UserLoginRegister = ({
  isSignup,
  switchMode,
  history,
  location
}) => {
  const [form, setForm] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { userloading, usererror, userInfo } = userLogin;

  const dispatch = useDispatch();

  const registerschema = yup.object().shape({
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
    resolver: yupResolver(registerschema),
  });
  // handleSubmit = (e) => {
  //   e.preventDefault();
  // }
  const onSubmit = (value) => {
    console.log(value);
    setForm(value);
    console.log("form----",form);
    dispatch(register(form, history));
  };
  // const userRedirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo)
    }
  }, [history, userInfo]);
  return (
    <Col
      xl={6}
      lg={6}
      className="d-flex justify-content-center align-items-center"
    >
      <Col>
        {/* <Form onSubmit={handleSubmit}> */}
        <h3>{isSignup === "true" ? "User Register" : "User LogIn"}</h3>
        {isSignup === "false" ? (
          <>
            <UserLogin switchMode={switchMode} />
          </>
        ) : (
          <></>
        )}
        {isSignup === "true" ? (
          <>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Enter your Name</Form.Label>
                <Form.Control
                  type="text"
                  {...register("name")}
                  placeholder="Enter name"
                />
                {errors.name?.message}
              </Form.Group>
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
            </Form>
          </>
        ) : (
          <></>
        )}
      </Col>
    </Col>
  );
};

export default UserLoginRegister;
