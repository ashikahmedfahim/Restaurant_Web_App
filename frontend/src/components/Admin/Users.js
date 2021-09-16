import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import { getAllUserActions } from "../../acions/UserActions";

const Users = () => {
  const dispatch = useDispatch();

  const foodList = useSelector((state) => state.AllUser);
  const { AllUserloading, AllUsererror, AllUserInfo } = foodList;

  useEffect(() => {
    dispatch(getAllUserActions());
  }, [dispatch]);
  return (
    <Row className="d-flex justify-content-center">
      <h2 className="py-3">Users</h2>
      {AllUserloading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Col md={4} xs={12}>
            <Table striped bordered hover responsive variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                </tr>
              </thead>
              {AllUserInfo ? (
                Object.keys(AllUserInfo).map((item) => (
                  <tbody>
                    <tr>
                      <td>{Number(item) + 1}</td>
                      <td>{AllUserInfo[item].email}</td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <></>
              )}
            </Table>
          </Col>
        </>
      )}
    </Row>
  );
};

export default Users;
