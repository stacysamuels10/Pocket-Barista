import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  NewGrinderState,
  setGrinderName,
  setGrinderBrand,
} from "../../actions/addNewGrinderFunctions";

const AddNewGrinder = () => {
  const dispatch = useDispatch();
  const grinder = useSelector((state) => state.grinderReducer.grinder);
  return (
    <div>
      <div className="title">
        <h1>Add a Grinder</h1>
        <button onClick={() => NewGrinderState(dispatch, grinder)}>Save</button>
      </div>
      <div className="form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setGrinderName(dispatch, e.target.value)}
        />
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          name="brand"
          placeholder="brand"
          onChange={(e) => setGrinderBrand(dispatch, e.target.value)}
        />
      </div>
    </div>
  );
};

export default AddNewGrinder;
