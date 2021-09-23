import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
  Card,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../acions/AdminActions";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import AdminLogin from "../components/Admin/AdminLogin";
import UserLoginRegister from "../components/User/UserLoginRegister";
import { getCategory } from "../acions/CategoryActions";
import { listFOODs } from "../acions/FoodActions";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const loginInitialState = {
  email: "",
  password: "",
};
const AdminLoginPage = ({ location, history }) => {
  const dispatch = useDispatch();

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

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminloading, adminerror, adminInfo } = adminLogin;

  const adminRedirect = location.search
    ? location.search.split("=")[1]
    : "/admin/home";

  useEffect(() => {
    if (adminInfo) {
      history.push(adminRedirect);
    }
  }, [history, adminInfo, adminRedirect]);

  const onSubmit = (value) => {
    dispatch(login(value, history));
    dispatch(getCategory());
  };

  return (
    <>
      <NavBar />
      {adminloading ? (
        <Loading />
      ) : (
        <>
          <Container
            className="py-5 d-flex justify-content-center"
            style={{ marginTop: "7rem", marginBottom: "7rem" }}
          >
            <Card
              style={{
                width: "35rem",
                boxShadow: "0 1px 3px #bababa, 9px 20px 60px #3434345c",
              }}
            >
              <span
                style={{
                  content: "",
                  display: "inline-block",
                  position: "absolute",
                  left: "0",
                  top: "0",
                  height: "3px",
                  width: "100%",
                  backgroundColor: "#000",
                  borderRadius: "0px 0px 30px 30px",
                }}
              ></span>

              <Card.Body>
                <Row>
                  {adminerror ? (
                    <>
                      <ErrorMessage variant="danger" message={adminerror} />
                    </>
                  ) : (
                    <></>
                  )}

                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                      <Col>
                        <h3
                          style={{
                            fontWeight: "bold",
                            paddingTop: "3rem",
                          }}
                        >
                          Admin LogIn
                        </h3>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            {...register("email")}
                            placeholder="Enter email"
                          />
                          <Form.Text style={{ color: "red" }}>
                            {errors.email?.message}{" "}
                          </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            name="password"
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
                      </Col>
                    </Row>
                  </Form>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </>
      )}
      <Footer />
    </>
  );
};

export default AdminLoginPage;
