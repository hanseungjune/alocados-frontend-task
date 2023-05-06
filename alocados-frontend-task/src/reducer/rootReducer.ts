// rootReducer.js
import { combineReducers } from "redux";
import balancesReducer from "./balanceModules";

const rootReducer = combineReducers({
  balancesReducer,
});

export default rootReducer;