import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  NewCoffeeState,
  setName,
  setRoaster,
  setOrigin,
  setCoffeeRating,
  setBeanType,
  setRoastLevel,
  setBeanProcess,
  setBagAmount,
  setRoastDate,
  setBagNotes,
} from "../../actions/addNewCoffeeFunctions";

const AddNewCoffee = () => {
  const dispatch = useDispatch();
  const bagOfCoffee = useSelector((state) => state.coffeeReducer.bagOfCoffee);
  return (
    <div>
      <div className="title">
        <h1>Add a New Bag of Coffee</h1>
        <button onClick={() => NewCoffeeState(dispatch, bagOfCoffee)}>
          Save
        </button>
        <div className="about">
          <h3>About</h3>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => setName(dispatch, e.target.value)}
          />
          <label htmlFor="roaster">Roaster:</label>
          <input
            type="text"
            name="roaster"
            placeholder="Roaster"
            onChange={(e) => setRoaster(dispatch, e.target.value)}
          />
          <label htmlFor="origin">Origin:</label>
          <input
            type="text"
            name="origin"
            placeholder="Origin"
            onChange={(e) => setOrigin(dispatch, e.target.value)}
          />
          <label htmlFor="rating">Rating:</label>
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            onChange={(e) => setCoffeeRating(dispatch, e.target.value)}
          />
        </div>
        <div className="details">
          <h3>Details</h3>
          <label htmlFor="beantype">Coffee Type:</label>
          <input
            type="text"
            name="beantype"
            onChange={(e) => setBeanType(dispatch, e.target.value)}
          />
          <label htmlFor="roastlevel">Roast Type:</label>
          <input
            type="text"
            name="roastlevel"
            onChange={(e) => setRoastLevel(dispatch, e.target.value)}
          />
          <label htmlFor="beanprocess">Process:</label>
          <input
            type="text"
            name="beanprocess"
            onChange={(e) => setBeanProcess(dispatch, e.target.value)}
          />
          <label htmlFor="bagamount">Amount(oz):</label>
          <input
            type="text"
            name="bagamount"
            placeholder="Amount (oz)"
            onChange={(e) => setBagAmount(dispatch, e.target.value)}
          />
          <label htmlFor="roastdate">Roast Date</label>
          <input
            type="date"
            name="roastdate"
            id="roastdate"
            onChange={(e) => setRoastDate(dispatch, e.target.value)}
          />
        </div>
        <div className="notes">
          <label htmlFor="notes"></label>
          <textarea
            name="notes"
            id=""
            cols="30"
            rows="8"
            onChange={(e) => setBagNotes(dispatch, e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AddNewCoffee;
