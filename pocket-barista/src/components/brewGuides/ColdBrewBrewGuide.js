import React from "react";

const ColdBrewBrewGuide = () => {
  return (
    <div>
      <div className="top-title">
        <button>Home</button>
        <h1>Cold Brew</h1>
      </div>
      <div className="brew-guide-title">
        <h4>Brew Guide</h4>
        <h3>Cold Brew Concentrate</h3>
        <p>A warm weather favorite.</p>
      </div>
      <div className="grind-type">
        <h4>Grind size</h4>
        <h3>Smaller</h3>
        <p>Slightly finer than table salt.</p>
      </div>
      <div className="equipment">
        <h4>Equipment</h4>
        <h3>Large jug or jar</h3>
        <h3>Preferred filter --V60 or Stagg XF work well here</h3>
        <h3>Filter Paper</h3>
        <h3>Kettle</h3>
      </div>
      <div className="method">
        <h4>Method</h4>
        <div className="step 1">
          <p>Grind Coffee</p>
          <p>Grind 200g of coffee and place in your jug or jar.</p>
        </div>
        <div className="step 2">
          <p>Add Water</p>
          <p>Add 1L of cold water to the coffee.</p>
        </div>
        <div className="step 3">
          <p>Mix</p>
          <p>
            Mix with a spoon to break up any large chunks of coffee and ensure
            all grounds are soaked.
          </p>
        </div>
        <div className="step 4">
          <p>Cover and Wait</p>
          <p>Cover your jug and let sit at room temperature for 16-24 hours.</p>
        </div>
        <div className="step 5">
          <p>Strain Coffee</p>
          <p>Pour mixture through a filter. </p>
        </div>
        <div className="step 6">
          <p>Enjoy!</p>
          <p>
            Grab a glass, add some ice, and mix 1/3 of the cold brew concentrate
            with 2/3 ratio water.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColdBrewBrewGuide;
