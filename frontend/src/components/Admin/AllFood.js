import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Table,
  Button,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { listFOODs } from "../../acions/FoodActions";

const AllFood = ({ food, history }) => {
  const dispatch = useDispatch();
  const foodList = useSelector((state) => state.foodList);
  const { foodListloading, foodListerror, FOODS } = foodList;

  useEffect(() => {
    dispatch(listFOODs());
  }, [history]);
  return (
    <>
      <Row>
        <Col xl={10} lg={8}>
          {food ? (
            <></>
          ) : (
            <>
              {" "}
              <ErrorMessage
                variant="warning"
                message="No Food Found  or Something Went Wrong"
              />
            </>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover responsive variant="dark">
            <thead>
              <tr>
                <th>SL</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Type</th>
                <th>food</th>
                <th>inStock</th>
                <th>Description</th>
                <th>Discount</th>
                <th>Total</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {food ? (
              Object.keys(food).map((item) => (
                <>
                  <tbody>
                    <tr>
                      <td>{Number(item) + 1}</td>
                      <td>
                        <Image
                          rounded
                          src={food[item].image}
                          style={{ width: "4rem", height: "4rem" }}
                        />
                      </td>
                      <td>{food[item].name}</td>
                      <td>৳ {food[item].price}</td>
                      <td>{food[item].type}</td>
                      <td>{food[item].price}</td>
                      {food[item].inStock ? <td>Yes</td> : <td>No</td>}
                      <td>{food[item].description}</td>
                      <td>{food[item].discount}%</td>
                      <td>
                        ৳{" "}
                        {food[item].price -
                          (food[item].discount / 100) * food[item].price}
                      </td>
                      <td>
                        <Button variant="light">
                          <Link to={`/edit/${food[item]._id}`}>Edit</Link>
                        </Button>
                      </td>
                      <td>
                        <Button variant="danger">Delete</Button>
                      </td>
                    </tr>
                  </tbody>
                </>
              ))
            ) : (
              <></>
            )}
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default AllFood;
