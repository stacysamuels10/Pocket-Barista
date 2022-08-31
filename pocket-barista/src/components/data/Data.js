import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Data = () => {
  const coffeeCounter = useSelector(
    (state) => state.coffeeReducer.coffeeCounter
  );
  const cupCounter = useSelector((state) => state.brewedCupReducer.cupCounter);
  const brewerCounter = useSelector(
    (state) => state.brewerReducer.brewerCounter
  );
  const grinderCounter = useSelector(
    (state) => state.grinderReducer.grinderCounter
  );
  return (
    <div>
      <Link to="/coffee">Coffee</Link>
      <p>{coffeeCounter}</p>
      <Link to="/cups">Brews</Link>
      <p>{cupCounter}</p>
      <Link to="/brewers">Brewers</Link>
      <p>{brewerCounter}</p>
      <Link to="/grinders">Grinders</Link>
      <p>{grinderCounter}</p>
    </div>
  );
};

export default Data;
