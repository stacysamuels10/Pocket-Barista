import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SavedBrewers = () => {
  const navigate = useNavigate();
  const brewers = useSelector((state) => state.brewerReducer.brewerPantry);
  return (
    <div>
      <div className="past-brewers">
        {brewers.map((brewer) => (
          <>
            <p>{brewer.brewer.name}</p>
            <p>{brewer.brewer.brand}</p>
            <p>{brewer.brewer.type}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default SavedBrewers;
