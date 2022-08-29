import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      Homepage
      <div className="brewHistory"></div>
      <div className="brewGuides">
        <h1>Brew Guides</h1>
        <button onClick={() => navigate("/aeropressguide")}>Aeropress</button>
        <button onClick={() => navigate("/chemexguide")}>Chemex</button>
        <button onClick={() => navigate("/coldbrewguide")}>Cold Brew</button>
        <button onClick={() => navigate("/espressoguide")}>Espresso</button>
        <button onClick={() => navigate("/staggguide")}>
          Fellow Stagg Pour Over
        </button>
        <button onClick={() => navigate("/frenchpressguide")}>
          French Press
        </button>
        <button onClick={() => navigate("/mokapotguide")}>Moka Pot</button>
        <button onClick={() => navigate("/v60guide")}>V60 Pour Over</button>
      </div>
      <div className="brewTypes"></div>
      <NavBar />
    </div>
  );
};

export default Homepage;
