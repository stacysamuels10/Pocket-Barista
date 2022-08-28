import React from "react";

const FellowStaggBrewGuide = () => {
  return (
    <div>
      <div className="top-title">
        <button>Home</button>
        <h1>Stagg Brewer</h1>
      </div>
      <div className="brew-guide-title">
        <h4>Brew Guide</h4>
        <h3>Stagg Brewer</h3>
        <p>A modern twist on the classic filter</p>
      </div>
      <div className="grind-type">
        <h4>Grind size</h4>
        <h3>Medium-Fine</h3>
        <p>Similar to table salt or just slightly smaller.</p>
      </div>
      <div className="equipment">
        <h4>Equipment</h4>
        <h3>Stagg X Filter</h3>
        <h3>Stagg X Filter Paper</h3>
        <h3>Kettle</h3>
      </div>
      <div className="method">
        <h4>Method</h4>
        <div className="step 1">
          <p>Grind Coffee</p>
          <p>Grind 20g of coffee.</p>
        </div>
        <div className="step 2">
          <p>Heat Water</p>
          <p>Heat the water to 205 F.</p>
        </div>
        <div className="step 3">
          <p>Rinse Filter</p>
          <p>
            Pour a little water through the paper to rinse the paper and warm
            the brewer, then pour this water out.
          </p>
        </div>
        <div className="step 4">
          <p>Pour Coffee</p>
          <p>Pour 20g of coffee into the brewer.</p>
        </div>
        <div className="step 5">
          <p>Pour Water</p>
          <p>Pour 40g of water into the brewer in a spiral motion.</p>
        </div>
        <div className="step 6">
          <p>Bloom</p>
          <p>Allow the coffee to bloom for 45 seconds.</p>
        </div>
        <div className="step 7">
          <p>Pour Water</p>
          <p>
            Gently pour 110 grams of water into the brewer in a spiral motion.
          </p>
        </div>
        <div className="step 8">
          <p>Wait</p>
          <p>
            Wait for about 40 seconds for more of the water to drain through.
          </p>
        </div>
        <div className="step 9">
          <p>Pour Water</p>
          <p>
            Gently pour 150 grams of water into the brewer in a spiral motion.
          </p>
        </div>
        <div className="step 10">
          <p>Wait</p>
          <p>Wait for the rest of the water to drain through.</p>
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

export default FellowStaggBrewGuide;
