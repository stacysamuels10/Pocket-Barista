import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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

const AddNewCup = () => {
  const dispatch = useDispatch();
  const coffee = useSelector((state) => state.coffeeReducer.pastCoffeeBags);
  const grinders = useSelector((state) => state.grinderReducer.grinderPantry);
  const brewers = useSelector((state) => state.brewerReducer.brewerPantry);
  const brewedCup = useSelector((state) => state.brewedCupReducer.brewedCup);
  return (
    <div>
      <div className="title">
        <h1>Record a Brew</h1>
        <button onClick={() => NewBrewState(dispatch, brewedCup)}>Save</button>
      </div>
      <div className="setup">
        <h3>The Setup:</h3>
        <label htmlFor="coffee">Coffee: </label>
        <select
          name="coffee"
          id=""
          onChange={(e) => setCoffee(dispatch, e.target.value)}
        >
          <option value="Select-coffee">Select Coffee</option>
          {coffee.map((bag) => (
            <option value={bag.bagOfCoffee.about.name}>
              {bag.bagOfCoffee.about.name}
            </option>
          ))}
        </select>
        <Link to="/addnewcoffee" name="newcoffee">
          Add New Coffee
        </Link>
        <label htmlFor="grinder">Grinder: </label>
        <select
          name="grinder"
          id=""
          onChange={(e) => setGrinder(dispatch, e.target.value)}
        >
          <option value="Select-grinder">Select Grinder</option>
          {grinders.map((grinder) => (
            <option value={grinder.grinder.name}>{grinder.grinder.name}</option>
          ))}
        </select>
        <Link to="/addnewgrinder" name="grinder">
          Add New Grinder
        </Link>
        <label htmlFor="brewer">Brewer: </label>
        <select
          name="brewer"
          id=""
          onChange={(e) => setBrewer(dispatch, e.target.value)}
        >
          <option value="Select-brewer">Select Brewer</option>
          {brewers.map((brewer) => (
            <option value={brewer.brewer.name}>{brewer.brewer.name}</option>
          ))}
        </select>
        <Link to="/addnewbrewer" name="brewer">
          Add New Brewer
        </Link>
        <label htmlFor="date">Date Of Brew:</label>
        <input
          type="date"
          name="date"
          id=""
          onChange={(e) => setDate(dispatch, e.target.value)}
        />
      </div>
      <div className="brew">
        <h3>The Brew:</h3>
        <label htmlFor="groundsAmount">Coffee (g)</label>
        <input
          type="text"
          name="groundsAmount"
          id=""
          placeholder="Grounds (g)"
          onChange={(e) => setGroundsAmount(dispatch, e.target.value)}
        />
        <label htmlFor="grindSetting">Grind setting</label>
        <input
          type="text"
          name="grindSetting"
          id=""
          placeholder="Grind setting"
          onChange={(e) => setGrindSetting(dispatch, e.target.value)}
        />
        <label htmlFor="waterAmount">Water (g)</label>
        <input
          type="text"
          name="waterAmount"
          id=""
          placeholder="Water (g)"
          onChange={(e) => setWaterAmount(dispatch, e.target.value)}
        />
        <label htmlFor="waterTemperature">Temperature (°F)</label>
        <input
          type="text"
          name="waterTemperature"
          id=""
          placeholder="Temperature (°F)"
          onChange={(e) => setWaterTemperature(dispatch, e.target.value)}
        />
        <label htmlFor="brewTime">Brew Time (s)</label>
        <input
          type="text"
          name="brewTime"
          id=""
          placeholder="Brew Time (s)"
          onChange={(e) => setBrewTime(dispatch, e.target.value)}
        />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          name="rating"
          id=""
          min="1"
          max="5"
          onChange={(e) => setRating(dispatch, e.target.value)}
        />
      </div>
      <div className="notes">
        <label htmlFor="notes">Notes</label>
        <textarea
          name="notes"
          id=""
          cols="30"
          rows="5"
          onChange={(e) => setNotes(dispatch, e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default AddNewCup;
