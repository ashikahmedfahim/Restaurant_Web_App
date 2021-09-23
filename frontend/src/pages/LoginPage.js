import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
  Card,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../acions/AdminActions";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import AdminLogin from "../components/Admin/AdminLogin";
import UserLoginRegister from "../components/User/UserLoginRegister";
import { getCategory } from "../acions/CategoryActions";
import { listFOODs } from "../acions/FoodActions";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
const initialState = {
  name: "",
  email: "",
  password: "",
  phone: "",
  address: "",
};
const LoginPage = ({ location, history }) => {
  const [isSignup, setIsSignup] = useState("false");
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userloading, usererror, UserInfo } = userLogin;

  const userRedirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (UserInfo) {
      history.push(userRedirect);
    }
  }, [history, UserInfo, userRedirect]);

  const switchMode = (value) => {
    setForm(initialState);
    setIsSignup(value);
  };
 
  return (
    <>
      <NavBar />

      <Container
        className="py-5 d-flex justify-content-center"
        style={{ marginTop: "7rem", marginBottom: "7rem" }}
      >
        <Card
          style={{
            width: "35rem",
            boxShadow: "0 1px 3px #bababa, 9px 20px 60px #3434345c",
          }}
        >
          <span
            style={{
              content: "",
              display: "inline-block",
              position: "absolute",
              left: "0",
              top: "0",
              height: "3px",
              width: "100%",
              backgroundColor: "#000",
              borderRadius: "0px 0px 30px 30px",
            }}
          ></span>

          <Card.Body>
            <Row>
              <UserLoginRegister
                isSignup={isSignup}
                switchMode={switchMode}
              />
            </Row>
          </Card.Body>
        </Card>
      </Container>

      <Footer />
    </>
  );
};

export default LoginPage;
