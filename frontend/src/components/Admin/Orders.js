import React from 'react';
import {Container, Row, Col, Form, Table, Button} from 'react-bootstrap';

const Orders = () => {
  return (
    <Row>
      <Row>
        <h2 className="py-3">New Order</h2>
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Payment Method</th>
              <th>Paid</th>
              <th>Items</th>
              <th>Total Price</th>
              <th>View</th>
              <th>Confirm</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nayeem</td>
              <td>Bkash</td>
              <td>Yes</td>
              <td>5</td>
              <td>$10.00</td>
              <td>
                <Button variant="info">View</Button>
              </td>
              <td>
                <Button variant="success">Confirm</Button>
              </td>
              <td>
                <Button variant="danger">Cancel</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row>
        <h2 className="py-3">Orders</h2>
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Payment Method</th>
              <th>Paid</th>
              <th>Items</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nayeem</td>
              <td>Bkash</td>
              <td>Yes</td>
              <td>5</td>
              <td>$10.00</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Row>
  );
};

export default Orders;
