import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AdminHomePage from "./pages/AdminHomePage";
import FoodDetailsPage from "./pages/FoodDetailsPage";
import FoodCartPage from "./pages/FoodCartPage";
import "./assets/css/index.css";
import FoodEditPage from "./pages/FoodEditPage";
import FoodSearchPage from "./pages/FoodSearchPage";
import UserProfilePage from "./pages/UserProfilePage";
import FavouritePage from "./pages/FavouritePage";
function App() {
  return (
    <Router>
      <Route path="/favourite" component={FavouritePage} />
      <Route path="/profile/:id" component={UserProfilePage} />
      <Route path="/search" component={FoodSearchPage} />
      <Route path="/edit/:id" component={FoodEditPage} />
      <Route path="/cart" component={FoodCartPage} />
      <Route path="/food/:id" component={FoodDetailsPage} />
      <Route path="/admin/home" component={AdminHomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={HomePage} exact />
    </Router>
  );
}

export default App;
