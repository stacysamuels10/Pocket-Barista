import React from "react";
import { useNavigate } from "react-router-dom";

const EspressoBrewGuide = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="top-title">
        <button onClick={() => navigate("/")}>Home</button>
        <h1>Espresso</h1>
      </div>
      <div className="brew-guide-title">
        <h4>Brew Guide</h4>
        <h3>Espresso</h3>
        <p>Wonderful coffee, fast, using a semi-automatic espresso machine.</p>
      </div>
      <div className="grind-type">
        <h4>Grind size</h4>
        <h3>Fine</h3>
        <p>Similar to sugar.</p>
      </div>
      <div className="equipment">
        <h4>Equipment</h4>
        <h3>Espresso Machine</h3>
        <h3>Tamper</h3>
      </div>
      <div className="method">
        <h4>Method</h4>
        <div className="step 1">
          <p>Grind Coffee</p>
          <p>Grind 19g of coffee.</p>
        </div>
        <div className="step 2">
          <p>Pour Coffee</p>
          <p>Pour the coffee into the portafilter.</p>
        </div>
        <div className="step 3">
          <p>Distribute</p>
          <p>
            Put your finger flat on the portafilter and rotate until the coffee
            is equally spread out. Do this lightly without adding pressure.
          </p>
        </div>
        <div className="step 4">
          <p>Tamp</p>
          <p>
            Place the tamper into the portafilter, mae sure it is even, and
            apply pressure. Apply until you feel resistance.
          </p>
        </div>
        <div className="step 5">
          <p>Insert</p>
          <p>
            Insert your portafilter into the espresso machine and make sure its
            in securely.
          </p>
        </div>
        <div className="step 6">
          <p>Brew</p>
          <p>
            Place your cup under the brew head and push the single or double
            button on your machine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EspressoBrewGuide;
