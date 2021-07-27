import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../acions/CategoryActions";
import { addFood } from "../../acions/FoodActions";
import FileBase from "react-file-base64";
import ErrorMessage from "../ErrorMessage";
import Loading from "../Loading";
const initialState = {
  name: "",
  category: "",
  price: "",
  inStock: "",
  description: "",
  discount: "",
  image: "",
};
const AddFood = ({ history }) => {
  const [food, setFood] = useState(initialState);

  const dispatch = useDispatch();

  const foodAdd = useSelector((state) => state.foodAdd);
  const { loading, success, error, FOOD } = foodAdd;

  const allCategory = useSelector((state) => state.allCategory);
  const { categoryloading, categoryerror, AllCategoryInfo } = allCategory;
  const Category = AllCategoryInfo;

  const handleChange = (e) =>
    setFood({ ...food, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(food);
    dispatch(addFood({ ...food }));

    setFood(initialState);
  };

  useEffect(() => {
    dispatch(getCategory());
  }, [history]);

  return (
    <>
      {categoryloading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          {loading ? (
            <>
              <Loading />
            </>
          ) : (
            <>
              <Row className="px-3">
                {success ? (
                  <>
                    <ErrorMessage
                      variant="success"
                      message={`Successfully Added.`}
                    />
                  </>
                ) : (
                  <></>
                )}
                {error ? (
                  <>
                    <ErrorMessage variant="danger" message={error} />
                  </>
                ) : (
                  <></>
                )}
                <h2 className="py-3">Add Food</h2>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col sm={12} md={6} lg={6} xl={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          onChange={handleChange}
                          placeholder="Enter food name"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                          type="number"
                          name="price"
                          onChange={handleChange}
                          placeholder="Enter food price"
                        />
                      </Form.Group>
                      {/*   <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Select Type</Form.Label>
              <Form.Control as="select" name="type" onChange={handleChange}>
                <option value="">Choose a type</option>

                {Object.keys(type).map((item) => (
                  <option key={type[item]._id} value={type[item]._id}>{type[item].name}</option>
                ))}
              </Form.Control> 
            </Form.Group>*/}
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlSelect1"
                      >
                        <Form.Label>Select Category</Form.Label>
                        <Form.Control
                          as="select"
                          name="category"
                          onChange={handleChange}
                        >
                          <option value="">Choose a category</option>

                          {Object.keys(Category).map((item) => (
                            <option
                              key={Category[item]._id}
                              value={Category[item]._id}
                            >
                              {Category[item].name}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="mr-2">InStock :</Form.Label>

                        <Form.Check
                          inline
                          label="Yes"
                          value={true}
                          name="inStock"
                          type="radio"
                          onChange={handleChange}
                        />
                        <Form.Check
                          inline
                          label="No"
                          value={false}
                          name="inStock"
                          type="radio"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                      <Form.Group controlId="formFileSm" className="mb-3">
                        <Form.Label>Add Image :</Form.Label>
                        <FileBase
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) =>
                            setFood({ ...food, image: base64 })
                          }
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="description"
                          rows={3}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Discount</Form.Label>
                        <Form.Control
                          type="number"
                          name="discount"
                          placeholder="Add Discount"
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Button variant="dark" type="submit">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Row>
            </>
          )}
        </>
      )}
    </>
  );
};

export default AddFood;
