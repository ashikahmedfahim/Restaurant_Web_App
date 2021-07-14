import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../acions/AdminActions";
import { getType } from "../acions/TypeActions";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import AdminLogin from "../components/Admin/AdminLogin";
import UserLoginRegister from "../components/Admin/User/UserLoginRegister";
const initialState = {
  name: "",
  email: "",
  password: "",
  phone: "",
  address: "",
};
const loginInitialState = {
  email: "",
  password: "",
};
const LoginPage = ({ location, history }) => {
  const [selectedbtn, setSelectedbtn] = useState("");
  const [isSignup, setIsSignup] = useState("false");
  const [form, setForm] = useState(initialState);
  const [loginForm, setLoginForm] = useState(loginInitialState);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userloading, usererror, userInfo } = userLogin;

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminloading, adminerror, adminInfo } = adminLogin;

  const adminRedirect = location.search
    ? location.search.split("=")[1]
    : "/admin/home";

  const userRedirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (adminInfo) {
      history.push(adminRedirect);
    }
    if (userInfo) {
      history.push(userRedirect);
    }
  }, [history, userInfo, adminInfo, userRedirect, adminRedirect]);

  const appliedbtn = (value) => {
    setForm(initialState);
    setSelectedbtn(value);
  };
  const switchMode = (value) => {
    setForm(initialState);
    setIsSignup(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedbtn === "admin") {
      dispatch(login(loginForm, history));
      dispatch(getType());
      setLoginForm(loginInitialState);
    } else {
      if (isSignup === "true") {
        dispatch(register(form, history));
      } else {
        dispatch(login(form, history));
      }
    }
  };
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const loginhandleChange = (e) =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  return (
    <>
      {adminloading ? (
        <Loading />
      ) : (
        <>
          <Container className="py-5">
            <Row>
              {adminerror ? (
                <>
                  <ErrorMessage variant="danger" message={adminerror} />
                </>
              ) : (
                <></>
              )}
              <Row>
                <Col className="my-3">
                  <Button
                    variant="dark"
                    type="submit"
                    onClick={() => {
                      appliedbtn("admin");
                    }}
                  >
                    Admin
                  </Button>

                  <Button
                    variant="dark"
                    type="submit"
                    className="mx-3"
                    onClick={() => {
                      appliedbtn("user");
                    }}
                  >
                    User
                  </Button>
                </Col>
              </Row>
              <Row>
                {selectedbtn === "admin" ? (
                  <>
                    <AdminLogin
                      loginhandleChange={loginhandleChange}
                      handleSubmit={handleSubmit}
                    />
                  </>
                ) : (
                  <>
                    <UserLoginRegister
                      handleSubmit={handleSubmit}
                      handleChange={handleChange}
                      isSignup={isSignup}
                      switchMode={switchMode}
                    />
                  </>
                )}
              </Row>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default LoginPage;
