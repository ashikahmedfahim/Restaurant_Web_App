import React, { useState, useEffect } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import { Container, Form, Button, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import FileBase from "react-file-base64";
import image from "../assets/images/burger.png";
import { useDispatch, useSelector } from "react-redux";
import { listFOODDetails } from "../acions/FoodActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const initialState = {
  name: "",
  category: "",
  price: "",
  inStock: "",
  description: "",
  discount: "",
  image: "",
};
const FoodEditPage = ({ match }) => {
  library.add(faArrowLeft);
  const dispatch = useDispatch();
  const foodDetails = useSelector((state) => state.foodDetails);
  const { loading, error, FOOD } = foodDetails;
  const [food, setFood] = useState(initialState);
  useEffect(() => {
    dispatch(listFOODDetails(match.params.id));
    if (FOOD) {
      setFood(FOOD);
    }
  }, [dispatch, match, FOOD.name]);

  const handleChange = (e) =>
    setFood({ ...food, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(food);
  };
  return (
    <>
      <Link to="/admin/home" className="btn btn-dark my-3 mx-3">
        <FontAwesomeIcon icon="arrow-left" /> Go Back
      </Link>
      <Container>
        <h1>Edit Food</h1>
        {/* {loadingUpdate && <Loader />}
          {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
          */}
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorMessage variant="danger" message="" />
        ) : (
          <>
            <Form
              // onSubmit={handleSubmit(onSubmit)}
              onSubmit={handleSubmit}
            >
              <Row className="d-flex justify-content-center">
                <Col sm={12} md={8} lg={6} xl={4}>
                  <Image
                    src={FOOD.image}
                    alt=""
                    style={{ width: "100%", height: "25rem" }}
                    className="mb-3"
                  />

                  <Form.Group
                    controlId="formFileSm"
                    className="mb-3"
                    style={{ width: "100%" }}
                  >
                    <Form.Label>Change Image :</Form.Label>
                    <FileBase
                      type="file"
                      name="image"
                      multiple={false}
                      style={{ width: "100%" }}
                      onDone={({ base64 }) => {
                        setFood({ ...food, image: base64 });
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} md={8} lg={6} xl={6} className="py-3 mb-3 ">
                  {FOOD.inStock === true ? (
                    <>
                      <Form.Label
                        className="mr-2 p-2"
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          borderRadius: "5px",
                        }}
                      >
                        InStock : Yes
                      </Form.Label>
                    </>
                  ) : (
                    <>
                      <Form.Label
                        className="mr-2 p-2"
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          borderRadius: "5px",
                        }}
                      >
                        InStock : No
                      </Form.Label>
                    </>
                  )}

                  <Form.Group className="mb-3">
                    <Form.Label className="mr-2">
                      Change inStock to :
                    </Form.Label>

                    <Form.Check
                      inline
                      label="Yes"
                      value={true}
                      name="inStock"
                      type="radio"
                        onChange={handleChange}
                    />
                    <Form.Check
                      inline
                      label="No"
                      value={false}
                      name="inStock"
                      type="radio"
                        onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter food name"
                      name="name"
                      value={food.name}
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="price" className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="Number"
                      name="price"
                      placeholder="Enter food price"
                      value={food.price}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="description"
                      rows={3}
                      placeholder="Enter description"
                      value={food.description}
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Discount</Form.Label>
                    <Form.Control
                      type="number"
                      name="discount"
                      placeholder="Add Discount"
                      value={food.discount}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button type="submit" variant="dark">
                    Update
                  </Button>
                </Col>
              </Row>
            </Form>
          </>
        )}
      </Container>
    </>
  );
};

export default FoodEditPage;
