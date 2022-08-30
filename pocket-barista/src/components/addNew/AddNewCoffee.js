import React from "react";

const AddNewCoffee = () => {
  return (
    <div>
      <div className="title">
        <h1>Add a New Bag of Coffee</h1>
        <button>Save</button>
        <div className="about">
          <h3>About</h3>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="Name" />
          <label htmlFor="roaster">Roaster:</label>
          <input type="text" name="roaster" placeholder="Roaster" />
          <label htmlFor="origin">Origin:</label>
          <input type="text" name="origin" placeholder="Origin" />
          <label htmlFor="rating">Rating:</label>
          <input type="text" name="rating" placeholder="Rating" />
        </div>
        <div className="details">
          <h3>Details</h3>
          <label htmlFor="beantype">Coffee Type:</label>
          <input type="text" name="beantype" />
          <label htmlFor="roastlevel">Roast Type:</label>
          <input type="text" name="roastlevel" />
          <label htmlFor="beanprocess">Process:</label>
          <input type="text" name="beanprocess" />
          <label htmlFor="bagamount">Amount(oz):</label>
          <input type="text" name="bagamount" placeholder="Amount (oz)" />
          <label htmlFor="roastdate">Roast Date</label>
          <input type="date" name="roastdate" id="roastdate" />
        </div>
        <div className="notes">
          <label htmlFor="notes"></label>
          <textarea name="notes" id="" cols="30" rows="8"></textarea>
        </div>
      </div>
    </div>
  );
};

export default AddNewCoffee;
