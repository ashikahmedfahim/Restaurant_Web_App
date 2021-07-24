import React from "react";
import { Container, Row, Col, Form, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
const AllFood = ({ food }) => {
  console.log(food);
  return (
    <>
      <Row>
        <Col xl={10} lg={8}>
          {food ? (
            <></>
          ) : (
            <>
              {" "}
              <ErrorMessage variant="warning" message="No Product Found  or Something Went Wrong" />
            </>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover responsive variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Type</th>
                <th>food</th>
                <th>inStock</th>
                <th>Description</th>
                <th>Discount</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {food ? (
              Object.keys(food).map((item) => (
                <>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>c</td>
                      <td>{food[item].name}</td>
                      <td>৳ {food[item].price}</td>
                      <td>{food[item].type}</td>
                      <td>{food[item].price}</td>
                      <td>{food[item].inStock}</td>
                      <td>{food[item].description}</td>
                      <td>{food[item].discount}%</td>
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
