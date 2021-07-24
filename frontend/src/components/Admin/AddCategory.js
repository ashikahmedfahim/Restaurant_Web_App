import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { addCategory } from "../../acions/CategoryActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";

const initialState = {
  name: "",
};
const AddCategory = ({ history }) => {
  const [name, setName] = useState(initialState);

  const dispatch = useDispatch();

  const CategoryAdd = useSelector((state) => state.categoryAdd);
  const { categoryloading, categoryerror, CategoryInfo } = CategoryAdd;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name ---------", name);
    dispatch(addCategory({ ...name }));
    setName(initialState);
  };
  const handleChange = (e) =>
    setName({ ...name, [e.target.name]: e.target.value });

  return (
    <>
      {categoryloading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Row className="px-3">
            {categoryerror ? (
              <>
                <ErrorMessage variant="danger" message={categoryerror} />
              </>
            ) : (
              <></>
            )}
            {CategoryInfo ? (
              <>
                <ErrorMessage
                  variant="success"
                  message={`${CategoryInfo.name} Successfully Added.`}
                />
              </>
            ) : (
              <></>
            )}
            <h2 className="py-3">Add Category</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter New Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category"
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="dark" type="submit" className="my-3">
                Add
              </Button>
            </Form>
          </Row>
        </>
      )}
    </>
  );
};

export default AddCategory;
