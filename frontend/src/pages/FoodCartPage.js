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

const FoodCartPage = ({ history }) => {
  library.add(faTrash);
  const User = JSON.parse(localStorage.getItem("UserInfo"));

  const dispatch = useDispatch();

  const cartDetails = useSelector((state) => state.cartGet);

  const { cartloading, success, carterror, CartItems } = cartDetails;

  const [cartQty, setcartQty] = useState(1);

  useEffect(() => {
    if (User) {
      dispatch(getCart(User.result._id));
    } else {
      history.push(`/login?redirect=/cart`);
    }
  }, [dispatch]);

  const qtyAdd = () => {
    setcartQty(CartItems.qty);
  };
  const handleChange = (e) => {};
  return (
    <>
      <NavBar />
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
                  {CartItems && !cartloading ? (
                    <>
                      {console.log(CartItems.result)}
                      {CartItems.result != undefined ? (
                        <>
                          {Object.keys(CartItems.result.items).map((item) => (
                            <div key={CartItems.result.items[item]._id}>
                              {/* {CartItems.result.items[item].foodId}
                            <br />
                            {CartItems.result.items[item].quantity}
                            <br /> */}

                              <CartItem
                                foodId={CartItems.result.items[item].foodId}
                                qty={CartItems.result.items[item].quantity}
                              />
                            </div>
                          ))}
                        </>
                      ) : (
                        <>{console.log("CartItems.result")}</>
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
