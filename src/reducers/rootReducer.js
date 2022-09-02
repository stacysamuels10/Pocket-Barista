import { combineReducers } from "redux";
import grinderReducer from "./grinderReducer";
import brewedCupReducer from "./brewedCupReducer";
import brewerReducer from "./brewerReducer";
import coffeeReducer from "./coffeeReducer";

const rootReducer = combineReducers({
  grinderReducer: grinderReducer,
  brewedCupReducer: brewedCupReducer,
  brewerReducer: brewerReducer,
  coffeeReducer: coffeeReducer,
});

export default rootReducer;
