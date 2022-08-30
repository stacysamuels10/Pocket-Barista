import React from "react";

const AddNewGrinder = () => {
  return (
    <div>
      <div className="title">
        <h1>Add a Grinder</h1>
        <button>Save</button>
      </div>
      <div className="form">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" placeholder="name" />
        <label htmlFor="brand">Brand:</label>
        <input type="text" name="brand" placeholder="brand" />
      </div>
    </div>
  );
};

export default AddNewGrinder;
