import React from 'react';
import {Container, Row, Col, Form, Table, Button} from 'react-bootstrap';

const Users = () => {
  return (
    <Row>
      <h2 className="py-3">Users</h2>

      <Table striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nayeem</td>
            <td>nayeem@gmai.com</td>
            <td>*******</td>
            <td>012365849</td>
            <td>Dhaka</td>
          </tr>
        </tbody>
      </Table>
    </Row>
  );
};

export default Users;
