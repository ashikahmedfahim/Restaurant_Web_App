import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Col, Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/Navbar";
import { userResetPassActions } from "../acions/UserActions";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
const UserPasswordResetPage = ({ match }) => {
  library.add(faArrowLeft);
  const id = match.params.id;
  const dispatch = useDispatch();

  const reset_pass_schema = yup.object().shape({
    password: yup.string().min(8).required("Password is required"),
    newPassword: yup.string().min(8).required("Password is required"),
    confirmPassword: yup
      .string()
      .min(8)
      .required("Password is required")
      .oneOf([yup.ref("newPassword"), null], "Passwords does not match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(reset_pass_schema),
  });

  const ResetPass = useSelector((state) => state.userResetPass);
  const { userResetPassloading, userResetPasserror, UserResetPassInfo } =
    ResetPass;

  const onSubmit = (value) => {
    const data = {
      "password": value.password,
      "newPassword": value.newPassword,
    }
    dispatch(userResetPassActions(id, data));
  };

  return (
    <>
      <NavBar />
      {userResetPassloading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          {userResetPasserror ? (
            <>
              <ErrorMessage variant="danger" message={userResetPasserror} />
            </>
          ) : (
            <></>
          )}
          {UserResetPassInfo ? (
            <>
              <ErrorMessage variant="success" message={UserResetPassInfo} />
            </>
          ) : (
            <></>
          )}

          <Container>
            <Link className="btn btn-dark my-3 " to={`/profile/${id}`}>
              <FontAwesomeIcon icon="arrow-left" /> Go Back
            </Link>
            <Col xs={6}>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicoldpass">
                  <Form.Label>Old Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="oldpassword"
                    {...register("password")}
                    placeholder="Old Password"
                  />
                  <Form.Text style={{ color: "red" }}>
                    {errors.password && <p>{errors.password.message}</p>}
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formnewPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    {...register("newPassword")}
                    placeholder="New Password"
                  />
                  <Form.Text style={{ color: "red" }}>
                    {errors.newPassword && <p>{errors.newPassword.message}</p>}
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password_repeat"
                    {...register("confirmPassword")}
                    placeholder="Confirm Password"
                  />
                  <Form.Text style={{ color: "red" }}>
                    {errors.confirmPassword && (
                      <p>{errors.confirmPassword.message}</p>
                    )}
                  </Form.Text>
                </Form.Group>
                <Button variant="dark" type="submit" className="my-3">
                  Reset
                </Button>
              </Form>
            </Col>
          </Container>
        </>
      )}
    </>
  );
};

export default UserPasswordResetPage;
