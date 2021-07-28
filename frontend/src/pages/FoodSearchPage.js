import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listFOODs } from "../acions/FoodActions.js";

import {
  Col,
  Container,
  Row,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Navbar from "../components/Navbar.js";
import Section2 from "../components/Section2.js";
const FoodSearchPage = () => {
  const [SearchText, setSearchText] = useState({ suggestions: [] });

  const foodList = useSelector((state) => state.foodList);
  const { foodListloading, foodListerror, FOODS } = foodList;

  let foods = [];
  if (FOODS) {
    FOODS.map((item) => {
      foods.push(item.name);
    });
  }
  const handleSearchText = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");

      suggestions = foods.sort().filter((x) => regex.test(x));
    }

    setSearchText({ suggestions });
  };
  const renderSuggestions = () => {
    const { suggestions } = SearchText;
    console.log(suggestions);
    suggestions.map((item) => {
      console.log(item);
    });
    if (suggestions.length <= 0) {
      return null;
    } else {
      return
      <ul>
        {suggestions.map((item) => {
          <li
            style={{
              listStyle: "none",
              backgroundColor: "black",
              color: "white",
              flexDirection: "column",
            }}
            className="d-flex"
          >
            {item}
          </li>;
        })}
      </ul>
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listFOODs());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Container fluid>
        <Row style={{ backgroundColor: "black" }}>
          <Col sm={12} md={12} lg={12} xl={12} className="my-3 px-3">
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                style={{ borderRadius: "2.2rem" }}
                onChange={handleSearchText}
              />

              <Button
                variant="outline-light"
                style={{ borderRadius: "2.2rem" }}
                className="mx-3"
              >
                Search
              </Button>
            </Form>
            {renderSuggestions()}
          </Col>
        </Row>
        <Row>
          <Section2 food={FOODS} error={foodListerror} />
        </Row>
      </Container>
    </>
  );
};

export default FoodSearchPage;
