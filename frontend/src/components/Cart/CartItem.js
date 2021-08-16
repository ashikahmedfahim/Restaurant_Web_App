import React, { useEffect } from "react";
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
import { listFOODDetails } from "../../acions/FoodActions";
const CartItem = ({ foodId, qty }) => {
  const dispatch = useDispatch();
  const foodDetails = useSelector((state) => state.foodDetails);
  const { loading, error, FOOD } = foodDetails;
  console.log("FoodId", FOOD.name);
  let name = FOOD.name;

  useEffect(() => {
    dispatch(listFOODDetails(foodId));
  }, [dispatch]);

  return (
    <div>
      {FOOD.name != undefined ? (
        <p>
          <Image src={FOOD.image} alt={FOOD.name} fluid rounded />
          {foodId}
          {name}
          <br /> {qty}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CartItem;
