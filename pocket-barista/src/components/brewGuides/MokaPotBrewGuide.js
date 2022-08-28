import React from "react";

const MokaPotBrewGuide = () => {
  return (
    <div>
      <div className="top-title">
        <button>Home</button>
        <h1>Moka Pot</h1>
      </div>
      <div className="brew-guide-title">
        <h4>Brew Guide</h4>
        <h3>Moka Pot</h3>
        <p>The Italian way.</p>
      </div>
      <div className="grind-type">
        <h4>Grind size</h4>
        <h3>Medium</h3>
        <p>Similar to table salt.</p>
      </div>
      <div className="equipment">
        <h4>Equipment</h4>
        <h3>Moka Pot</h3>
        <h3>Kettle</h3>
        <h3>Cold towel</h3>
      </div>
      <div className="method">
        <h4>Method</h4>
        <div className="step 1">
          <p>Heat Water</p>
          <p>Heat water to boiling and remove from heat.</p>
        </div>
        <div className="step 2">
          <p>Grind Coffee</p>
          <p>Grind 16g of coffee.</p>
        </div>
        <div className="step 3">
          <p>Prepare Pot</p>
          <p>
            Add the heated water and fill to the line in the bottom of the
            brewer.
          </p>
        </div>
        <div className="step 4">
          <p>Insert Filter</p>
          <p>Insert the filter basket into the brewer bottom.</p>
        </div>
        <div className="step 5">
          <p>Pour Coffee</p>
          <p>
            Fill the filter basket with coffee, slightly mounded and level off
            with your finger.
          </p>
        </div>
        <div className="step 6">
          <p>Screw Moka Pot</p>
          <p>
            Screw the top and bottom together carefully. Use hot pads and don't
            over tighten.
          </p>
        </div>
        <div className="step 7">
          <p>Heat Pot</p>
          <p>
            Put the brewer on the stove, use medium heat and make sure that the
            handle is not subjected to direct heat. Leave the top lid open.
          </p>
        </div>
        <div className="step 8">
          <p>Wait</p>
          <p>
            The coffee will begin to come out and you will hear a puffing round
            and see a rich-brown steam. Once steam is color of yellow honey,
            remove from heat source with hot pads and close the lid.
          </p>
        </div>
        <div className="step 9">
          <p>Stop Brew</p>
          <p>
            Wrap the bottom of the pot in a cold towel or run under cold tap
            water to stop extraction.
          </p>
        </div>
        <div className="step 10">
          <p>Serve</p>
          <p>Pour into cups and serve your coffee. Enjoy!</p>
        </div>
      </div>
    </div>
  );
};

export default MokaPotBrewGuide;
