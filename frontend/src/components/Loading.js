import React from "react";
import { Container, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Container
      style={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "80px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          border: "3px solid black",
          borderRightColor: "transparent",
        }}
      ></Spinner>
    </Container>
  );
};

export default Loading;
