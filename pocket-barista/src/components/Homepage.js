import React from "react";
import NavBar from "./NavBar";

const Homepage = () => {
  return (
    <div>
      Homepage
      <React.Fragment>
        <NavBar />
        <div className="brewHistory"></div>
        <div className="brewGuides"></div>
        <div className="brewTypes"></div>
      </React.Fragment>
    </div>
  );
};

export default Homepage;
