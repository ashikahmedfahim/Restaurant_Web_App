import React, { useState, useEffect } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import { Container, Form, Button, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import FileBase from "react-file-base64";
import image from "../assets/images/burger.png";
import { useDispatch, useSelector } from "react-redux";
import { listFOODDetails } from "../acions/FoodActions";

const FoodEditPage = ({ match }) => {
  const dispatch = useDispatch();
  const foodDetails = useSelector((state) => state.foodDetails);
  const { loading, error, FOOD } = foodDetails;
  useEffect(() => {
    dispatch(listFOODDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link to="/admin/home" className="btn btn-dark my-3 mx-3">
        Go Back
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
            <Row className="d-flex justify-content-center">
              <Col sm={12} md={8} lg={6} xl={4}>
                <Image
                  src={FOOD.image}
                  alt=""
                  style={{ width: "100%", height: "25rem" }}
                  className="mb-3"
                />
                <Form>
                  <Form.Group
                    controlId="formFileSm"
                    className="mb-3"
                    style={{ width: "100%" }}
                  >
                    <Form.Label>Change Image :</Form.Label>
                    <FileBase
                      type="file"
                      multiple={false}
                      style={{ width: "100%" }}
                      //   onDone={({ base64 }) =>
                      //     setFood({ ...food, image: base64 })
                      //   }
                    />
                  </Form.Group>
                  <Button type="submit" variant="dark">
                    Update Image
                  </Button>
                </Form>
              </Col>
              {/* <Col sm={0} md={0} lg={0} xl={2} className="py-3 mb-3 "></Col> */}
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

                <Form className="d-flex">
                  <Form.Group className="mb-3">
                    <Form.Label className="mr-2">Change inStock :</Form.Label>

                    <Form.Check
                      inline
                      label="Yes"
                      value={true}
                      name="inStock"
                      type="radio"
                      //   onChange={handleChange}
                    />
                    <Form.Check
                      inline
                      label="No"
                      value={false}
                      name="inStock"
                      type="radio"
                      //   onChange={handleChange}
                    />
                  </Form.Group>
                  <Button type="submit" variant="dark">
                    Update inStock
                  </Button>
                </Form>
                <Form
                // onSubmit={submitHandler}
                >
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter food name"
                      value={FOOD.name}
                      //   onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="price" className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter food price"
                      value={FOOD.price}
                      //   onChange={(e) => setPrice(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="description"
                      rows={3}
                      placeholder="Enter description"
                      value={FOOD.description}
                      //   onChange={(e) => setDescription(e.target.value)}
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
                      value={FOOD.discount}
                      // onChange={handleChange}
                    />
                  </Form.Group>
                  <Button type="submit" variant="dark">
                    Update
                  </Button>
                </Form>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default FoodEditPage;
