import React from 'react';
import {Container, Row, Col, Form, Table, Button} from 'react-bootstrap';

const AllFood = () => {
  return (
    <Table striped bordered hover responsive variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Type</th>
          <th>Category</th>
          <th>inStock</th>
          <th>Description</th>
          <th>Discount</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Image</td>
          <td>Burger</td>
          <td>$10.00</td>
          <td>Popular</td>
          <td>Burger</td>
          <td>true</td>
          <td>Chicken,Cheese</td>
          <td>0%</td>
          <td><Button variant="light">Edit</Button></td>
          <td><Button variant="danger">Delete</Button></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default AllFood;
