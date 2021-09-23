import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Container,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getCart, removeFromCart } from "../acions/CartActions";
import Loading from "../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import CartItem from "../components/Cart/CartItem";
import NavBar from "../components/Navbar";
import { jsonDecoder } from "../services/jsonDecoder";

const FoodCartPage = ({ history }) => {
  library.add(faTrash);

  const token = localStorage.getItem("UserInfo");

  const dispatch = useDispatch();

  const cartDetails = useSelector((state) => state.cartGet);
  const { cartloading, success, carterror, CartItems } = cartDetails;

  const [cartQty, setcartQty] = useState();
  const [cart, setCart] = useState();

  const setUserData = () => {
    const userData = jsonDecoder(token);
    dispatch(getCart(userData?._id, userData?.cartId));
    if (CartItems) {
      setCart(CartItems);
    }
  };
  const removeFromCartHandler = (id) => {
    console.log(id);
    const userData = jsonDecoder(token);
    dispatch(removeFromCart(id, userData?._id, userData?.cartId));
    setUserData();
  };

  useEffect(() => {
    if (token) {
      setUserData();
    } else {
      history.push(`/login?redirect=/cart`);
    }
  }, []);

  const incrementitemQuantity = (id) => {
    let update = cart.result.items.map((item) => {
      if (item.foodId._id === id) {
        item.quantity++;
        console.log("item", item);
      }
      return cart;
    });
    setCart(update[0]);
    console.log("Cart-------", cart);
    console.log("update-------", update[0]);
  };
  const decrementitemQuantity = (id) => {
    let update = cart.result.items.map((item) => {
      if (item.foodId._id === id && item.quantity > 1) {
        item.quantity--;
        console.log("iteminc", item);
      }
      return cart;
    });
    setCart(update[0]);
  };

  // const qtyAdd = () => {
  //   setcartQty(CartItems.qty);
  // };
  const handleChange = (e) => {};
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row>
          <Col md={8} sm={8} lg={8} xl={8}>
            <h1>Food Cart</h1>
            {token ? (
              <>
                {cartloading ? (
                  <>
                    <Loading />
                  </>
                ) : (
                  <>
                    {CartItems && !cartloading ? (
                      <>
                        {cart?.result != undefined ? (
                          <>
                            {cart?.result.items.map((item) => (
                              <>
                                {console.log("Org-------", item.quantity)}
                                <div key={item._id}>
                                  <ListGroup variant="flush">
                                    <ListGroup.Item key={cart.result._id}>
                                      <Row>
                                        <Col md={2}>
                                          <Image
                                            src={item.foodId.image}
                                            alt={item.foodId.name}
                                            fluid
                                            rounded
                                          />
                                        </Col>
                                        <Col md={3}>
                                          <Link to={`/food/${item.foodId._id}`}>
                                            {item.foodId.name}
                                          </Link>
                                        </Col>
                                        <Col md={2}>{item.foodId.price} ৳</Col>
                                        <Col md={2}>
                                          <Col className="d-flex">
                                            {/* <span>Qty: </span> */}
                                            {/* <Form>*/}
                                            {/* <Form.Control
                                              type="number"
                                              value={item.quantity}
                                              // onChange={(e) =>
                                              //   setcartQty(e.target.value)
                                              // }
                                            /> */}

                                            <Button
                                              variant="dark"
                                              style={{
                                                borderRadius: "50%",
                                                padding: "2px 2px",
                                                height: "25px",
                                                width: "25px",
                                                textAlign: "center",
                                              }}
                                              onClick={() => {
                                                decrementitemQuantity(
                                                  item.foodId._id
                                                );
                                              }}
                                            >
                                              -
                                            </Button>
                                            {/* <Link
                                              to={`/food/${cart.result?.items[item].foodId._id}`}
                                            > */}
                                            <p
                                              style={{
                                                // border: "1px solid gray",
                                                width: "40px",
                                                textAlign: "center",
                                                borderRadius: "5px",
                                                padding: "2px 5px",
                                              }}
                                            >
                                              {item.quantity}
                                            </p>
                                            {/* </Link> */}
                                            <Button
                                              variant="dark"
                                              style={{
                                                borderRadius: "50%",
                                                padding: "0px 0px",
                                                height: "25px",
                                                width: "25px",
                                                textAlign: "center",
                                              }}
                                              onClick={() => {
                                                incrementitemQuantity(
                                                  item.foodId._id
                                                );
                                              }}
                                            >
                                              +
                                            </Button>
                                            {/* </Form>*/}
                                          </Col>
                                        </Col>
                                        <Col md={2}>
                                          <Button
                                            type="button"
                                            variant="outline-danger"
                                            onClick={() =>
                                              removeFromCartHandler(
                                                item.foodId._id
                                              )
                                            }
                                          >
                                            <FontAwesomeIcon icon="trash" />
                                          </Button>
                                        </Col>
                                      </Row>
                                    </ListGroup.Item>
                                  </ListGroup>
                                </div>
                              </>
                            ))}
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </>
            ) : (
              <>Please Login First.</>
            )}
          </Col>
          <Col md={4} className="py-5">
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {/* {Object.keys(cart.result.items).map((item) => ( */}
                  <>
                    <h2>
                      Subtotal (
                      {cart?.result?.items.reduce(
                        (acc, item) => acc + item.quantity,
                        0
                      )}
                      ) items
                    </h2>
                    ৳{" "}
                    {cart?.result?.items
                      .reduce(
                        (acc, item) => acc + item.quantity * item.foodId.price,
                        0
                      )
                      .toFixed(2)}
                  </>
                  {/* ))} */}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn-block"
                    disabled={cart?.result?.items.length === 0}
                    // onClick={checkoutHandler}
                  >
                    Proceed To Checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FoodCartPage;
