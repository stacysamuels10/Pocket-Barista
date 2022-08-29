import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Homepage = () => {
  const navigate = useNavigate;
  return (
    <div>
      Homepage
      <React.Fragment>
        <div className="brewHistory"></div>
        <div className="brewGuides">
          <h1>Brew Guides</h1>
          <button>Brew Guides</button>
        </div>
        <div className="brewTypes"></div>
        <NavBar />
      </React.Fragment>
    </div>
  );
};

export default Homepage;
