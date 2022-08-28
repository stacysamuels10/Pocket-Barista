import React from "react";

const FrenchPressBrewGuide = () => {
  return (
    <div>
      <div className="top-title">
        <button>Home</button>
        <h1>French Press</h1>
      </div>
      <div className="brew-guide-title">
        <h4>Brew Guide</h4>
        <h3>French Press</h3>
        <p>Lovely immersion brewing.</p>
      </div>
      <div className="grind-type">
        <h4>Grind size</h4>
        <h3>Coarse</h3>
        <p>Like sand.</p>
      </div>
      <div className="equipment">
        <h4>Equipment</h4>
        <h3>French Press</h3>
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
          <p>Pour Coffee</p>
          <p>Pour 16g of cofee into the brewer.</p>
        </div>
        <div className="step 4">
          <p>Pour Water</p>
          <p>Pour 200g of water into the brewer in a spiral motion.</p>
        </div>
        <div className="step 5">
          <p>Wait</p>
          <p>Wait for 30 seconds.</p>
        </div>
        <div className="step 6">
          <p>Stir</p>
          <p>Gently stir with a spoon. A couple quick twirls should do it.</p>
        </div>
        <div className="step 7">
          <p>Plunge</p>
          <p>
            Gently and evenly push down the plunger to just to the top of your
            coffee grounds.
          </p>
        </div>
        <div className="step 8">
          <p>Serve</p>
          <p>Serve your coffee and enjoy!</p>
        </div>
      </div>
    </div>
  );
};

export default FrenchPressBrewGuide;
