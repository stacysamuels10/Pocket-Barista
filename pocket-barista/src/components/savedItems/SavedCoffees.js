import React from "react";
import { useSelector, useDispatch } from "react-redux";

const SavedCoffees = () => {
  const coffee = useSelector((state) => state.coffeeReducer.pastCoffeeBags);
  return (
    <div>
      <div className="past-coffee">
        {coffee.map((bag) => (
          <>
            <p>{bag.bagOfCoffee.about.name}</p>
            <p>{bag.bagOfCoffee.about.roaster}</p>
            <p>{bag.bagOfCoffee.about.rating}</p>
            <p>{bag.bagOfCoffee.details.roastLevel}</p>
            <p>{bag.bagOfCoffee.details.beanProcess}</p>
          </>
        ))}
        <div className="new-coffee">
          <button>Add New Coffee</button>
        </div>
      </div>
    </div>
  );
};

export default SavedCoffees;
