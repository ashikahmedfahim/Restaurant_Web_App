import React from "react";

const item = ({FOOD}) => {
  return <div>{FOOD ? <>{FOOD.name}</> : <></>}</div>;
};

export default item;
