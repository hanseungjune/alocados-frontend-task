// rootReducer.js
import { combineReducers } from "redux";
import balancesReducer from "./balanceModules";

export const rootReducer = combineReducers({
  balancesReducer,
});

export default rootReducer;