import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  NewBrewerState,
  setBrewerName,
  setBrewerBrand,
  setBrewerType,
} from "../../actions/addNewBrewerFunctions";

const AddNewBrewer = () => {
  const dispatch = useDispatch();
  const brewer = useSelector((state) => state.brewerReducer.brewer);
  return (
    <div>
      <div className="title">
        <h1>Add New Brewer</h1>
        <button onClick={() => NewBrewerState(dispatch, brewer)}>Save</button>
      </div>
      <div className="brewer">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => setBrewerName(dispatch, e.target.value)}
        />
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          onChange={(e) => setBrewerBrand(dispatch, e.target.value)}
        />
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          name="type"
          onChange={(e) => setBrewerType(dispatch, e.target.value)}
        />
      </div>
    </div>
  );
};

export default AddNewBrewer;
