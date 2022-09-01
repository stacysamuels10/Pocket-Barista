import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import {
  NewBrewState,
  setCoffee,
  setGrinder,
  setBrewer,
  setDate,
  setGroundsAmount,
  setGrindSetting,
  setWaterAmount,
  setWaterTemperature,
  setBrewTime,
  setRating,
  setNotes,
} from "../../actions/addNewCupFunctions";

const handleClick = (dispatch, brewedCup, navigate) => {
  NewBrewState(dispatch, brewedCup);
  navigate("/");
};

const AddNewCup = () => {
  const setStar = (e, newValue) => {
    setValue(newValue);
    setRating(dispatch, e.target.value);
  };
  const [dayValue, setDayValue] = React.useState(dayjs("2022-09-01T21:11:54"));
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const coffee = useSelector((state) => state.coffeeReducer.pastCoffeeBags);
  const grinders = useSelector((state) => state.grinderReducer.grinderPantry);
  const brewers = useSelector((state) => state.brewerReducer.brewerPantry);
  const brewedCup = useSelector((state) => state.brewedCupReducer.brewedCup);
  return (
    <div>
      <div className="title">
        <h1>Record a Brew</h1>
        <Button onClick={() => handleClick(dispatch, brewedCup, navigate)}>
          Save
        </Button>
      </div>
      <div className="setup">
        <h3>The Setup:</h3>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Coffee</InputLabel>
          <Select
            name="select-coffee"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Coffee"
            onChange={(e) => setCoffee(dispatch, e.target.value)}
          >
            {coffee.map((bag) => (
              <MenuItem value={bag.bagOfCoffee.about.name}>
                {bag.bagOfCoffee.about.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Link to="/addnewcoffee" name="newcoffee">
          Add New Coffee
        </Link>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Grinder</InputLabel>
          <Select
            name="select-grinder"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Grinder"
            onChange={(e) => setGrinder(dispatch, e.target.value)}
          >
            {grinders.map((grinder) => (
              <MenuItem value={grinder.grinder.name}>
                {grinder.grinder.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Link to="/addnewgrinder" name="grinder">
          Add New Grinder
        </Link>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Brewer</InputLabel>
          <Select
            name="select-brewer"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Brewer"
            onChange={(e) => setBrewer(dispatch, e.target.value)}
          >
            {brewers.map((brewer) => (
              <MenuItem value={brewer.brewer.name}>
                {brewer.brewer.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Link to="/addnewbrewer" name="brewer">
          Add New Brewer
        </Link>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Brew Date"
            value={dayValue}
            inputFormat="MM/DD/YYYY"
            onChange={(selectedDate) => {
              setDayValue(selectedDate);
              const formattedDate = String(selectedDate.$d).slice(0, 15);
              setDate(dispatch, formattedDate);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <div className="brew">
        <h3>The Brew:</h3>
        <TextField
          id="filled-basic"
          label="Coffee (g)"
          variant="filled"
          onChange={(e) => setGroundsAmount(dispatch, e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Grind setting"
          variant="filled"
          onChange={(e) => setGrindSetting(dispatch, e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Water (g)"
          variant="filled"
          onChange={(e) => setWaterAmount(dispatch, e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Temperature (°F)"
          variant="filled"
          onChange={(e) => setWaterTemperature(dispatch, e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Brew Time (s)"
          variant="filled"
          onChange={(e) => setBrewTime(dispatch, e.target.value)}
        />
        <Rating
          name="simple-controlled"
          value={value}
          size="large"
          onChange={(e, newValue) => setStar(e, newValue)}
        />
      </div>
      <div className="notes">
        <TextField
          id="outlined-textarea"
          label="Notes"
          placeholder="Notes"
          multiline
          onChange={(e) => setNotes(dispatch, e.target.value)}
        />
      </div>
    </div>
  );
};

export default AddNewCup;
