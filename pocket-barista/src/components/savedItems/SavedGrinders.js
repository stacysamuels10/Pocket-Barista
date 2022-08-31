import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SavedGrinders = () => {
  const navigate = useNavigate();
  const grinders = useSelector((state) => state.grinderReducer.grinderPantry);
  return (
    <div>
      <div className="past-grinders">
        {grinders.map((grinder) => (
          <>
            <p>{grinder.grinder.name}</p>
            <p>{grinder.grinder.brand}</p>
            <button>Delete Brewer</button>
          </>
        ))}
      </div>
      <div className="new-grinder">
        <button onClick={() => navigate("/addnewgrinder")}>
          Add New Grinder
        </button>
      </div>
    </div>
  );
};

export default SavedGrinders;
