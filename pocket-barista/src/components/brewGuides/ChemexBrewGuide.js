import React from "react";
import { useNavigate } from "react-router-dom";

const ChemexBrewGuide = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="top-title">
        <button onClick={() => navigate("/")}>Home</button>
        <h1>Chemex</h1>
      </div>
      <div className="brew-guide-title">
        <h4>Brew Guide</h4>
        <h3>Chemex</h3>
        <p>A classic way to brew.</p>
      </div>
      <div className="grind-type">
        <h4>Grind size</h4>
        <h3>Medium</h3>
        <p>Similar to table salt</p>
      </div>
      <div className="equipment">
        <h4>Equipment</h4>
        <h3>Chemex</h3>
        <h3>Filter Paper</h3>
        <h3>Kettle</h3>
      </div>
      <div className="method">
        <h4>Method</h4>
        <div className="step 1">
          <p>Grind Coffee</p>
          <p>Grind 30g of coffee.</p>
        </div>
        <div className="step 2">
          <p>Heat Water</p>
          <p>Heat the water to 200 F.</p>
        </div>
        <div className="step 3">
          <p>Prepare Filter</p>
          <p>
            Open up the filter and place it in the brewer. The three layer side
            should be against the spout.
          </p>
        </div>
        <div className="step 4">
          <p>Rinse Filter</p>
          <p>
            Pour a little water through the paper to rinse the paper and warm
            the brewer, then pour this water out.
          </p>
        </div>
        <div className="step 5">
          <p>Pour Coffee</p>
          <p>Pour 30g of coffee into the brewer.</p>
        </div>
        <div className="step 6">
          <p>Pour Water</p>
          <p>Pour 60g of water into the brewer in a spiral motion.</p>
        </div>
        <div className="step 7">
          <p>Bloom</p>
          <p>Allow the coffee to bloom for 30 seconds.</p>
        </div>
        <div className="step 8">
          <p>Pour Water</p>
          <p>
            Gently pour the rest of the water into the brewer in a spiral
            motion.
          </p>
        </div>
        <div className="step 9">
          <p>Wait</p>
          <p>Wait for about 3 minutes for the water to drain through.</p>
        </div>
        <div className="step 10">
          <p>Serve</p>
          <p>
            Remove the filter paper from the brewer and serve your coffee.
            Enjoy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChemexBrewGuide;
