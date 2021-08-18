import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button, Dropdown } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import AddAdmin from "../components/Admin/AddAdmin";
import AddCategory from "../components/Admin/AddCategory";
import AddFood from "../components/Admin/AddFood";
import AllFood from "../components/Admin/AllFood";
import Orders from "../components/Admin/Orders";
import Users from "../components/Admin/Users";
import HomePanel from "../components/Admin/HomePanel";
import "../assets/css/AdminHomePage.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../acions/CategoryActions";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { listFOODs } from "../acions/FoodActions";
import image from "../assets/images/burger.png";
import { adminLogout } from "../acions/AdminActions";
const AdminHomePage = ({ history, location }) => {
  const [selectedbtn, setSelectedbtn] = useState("");
  const appliedbtn = (value) => {
    setSelectedbtn(value);
  };
  const dispatch = useDispatch();

  const foodList = useSelector((state) => state.foodList);
  const { foodListloading, foodListerror, FOODS } = foodList;

  const Admin = JSON.parse(localStorage.getItem("Admin"));

  const adminRedirect = location.search
    ? location.search.split("=")[1]
    : "/login";

  useEffect(() => {
    if (!Admin) {
      history.push(adminRedirect);
    }
    dispatch(getCategory());
    dispatch(listFOODs());
  }, [history]);

  const handleLogout = () => {
    dispatch(adminLogout());
    history.push("/login");
  };

  return (
    <>
      {foodListloading ? (
        <>
          <Loading />
        </>
      ) : (
        <></>
      )}
      <Container
        fluid
        className="py-0 px-0"
        style={{ backgroundColor: "white", minHeight: "100vh", height: "auto" }}
      >
        <Row className="g-0">
          <Col
            sm={2}
            md={3}
            lg={2}
            xl={2}
            style={{
              backgroundColor: "#152530",
              height: "auto",
              width: "14rem",
            }}
            className="col-1"
          >
            {/* <Col className="d-flex justify-content-start px-3 py-3">Logo</Col> */}
            <Col>
              <Sidebar appliedbtn={appliedbtn} />
            </Col>
          </Col>
          <Col
            sm={10}
            md={9}
            lg={10}
            xl={10}
            style={{
              backgroundColor: "white",
              minHeight: "100vh",
              height: "auto",
            }}
            className="mx-0 px-3"
          >
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className="d-flex justify-content-end align-items-center px-3 my-3"
            >
              <Dropdown>
                <Dropdown.Toggle
                  size="sm"
                  variant="light"
                  id="dropdown-basic"
                  className="d-flex justify-content-end align-items-center mx-3"
                >
                  <Image
                    src={image}
                    roundedCircle
                    style={{
                      width: "3rem",
                      height: "3rem",
                      border: "2px solid black",
                    }}
                    alt="avatar"
                  />
                  <p className="mx-2 my-0">Nayeem Ahmed</p>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-3">Suport</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Button variant="dark" onClick={handleLogout}>
                Logout
              </Button>
            </Col>
            {selectedbtn === "addCategory" ? (
              <Col
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ backgroundColor: "white" }}
                className="d-flex justify-content-center align-items-start py-5"
              >
                <AddCategory />
              </Col>
            ) : selectedbtn === "addFood" ? (
              <Col
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ backgroundColor: "white" }}
                className="d-flex justify-content-center align-items-start py-5"
              >
                <AddFood />
              </Col>
            ) : selectedbtn === "allFood" ? (
              <Col
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ backgroundColor: "white" }}
                className="py-5 px-3"
              >
                <AllFood food={FOODS} />
              </Col>
            ) : selectedbtn === "orders" ? (
              <Col
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ backgroundColor: "white" }}
                className="px-3 py-5 admin-home-page mx-0"
              >
                <Orders />
              </Col>
            ) : selectedbtn === "users" ? (
              <Col
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ backgroundColor: "white" }}
                className="px-3 py-5"
              >
                <Users />
              </Col>
            ) : selectedbtn === "addAdmin" ? (
              <Col
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ backgroundColor: "white" }}
                className="px-3 py-5"
              >
                <AddAdmin />
              </Col>
            ) : (
              <Col
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className="d-flex admin-home-page justify-content-start px-2 py-5 mx-0"
                style={{ backgroundColor: "white" }}
              >
                <HomePanel />
              </Col>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminHomePage;
