import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AdminHomePage from "./pages/AdminHomePage";
import Footer from "./components/Footer";
import FoodDetailsPage from "./pages/FoodDetailsPage";
import FoodCartPage from "./pages/FoodCartPage";
import "./assets/css/index.css";
import FoodEditPage from "./pages/FoodEditPage";
function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Route path="/edit/:id" component={FoodEditPage} />
      <Route path="/cart" component={FoodCartPage} />
      <Route path="/food/:id" component={FoodDetailsPage} />
      <Route path="/admin/home" component={AdminHomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={HomePage} exact />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
