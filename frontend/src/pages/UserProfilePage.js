import React, { useState, useEffect } from "react";
import { Col, Container, Form, Button, Row } from "react-bootstrap";
import ErrorMessage from "../components/ErrorMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import NavBar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsActions } from "../acions/UserActions";
import Loading from "../components/Loading";
const UserProfilePage = ({ match, history }) => {
  library.add(faArrowLeft);

  const userDetails = useSelector((state) => state.UserDetails);
  const { userDetailsloading, userDetailserror, UserDetailsInfo } = userDetails;

  const User = JSON.parse(localStorage.getItem("UserInfo"));
  const registerschema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).required("Password is required"),
    phone: yup.string().min(11).max(11).required("Phone is required"),
    address: yup.string().required("Address is required"),
  });
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerschema),
  });

  let nameIcon = "";
  // if (User) {
  //   const nameSplit = User.result.name.split(" ");
  //   nameIcon = nameSplit[0].charAt(0).toUpperCase();
  // }
  // handleSubmit = (e) => {
  //   e.preventDefault();
  // }
  const onSubmit = (value) => {
    // dispatch(userRegister(value));
  };
  const id = match.params.id;

  useEffect(() => {
    dispatch(userDetailsActions(id));
  }, [dispatch, match]);

  return (
    <>
      {userDetailsloading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          {UserDetailsInfo ? (
            <>
              <NavBar />
              <Container>
                <Link className="btn btn-dark my-3 " to="/">
                  <FontAwesomeIcon icon="arrow-left" /> Go Back
                </Link>
                <Row className="d-flex justify-content-center">
                  <h2>Profile</h2>

                  <Col sm={12} md={12} lg={8} xl={8}>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Your Name :</Form.Label>
                      {/* <br /> */}
                      <Form.Label>{UserDetailsInfo.name}</Form.Label>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address :</Form.Label>
                      <Form.Label>{UserDetailsInfo.email}</Form.Label>
                    </Form.Group>
                      <br />
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group controlId="formBasicPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="number"
                          {...register("phone")}
                          placeholder="Enter phone number"
                          value={UserDetailsInfo.phone}
                        />
                        {errors.phone?.message}
                      </Form.Group>
                      <Form.Group controlId="formBasicAddress">
                        <Form.Label>Enter your Address</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("address")}
                          placeholder="Enter address"
                          value={UserDetailsInfo.address}
                        />
                      </Form.Group>
                      <Button variant="dark" type="submit" className="my-3">
                        Update
                      </Button>
                      <Link to={`/resetp_password/${UserDetailsInfo._id}`}>
                        <Button
                          variant="dark"
                          type="submit"
                          className="my-3 mx-3"
                        >
                          Reset Password
                        </Button>
                      </Link>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </>
          ) : (
            <>
              <ErrorMessage variant="warning" message="Please Login" />
            </>
          )}
        </>
      )}
    </>
  );
};

export default UserProfilePage;
