import { combineReducers } from "redux";
import balancesReducer from "./balanceModules";

// 모든 리듀서 합쳐서 useSelector에 나오게 하기
export const rootReducer = combineReducers({
  balancesReducer,
});

export default rootReducer;