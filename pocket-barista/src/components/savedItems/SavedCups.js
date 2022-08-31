import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SavedCups = () => {
  const navigate = useNavigate();
  const cups = useSelector((state) => state.brewedCupReducer.pastBrews);
  return (
    <div>
      <div className="past-cups">
        {cups.map((cup, index) => (
          <>
            <p>{cup.brewedCup.setup.brewer}</p>
            <p>{cup.brewedCup.setup.coffee}</p>
            <p>{cup.brewedCup.brew.waterAmount}</p>
            <p>{cup.brewedCup.brew.rating}</p>
            <p>{cup.brewedCup.setup.dateOfBrew}</p>
            <button onClick={() => navigate(`/cups/${index}`)}>
              More Info
            </button>
            <button>Delete Brewer</button>
          </>
        ))}
      </div>
      <div className="add-new">
        <button onClick={() => navigate("/addnewbrew")}>Add New Brew</button>
      </div>
    </div>
  );
};

export default SavedCups;
