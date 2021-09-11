import React from "react";
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
const UserPasswordResetPage = ({match}) => {
  library.add(faArrowLeft);
  const id = match.params.id;
  const reset_pass_schema = yup.object().shape({
    old_pass: yup.string().min(8).required("Password is required"),
    new_pass: yup.string().min(8).required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(reset_pass_schema),
  });
  const onSubmit = (value) => {
    console.log(value);
    // dispatch(userLogin(value, history));
  };
  return (
    <>
      <NavBar />
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
                {...register("old_pass")}
                placeholder="Old Password"
              />
              <Form.Text style={{ color: "red" }}>
                {errors.old_pass?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formnewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                {...register("new_pass")}
                placeholder="New Password"
              />
              <Form.Text style={{ color: "red" }}>
                {errors.new_pass?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
              />
              <Form.Text style={{ color: "red" }}>
                {errors.new_pass?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="dark" type="submit" className="my-3">
              Reset
            </Button>
          </Form>
        </Col>
      </Container>
    </>
  );
};

export default UserPasswordResetPage;
