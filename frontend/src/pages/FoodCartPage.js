import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getCart } from "../acions/CartActions";
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

  const setUserData = () => {
    const userData = jsonDecoder(token);
    dispatch(getCart(userData?._id, userData?.cartId));
  };

  useEffect(() => {
    if (token) {
      setUserData();
    } else {
      history.push(`/login?redirect=/cart`);
    }
  }, []);

  // const qtyAdd = () => {
  //   setcartQty(CartItems.qty);
  // };
  const handleChange = (e) => {};
  return (
    <>
      <NavBar />
      <Row>
        <Col md={8} sm={8} lg={8} xl={8}>
          <h1>Shopping Cart</h1>
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
                      {CartItems.result != undefined ? (
                        <>
                          {Object.keys(CartItems.result.items).map((item) => (
                            <div key={CartItems.result.items[item]._id}>
                              <ListGroup variant="flush">
                                <ListGroup.Item key={CartItems.result._id}>
                                  <Row>
                                    <Col md={2}>
                                      <Image
                                        src={
                                          CartItems.result?.items[item].foodId
                                            .image
                                        }
                                        alt={
                                          CartItems.result?.items[item].foodId
                                            .name
                                        }
                                        fluid
                                        rounded
                                      />
                                    </Col>
                                    <Col md={3}>
                                      <Link
                                        to={`/food/${CartItems.result?.items[item].foodId._id}`}
                                      >
                                        {
                                          CartItems.result?.items[item].foodId
                                            .name
                                        }
                                      </Link>
                                    </Col>
                                    <Col md={2}>
                                      $
                                      {
                                        CartItems.result?.items[item].foodId
                                          .price
                                      }
                                    </Col>
                                    <Col md={2}>
                                      <Form>
                                      
                                        <Form.Control
                                          type="number"
                                          value={CartItems.result?.items[item].quantity}
                                          // onChange={(e) =>
                                          //   setcartQty(e.target.value)
                                          // }
                                        />
                                      </Form>
                                    </Col>
                                    <Col md={2}>
                                      <Button
                                        type="button"
                                        variant="outline-danger"
                                        // onClick={() => removeFromCartHandler(item.product)}
                                      >
                                        <FontAwesomeIcon icon="trash" />
                                      </Button>
                                    </Col>
                                  </Row>
                                </ListGroup.Item>
                              </ListGroup>
                            </div>
                          ))}
                        </>
                      ) : (
                        <>{/* {console.log("CartItems.result")} */}</>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                  {/* {CartItems.result.items.map((items) => (
                  <>{items}</>
                ))} */}
                  {/* {CartItems.result && CartItems.qty ? (
                  <>
                    <ListGroup variant="flush">
                      <ListGroup.Item key={CartItems.result.Id}>
                        <Row>
                          <Col md={2}>
                            <Image
                              src={CartItems.result.image}
                              alt={CartItems.result.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col md={3}>
                            <Link to={`/food/${CartItems.result._id}`}>
                              {CartItems.result.name}
                            </Link>
                          </Col>
                          <Col md={2}>${CartItems.result.price}</Col>
                          <Col md={2}>
                            <Form>
                              <Form.Control
                                type="number"
                                value={cartQty}
                                onChange={(e) => setcartQty(e.target.value)}
                              />
                            </Form>
                          </Col>
                          <Col md={2}>
                            <Button
                              type="button"
                              variant="outline-danger"
                              // onClick={() => removeFromCartHandler(item.product)}
                            >
                              <FontAwesomeIcon icon="trash" />
                            </Button>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                     
                    </ListGroup>
                  </>
                ) : (
                  <>
                    <Loading />
                  </>
                )} */}
                </>
              )}
            </>
          ) : (
            <>Please Login First.</>
          )}
        </Col>
      </Row>
    </>
  );
};

export default FoodCartPage;
