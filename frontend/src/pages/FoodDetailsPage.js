import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Container,
} from "react-bootstrap";
import { listFOODDetails } from "../acions/FoodActions";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import NavBar from "../components/Navbar";
const FoodDetailsPage = ({ match }) => {
  const dispatch = useDispatch();

  const foodDetails = useSelector((state) => state.foodDetails);
  const { loading, error, FOOD } = foodDetails;
  useEffect(() => {
    dispatch(listFOODDetails(match.params.id));
  }, [dispatch, match]);
  const addToCartHandler = () => {};
  return (
    <Container fluid>
      <NavBar />
      <Container>
        <Link className="btn btn-light my-3" to="/">
          Go Back
        </Link>
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <Container className="my-5">
            <Row>
              {error ? (
                <>
                  <ErrorMessage
                    variant="warning"
                    message="Something Went Wrong"
                  />
                </>
              ) : (
                <></>
              )}
              <Col md={5}>
                <Image src={FOOD.image} alt={FOOD.name} fluid />
              </Col>
              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{FOOD.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>Price: ৳ {FOOD.price}</ListGroup.Item>
                  <ListGroup.Item>
                    Description: {FOOD.description}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>৳ {FOOD.price}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          {FOOD.inStock === true ? "In Stock" : "Out Of Stock"}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    {/* 
                  {FOOD.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(FOOD.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )} */}

                    <ListGroup.Item>
                      <Button
                        onClick={addToCartHandler}
                        className="btn-block"
                        type="button"
                        disabled={FOOD.countInStock === 0}
                      >
                        Add To Cart
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </Container>
        )}
      </Container>
    </Container>
  );
};

export default FoodDetailsPage;
