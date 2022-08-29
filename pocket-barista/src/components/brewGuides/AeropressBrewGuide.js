import React from "react";
import { useNavigate } from "react-router-dom";

const AeropressBrewGuide = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="top-title">
        <button onClick={() => navigate("/")}>Home</button>
        <h1>Aeropress</h1>
      </div>
      <div className="brew-guide-title">
        <h4>Brew Guide</h4>
        <h3>Aeropress</h3>
        <p>Smooth, easy brews.</p>
      </div>
      <div className="grind-type">
        <h4>Grind size</h4>
        <h3>Medium</h3>
        <p>Similar to table salt.</p>
      </div>
      <div className="equipment">
        <h4>Equipment</h4>
        <h3>Aeropress</h3>
        <h3>Kettle</h3>
      </div>
      <div className="method">
        <h4>Method</h4>
        <div className="step 1">
          <p>Grind Coffee</p>
          <p>Grind 16g of coffee.</p>
        </div>
        <div className="step 2">
          <p>Heat Water</p>
          <p>Heat the water to 205 F.</p>
        </div>
        <div className="step 3">
          <p>Insert Plunger</p>
          <p>
            Insert the plunger into your Aeropress, until its on the four, and
            put it down, so the chamber is facing up.
          </p>
        </div>
        <div className="step 4">
          <p>Prepare Filter</p>
          <p>
            Prepare the filter and your cup by rinsing the paper with water.
          </p>
        </div>
        <div className="step 5">
          <p>Pour Coffee</p>
          <p>Pour 16g of coffee into the brewer.</p>
        </div>
        <div className="step 6">
          <p>Pour Water</p>
          <p>Pour until the coffee is covered.</p>
        </div>
        <div className="step 7">
          <p>Bloom</p>
          <p>Allow the coffee to bloom for 20 seconds.</p>
        </div>
        <div className="step 8">
          <p>Stir</p>
          <p>Gently stir with a spoon. A couple quick twirls should do it.</p>
        </div>
        <div className="step 9">
          <p>Pour Water</p>
          <p>Pour 120g of water into the brewer in a spiral motion.</p>
        </div>
        <div className="step 10">
          <p>Wait</p>
          <p>Wait for 210 seconds.</p>
        </div>
        <div className="step 11">
          <p>Flip</p>
          <p>
            Screw in the end cap with the filter paper inserted, place your cup
            on the end of the brewer and flip.
          </p>
        </div>
        <div className="step 12">
          <p>Plunge</p>
          <p>
            Plunge down with an even pressure, and stop when you hear a change
            in the sound, similar to a hiss.
          </p>
        </div>
        <div className="step 13">
          <p>Serve</p>
          <p>Serve your coffee and enjoy!</p>
        </div>
      </div>
    </div>
  );
};

export default AeropressBrewGuide;
