import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  NewGrinderState,
  setGrinderName,
  setGrinderBrand,
} from "../../actions/addNewGrinderFunctions";
import { useNavigate } from "react-router-dom";

const handleClick = (dispatch, grinder, navigate) => {
  NewGrinderState(dispatch, grinder);
  navigate("/");
};

const AddNewGrinder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const grinder = useSelector((state) => state.grinderReducer.grinder);
  return (
    <div>
      <div className="title">
        <h1>Add a Grinder</h1>
        <Button onClick={() => handleClick(dispatch, grinder, navigate)}>
          Save
        </Button>
      </div>
      <div className="form">
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          onChange={(e) => setGrinderName(dispatch, e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Brand"
          variant="filled"
          onChange={(e) => setGrinderBrand(dispatch, e.target.value)}
        />
      </div>
    </div>
  );
};

export default AddNewGrinder;
