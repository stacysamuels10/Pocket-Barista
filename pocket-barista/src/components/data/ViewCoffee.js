import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ViewCoffee = () => {
  let path = window.location.pathname;
  let index = Number(path.replace(/\D/g, ""));
  const bag = useSelector((state) => state.coffeeReducer.pastCoffeeBags[index]);
  return (
    <div>
      <p>{bag.bagOfCoffee.about.name}</p>
      <p>{bag.bagOfCoffee.about.roaster}</p>
      <p>{bag.bagOfCoffee.about.rating}</p>
      <p>{bag.bagOfCoffee.details.roastLevel}</p>
      <p>{bag.bagOfCoffee.details.beanProcess}</p>
    </div>
  );
};

export default ViewCoffee;
