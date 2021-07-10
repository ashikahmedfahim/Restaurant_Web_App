import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../acions/AdminActions";
import Loading from "../components/Loading";
const initialState = {
  name: "",
  email: "",
  password: "",
  phone: "",
  address: "",
};
const loginInitialState = {
  email: "",
  password: "",
};
const LoginPage = ({ location, history }) => {
  const [selectedbtn, setSelectedbtn] = useState("");
  const [isSignup, setIsSignup] = useState("false");
  const [form, setForm] = useState(initialState);
  const [loginForm, setLoginForm] = useState(loginInitialState);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userloading, usererror, userInfo } = userLogin;

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminloading, adminerror, adminInfo } = adminLogin;

  const adminRedirect = location.search
    ? location.search.split("=")[1]
    : "/admin/home";
  const userRedirect = location.search
    ? location.search.split("=")[1]
    : "/admin/home";

  useEffect(() => {
    if (adminInfo) {
      history.push(adminRedirect);
    }
    if (userInfo) {
      history.push(userRedirect);
    }
  }, [history, userInfo, adminInfo, userRedirect, adminRedirect]);

  const appliedbtn = (value) => {
    setForm(initialState);
    setSelectedbtn(value);
  };
  const switchMode = (value) => {
    setForm(initialState);
    setIsSignup(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedbtn === "admin") {
      console.log("loginForm");
      console.log(loginForm);
      dispatch(login(loginForm, history));
      setLoginForm(loginInitialState);
    } else {
      if (isSignup === "true") {
        console.log("register");
        console.log(form);
        dispatch(register(form, history));
      } else {
        console.log(form);
        dispatch(login(form, history));
      }
    }
  };
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const loginhandleChange = (e) =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  return (
    <>
      {adminloading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Container className="py-5">
            <Row>
              {adminerror ? (
                <>
                  <Alert variant="danger">{adminerror}</Alert>
                </>
              ) : (
                <></>
              )}
              <Row>
                <Col className="my-3">
                  <Button
                    variant="dark"
                    type="submit"
                    onClick={() => {
                      appliedbtn("admin");
                    }}
                  >
                    Admin
                  </Button>

                  <Button
                    variant="dark"
                    type="submit"
                    className="mx-3"
                    onClick={() => {
                      appliedbtn("user");
                    }}
                  >
                    User
                  </Button>
                </Col>
              </Row>
              <Row>
                {selectedbtn === "admin" ? (
                  <Col className="d-flex justify-content-center align-items-center">
                    <form onSubmit={handleSubmit}>
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
                    </form>
                  </Col>
                ) : (
                  <Col className="d-flex justify-content-center align-items-center">
                    <form onSubmit={handleSubmit}>
                      <h3>
                        {isSignup === "true" ? "User Register" : "User LogIn"}
                      </h3>
                      {isSignup === "true" ? (
                        <Form.Group controlId="formBasicName">
                          <Form.Label>Enter your Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            onChange={handleChange}
                            placeholder="Enter name"
                          />
                        </Form.Group>
                      ) : (
                        <></>
                      )}
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          onChange={handleChange}
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
                          onChange={handleChange}
                          placeholder="Password"
                        />
                      </Form.Group>
                      {isSignup === "true" ? (
                        <>
                          <Form.Group controlId="formBasicPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                              type="text"
                              name="phone"
                              onChange={handleChange}
                              placeholder="Enter phone number"
                            />
                          </Form.Group>
                          <Form.Group controlId="formBasicAddress">
                            <Form.Label>Enter your Address</Form.Label>
                            <Form.Control
                              type="text"
                              name="address"
                              onChange={handleChange}
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
                    </form>
                  </Col>
                )}
              </Row>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default LoginPage;
