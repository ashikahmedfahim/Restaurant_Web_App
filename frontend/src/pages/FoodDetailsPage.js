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
import { addToCart } from "../acions/CartActions";
const FoodDetailsPage = ({ match }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  //   const User = JSON.parse(localStorage.getItem("User"));
  let User = true;

  const foodDetails = useSelector((state) => state.foodDetails);
  const { loading, error, FOOD } = foodDetails;
  useEffect(() => {
    dispatch(listFOODDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    if (User) {
      dispatch(addToCart(match.params.id))
    } else {
      console.log("False");
    }
  };
  return (
    <Container fluid  className="px-0">
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
                  {FOOD.discount > 0 ? (
                    <>
                      <ListGroup.Item>
                        <Row>
                          <Col>Discount:</Col>
                          <Col>
                            <p>{FOOD.discount} % OFF</p>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    </>
                  ) : (
                    <></>
                  )}
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <Row>
                          <s>৳ {FOOD.price}</s>
                          <p>
                            ৳ {FOOD.price - (FOOD.discount / 100) * FOOD.price}
                          </p>
                        </Row>
                      </Col>
                    </Row>
                  </ListGroup.Item>
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
                          <strong>
                            ৳ {FOOD.price - (FOOD.discount / 100) * FOOD.price}
                          </strong>
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

                    {FOOD.inStock === true && (
                      <ListGroup.Item>
                        <Row>
                          <Col>Qty</Col>
                          <Col>
                            <Form.Control
                              type="Number"
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            ></Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )}

                    <ListGroup.Item>
                      <Button
                        onClick={addToCartHandler}
                        className="btn-block"
                        type="button"
                        disabled={FOOD.inStock === false}
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
