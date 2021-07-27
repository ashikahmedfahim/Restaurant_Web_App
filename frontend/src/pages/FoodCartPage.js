import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";

const FoodCartPage = () => {
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
      </Col>
    </Row>
  );
};

export default FoodCartPage;
