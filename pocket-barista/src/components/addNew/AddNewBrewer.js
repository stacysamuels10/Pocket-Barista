import React from "react";

const AddNewBrewer = () => {
  return (
    <div>
      <div className="title">
        <h1>Add New Brewer</h1>
        <button>Save</button>
      </div>
      <div className="brewer">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" placeholder="Name" />
        <label htmlFor="brand">Brand:</label>
        <input type="text" name="brand" placeholder="Brand" />
        <label htmlFor="type">Type:</label>
        <input type="text" name="type" />
      </div>
    </div>
  );
};

export default AddNewBrewer;
