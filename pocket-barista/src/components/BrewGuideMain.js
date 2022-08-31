import React from "react";
import { useNavigate } from "react-router-dom";

const BrewGuideMain = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/aeropressguide")}>
        Aeropress. Espresso style on the go.
      </button>
      <button onClick={() => navigate("/chemexguide")}>
        Chemex. A classic way to brew.
      </button>
      <button onClick={() => navigate("/coldbrewguide")}>
        Cold Brew. A warm weather favorite.
      </button>
      <button onClick={() => navigate("/espressoguide")}>
        Espresso. Fast and simple.
      </button>
      <button onClick={() => navigate("/staggguide")}>
        Fellow Stagg Pour Over. A modern twist on the classic.
      </button>
      <button onClick={() => navigate("/frenchpressguide")}>
        French Press. Lovely immersion brewing.
      </button>
      <button onClick={() => navigate("/mokapotguide")}>
        Moka Pot. The Italian way.
      </button>
      <button onClick={() => navigate("/v60guide")}>
        V60 Pour Over. The particular pour over.
      </button>
    </div>
  );
};

export default BrewGuideMain;
