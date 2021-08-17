import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar.js";
import Section1 from "../components/Section1.js";
import Section2 from "../components/Section2.js";
import Section3 from "../components/Section3.js";
import Section4 from "../components/Section4.js";
import Section5 from "../components/Section5.js";
import Footer from "../components/Footer.js";
import { useDispatch, useSelector } from "react-redux";
import { listFOODs } from "../acions/FoodActions.js";
import Loading from "../components/Loading.js";
import Comments from "../components/Comments.js";
import Map from "../components/Map.js";
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
        <Section2 food={FOODS} error={foodListerror} />
        <Section4 />
        <Section3 />
        <Section5 />
        <Comments />
        <Map />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
