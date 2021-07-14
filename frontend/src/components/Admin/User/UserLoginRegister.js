import React from 'react'
import { Col, Form, Button } from 'react-bootstrap';

const UserLoginRegister = ({handleSubmit, handleChange, isSignup, switchMode}) => {
    return (
        <Col>
            <Col className="d-flex justify-content-center align-items-center">
                    <Form onSubmit={handleSubmit}>
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
                    </Form>
                  </Col>
        </Col>
    )
}

export default UserLoginRegister
