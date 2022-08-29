import React from "react";
import { useNavigate } from "react-router-dom";

const V60BrewGuide = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="top-title">
        <button onClick={() => navigate("/")}>Home</button>
        <h1>V60</h1>
      </div>
      <div className="brew-guide-title">
        <h4>Brew Guide</h4>
        <h3>V60</h3>
        <p>The particular pour over.</p>
      </div>
      <div className="grind-type">
        <h4>Grind size</h4>
        <h3>Medium</h3>
        <p>Similar to table salt.</p>
      </div>
      <div className="equipment">
        <h4>Equipment</h4>
        <h3>V60</h3>
        <h3>Filter Paper</h3>
        <h3>Kettle</h3>
      </div>
      <div className="method">
        <h4>Method</h4>
        <div className="step 1">
          <p>Grind Coffee</p>
          <p>Grind 13g of coffee.</p>
        </div>
        <div className="step 2">
          <p>Fold Paper</p>
          <p>
            Fold the filter paper along the line before putting it into the
            brewer.
          </p>
        </div>
        <div className="step 3">
          <p>Heat Water</p>
          <p>Heat the water to 205 F.</p>
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
          <p>Pour 13g of coffee into the brewer.</p>
        </div>
        <div className="step 6">
          <p>Pour Water</p>
          <p>
            Pour 40g of water into the brewer in a spiral motion from the
            outside to the center.
          </p>
        </div>
        <div className="step 7">
          <p>Bloom</p>
          <p>Allow the coffee to bloom for 40 seconds.</p>
        </div>
        <div className="step 8">
          <p>Pour Water</p>
          <p>
            Pour 40 grams of water into the brewer in a spiral motion and wait
            for it all to drip through.
          </p>
        </div>
        <div className="step 9">
          <p>Pour Water</p>
          <p>
            Pour 70 grams of water into the brewer in a spiral motion and wait
            for it all to drip through.
          </p>
        </div>
        <div className="step 10">
          <p>Wait</p>
          <p>Wait for about 3 minutes for the water to drain through.</p>
        </div>
        <div className="step 11">
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

export default V60BrewGuide;
