import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SavedCups from "./savedItems/SavedCups";
import blkandbold from "../assets/blkandbold.png";
import driftaway from "../assets/driftaway.jpeg";
import nostalgia from "../assets/nostalgia.png";

const Homepage = () => {
  const navigate = useNavigate();
  const cups = useSelector((state) => state.brewedCupReducer.pastBrews);
  return (
    <div>
      <div className="top-nav">
        <label htmlFor="add">Add New:</label>
        <select
          name="add"
          id=""
          onChange={(e) => {
            window.location.href = e.target.value;
          }}
        >
          <option>Add</option>
          <option value="/addnewbrew"> New Brew</option>
          <option value="/addnewcoffee">New Coffee</option>
          <option value="/addnewbrewer">New Brewer</option>
          <option value="/addnewgrinder">New Grinder</option>
        </select>
      </div>
      <div className="brewHistory">
        <h1>Most Recent Brews</h1>
        {cups
          .filter((cup, index) => index < 5)
          .map((cup) => (
            <>
              <p>{cup.brewedCup.setup.brewer}</p>
              <p>{cup.brewedCup.setup.coffee}</p>
              <p>{cup.brewedCup.brew.waterAmount}</p>
              <p>{cup.brewedCup.brew.rating}</p>
              <p>{cup.brewedCup.setup.dateOfBrew}</p>
              <button onClick={() => navigate("/", (cup = { cup }))}>
                More Info
              </button>
            </>
          ))}
      </div>
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
      <div className="coffeeOfTheMonth">
        <h1>Coffees of the Month</h1>
        <a href="https://blkandbold.com/">
          <img src={blkandbold} alt="" />
        </a>
        <img src={driftaway} alt="" />
        <img src={nostalgia} alt="" />
      </div>
    </div>
  );
};

export default Homepage;
