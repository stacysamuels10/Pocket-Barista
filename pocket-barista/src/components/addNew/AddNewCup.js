import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const AddNewCup = () => {
  const coffee = useSelector((state) => state.coffeeReducer.pastCoffeeBags);
  const grinders = useSelector((state) => state.grinderReducer.grinderPantry);
  const brewers = useSelector((state) => state.brewerReducer.brewerPantry);
  return (
    <div>
      <div className="title">
        <h1>Record a Brew</h1>
        <button>Save</button>
      </div>
      <div className="setup">
        <h3>The Setup:</h3>
        <label htmlFor="coffee">Coffee: </label>
        <select name="coffee" id="">
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
        <select name="grinder" id="">
          {grinders.map((grinder) => (
            <option value={grinder.grinder.name}>{grinder.grinder.name}</option>
          ))}
        </select>
        <Link to="/addnewgrinder" name="grinder">
          Add New Grinder
        </Link>
        <label htmlFor="brewer">Brewer: </label>
        <select name="brewer" id="">
          {brewers.map((brewer) => (
            <option value={brewer.brewer.name}>{brewer.brewer.name}</option>
          ))}
        </select>
        <Link to="/addnewbrewer" name="brewer">
          Add New Brewer
        </Link>
        <label htmlFor="date">Date Of Brew:</label>
        <input type="date" name="date" id="" />
      </div>
      <div className="brew">
        <h3>The Brew:</h3>
        <label htmlFor="groundsAmount">Coffee (g)</label>
        <input
          type="text"
          name="groundsAmount"
          id=""
          placeholder="Grounds (g)"
        />
        <label htmlFor="grindSetting">Grind setting</label>
        <input
          type="text"
          name="grindSetting"
          id=""
          placeholder="Grind setting"
        />
        <label htmlFor="waterAmount">Water (g)</label>
        <input type="text" name="waterAmount" id="" placeholder="Water (g)" />
        <label htmlFor="waterTemperature">Temperature (°F)</label>
        <input
          type="text"
          name="waterTemperature"
          id=""
          placeholder="Temperature (°F)"
        />
        <label htmlFor="brewTime">Brew Time (s)</label>
        <input type="text" name="brewTime" id="" placeholder="Brew Time (s)" />
        <label htmlFor="rating">Rating</label>
        <input type="number" name="rating" id="" min="1" max="5" />
      </div>
      <div className="notes">
        <label htmlFor="notes">Notes</label>
        <textarea name="notes" id="" cols="30" rows="5"></textarea>
      </div>
    </div>
  );
};

export default AddNewCup;
