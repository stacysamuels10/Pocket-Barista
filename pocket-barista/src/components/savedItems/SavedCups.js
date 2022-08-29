import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SavedCups = () => {
  const navigate = useNavigate();
  const cups = useSelector((state) => state.brewedCupReducer.pastBrews);
  return (
    <div>
      <div className="past-cups">
        {cups.map((cup) => (
          <>
            <p>{cup.brewedCup.setup.brewer}</p>
            <p>{cup.brewedCup.setup.coffee}</p>
            <p>{cup.brewedCup.brew.waterAmount}</p>
            <p>{cup.brewedCup.brew.rating}</p>
            <p>{cup.brewedCup.setup.dateOfBrew}</p>
            <button onClick={() => navigate("/")}>More Info</button>
          </>
        ))}
      </div>
    </div>
  );
};

export default SavedCups;
