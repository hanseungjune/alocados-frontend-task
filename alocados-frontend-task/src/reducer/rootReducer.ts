// rootReducer.js
import { combineReducers } from "redux";
import balancesReducer from "./balancesmodules";

const rootReducer = combineReducers({
  balancesReducer,
});

export default rootReducer;