import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ViewCup = () => {
  let path = window.location.pathname;
  let index = Number(path.replace(/\D/g, ""));
  const cup = useSelector((state) => state.brewedCupReducer.pastBrews[index]);
  return (
    <div>
      <p>{cup.brewedCup.setup.brewer}</p>
      <p>{cup.brewedCup.setup.coffee}</p>
      <p>{cup.brewedCup.brew.waterAmount}</p>
      <p>{cup.brewedCup.brew.rating}</p>
      <p>{cup.brewedCup.setup.dateOfBrew}</p>
    </div>
  );
};

export default ViewCup;
