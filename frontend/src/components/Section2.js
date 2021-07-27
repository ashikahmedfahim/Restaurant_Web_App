import React from "react";
import {
  Container,
  Col,
  Row,
  Navbar,
  Nav,
  Card,
  Button,
  Pagination,
} from "react-bootstrap";
import ErrorMessage from "./ErrorMessage";
import Foods from "./Food";
import Loading from "./Loading";
import "../assets/css/Section-2.css";

const Section2 = ({ food, error }) => {
  let active = 3;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      {error ? (
        <div className="py-5">
          <ErrorMessage variant="warning" message="No Food Found" />
        </div>
      ) : (
        <>
          {!food ? (
            <>
              <Loading />
            </>
          ) : (
            <>
              <Container>
                <Row>
                  <Col xs={12} md={12}>
                    <h2
                      className="my-5"
                      style={{ fontFamily: "Tangerine", fontSize: "3.5rem" }}
                    >
                      Menu
                    </h2>

                    <Nav
                      className="mr-auto d-flex"
                      fill
                      variant="tabs"
                      defaultActiveKey="/"
                    >
                      <Nav.Link href="#/" className="">
                        All
                      </Nav.Link>
                      <Nav.Link href="#link1" eventKey="link-1" className="">
                        Newly Added
                      </Nav.Link>
                      <Nav.Link href="#link2" className="">
                        Popular
                      </Nav.Link>
                      <Nav.Link href="#link3" className="">
                        Top Selling
                      </Nav.Link>
                    </Nav>
                  </Col>
                </Row>
                <Row>
                  {food ? (
                    Object.keys(food).map((item) => (
                      <>
                        <Col sm={12} md={6} lg={4} xl={3}>
                          <Foods
                            name={food[item].name}
                            price={food[item].price}
                            des={food[item].description}
                            id={food[item]._id}
                            img={food[item].image}
                            discount={food[item].discount}
                            inStock={food[item].inStock}
                          />
                        </Col>
                      </>
                    ))
                  ) : (
                    <></>
                  )}
                </Row>
                <Row className="my-5">
                  <Pagination
                    variant="dark"
                    size="sm"
                    className="d-flex justify-content-center"
                  >
                    {items}
                  </Pagination>
                </Row>
              </Container>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Section2;
