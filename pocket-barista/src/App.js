import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AddNewCup from "./components/addNew/AddNewCup";
import Data from "./components/data/Data";
import SavedCoffee from "./components/savedItems/SavedCoffees";
import SavedGrinders from "./components/savedItems/SavedGrinders";
import SavedBrewers from "./components/savedItems/SavedBrewers";
import AeropressBrewGuide from "./components/brewGuides/AeropressBrewGuide";
import ChemexBrewGuide from "./components/brewGuides/ChemexBrewGuide";
import ColdBrewBrewGuide from "./components/brewGuides/ColdBrewBrewGuide";
import EspressoBrewGuide from "./components/brewGuides/EspressoBrewGuide";
import FellowStaggBrewGuide from "./components/brewGuides/FellowStaggBrewGuide";
import FrenchPressBrewGuide from "./components/brewGuides/FrenchPressBrewGuide";
import MokaPotBrewGuide from "./components/brewGuides/MokaPotBrewGuide";
import V60BrewGuide from "./components/brewGuides/V60BrewGuide";
import BrewGuideMain from "./components/BrewGuideMain";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/brewoptions" element={<AddNewCup />}></Route>
          <Route path="/data" element={<Data />}></Route>
          <Route path="/coffee" element={<SavedCoffee />}></Route>
          <Route path="/grinders" element={<SavedGrinders />}></Route>
          <Route path="/brewers" element={<SavedBrewers />}></Route>
          <Route
            path="/aeropressguide"
            element={<AeropressBrewGuide />}
          ></Route>
          <Route path="/chemexguide" element={<ChemexBrewGuide />}></Route>
          <Route path="/coldbrewguide" element={<ColdBrewBrewGuide />}></Route>
          <Route path="/espressoguide" element={<EspressoBrewGuide />}></Route>
          <Route path="/staggguide" element={<FellowStaggBrewGuide />}></Route>
          <Route
            path="/frenchpressguide"
            element={<FrenchPressBrewGuide />}
          ></Route>
          <Route path="/mokapotguide" element={<MokaPotBrewGuide />}></Route>
          <Route path="/v60guide" element={<V60BrewGuide />}></Route>
          <Route path="/brewguides" element={<BrewGuideMain />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
