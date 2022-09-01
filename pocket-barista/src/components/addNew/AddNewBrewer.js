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
import { useNavigate } from "react-router-dom";

const handleClick = (dispatch, brewer, navigate) => {
  NewBrewerState(dispatch, brewer);
  navigate("/");
};

const AddNewBrewer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const brewer = useSelector((state) => state.brewerReducer.brewer);
  return (
    <div>
      <div className="title">
        <h1>Add New Brewer</h1>
        <Button onClick={() => handleClick(dispatch, brewer, navigate)}>
          Save
        </Button>
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
