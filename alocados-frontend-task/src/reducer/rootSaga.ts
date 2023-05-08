import { takeEvery } from "@redux-saga/core/effects";
import { exchangeCoinSaga, SET_BALANCES } from "./balanceModules";

export function* rootSaga(): Generator<any, any, any> {
  yield takeEvery(SET_BALANCES, exchangeCoinSaga);
}