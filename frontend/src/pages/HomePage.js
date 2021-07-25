import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar.js";
import Section1 from "../components/Section1.js";
import Section2 from "../components/Section2.js";
import Section3 from "../components/Section3.js";
import Section4 from "../components/Section4.js";
import Footer from "../components/Footer.js";
import { useDispatch, useSelector } from "react-redux";
import { listFOODs } from "../acions/FoodActions.js";
import Loading from "../components/Loading.js";
const HomePage = () => {
  const foodList = useSelector((state) => state.foodList);
  const { foodListloading, foodListerror, FOODS } = foodList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listFOODs());
  }, [dispatch]);

  return (
    <>
      <div>
        <Navbar />
        <Section1 />
        <Section2 food={FOODS} error={foodListerror}/>
        <Section3 />
        <Section4 />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
