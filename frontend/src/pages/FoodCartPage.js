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
                                        {
                                          CartItems.result?.items[item].foodId
                                            .price 
                                        }{" "}
                                        ৳
                                      </Col>
                                      <Col md={2}>
                                        <Form>
                                          <Form.Control
                                            type="number"
                                            value={
                                              CartItems.result?.items[item]
                                                .quantity
                                            }
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
          <ListGroup variant='flush'>
            <ListGroup.Item>
              {/* {Object.keys(CartItems.result.items).map((item) => ( */}
                <>
              <h2>
                Subtotal ({CartItems?.result?.items.reduce((acc, item) => acc + item.quantity, 0)})
                items
              </h2>
              ৳ {CartItems?.result?.items
                .reduce((acc, item) => acc + item.quantity * item.foodId.price , 0)
                .toFixed(2)}
                </>
              {/* ))} */}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={CartItems?.result?.items.length === 0}
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
