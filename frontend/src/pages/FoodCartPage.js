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

const FoodCartPage = ({ history }) => {
  library.add(faTrash);
  const User = JSON.parse(localStorage.getItem("UserInfo"));

  const dispatch = useDispatch();

  const cartDetails = useSelector((state) => state.cartGet);

  const { cartloading, carterror, CartItems } = cartDetails;

  useEffect(() => {
    if (User) {
      dispatch(getCart(User.result._id));
    } else {
      history.push(`/login?redirect=/cart`);
    }
  }, [dispatch]);
  const handleChange = (e) => {
    // console.log(e.target.value)
    //   dispatch(
    //     addToCart(item.product, Number(e.target.value))
    //   )
  };
  return (
    <Row>
      <Col md={8} sm={8} lg={8} xl={8}>
        <h1>Shopping Cart</h1>
        {User ? (
          <>
            {cartloading ? (
              <>
                <Loading />
              </>
            ) : (
              <>
                {CartItems.result ? (
                  <>
                    {CartItems.result.name}
                    {CartItems.qty}
                    <ListGroup variant="flush">
                      {/* {cartItems.map((item) => ( */}
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
                            <Form.Control
                              type="Number"
                              value={CartItems.qty}
                              onChange={handleChange}
                            ></Form.Control>
                          </Col>
                          <Col md={2}>
                            <Button
                              type="button"
                              variant="danger"
                              // onClick={() => removeFromCartHandler(item.product)}
                            >
                              <FontAwesomeIcon icon="trash" />
                            </Button>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      {/* ))} */}
                    </ListGroup>
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
    </Row>
  );
};

export default FoodCartPage;
