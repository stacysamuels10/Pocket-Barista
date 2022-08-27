import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import BrewOptions from "./components/addCup/BrewOptions";
import Data from "./components/data/Data";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/brewoptions" element={<BrewOptions />}></Route>
          <Route path="/data" element={<Data />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
