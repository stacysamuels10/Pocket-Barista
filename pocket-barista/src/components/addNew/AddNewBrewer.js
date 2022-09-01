import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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
        <Button onClick={() => NewBrewerState(dispatch, brewer)}>Save</Button>
      </div>
      <div className="brewer">
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          onChange={(e) => setBrewerName(dispatch, e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Brand"
          variant="filled"
          onChange={(e) => setBrewerBrand(dispatch, e.target.value)}
        />
        <label htmlFor="type">Type:</label>
        <TextField
          id="filled-basic"
          label="Type"
          variant="filled"
          onChange={(e) => setBrewerType(dispatch, e.target.value)}
        />
      </div>
    </div>
  );
};

export default AddNewBrewer;
