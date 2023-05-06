import { takeLatest, takeEvery } from "@redux-saga/core/effects";
import { exchangeCoinSaga, exchangeHistorySaga, SET_BALANCES, SET_HISTORY } from "./balanceModules";

export function* rootSaga(): Generator<any, any, any> {
  yield takeEvery(SET_BALANCES, exchangeCoinSaga);
  yield takeEvery(SET_HISTORY, exchangeHistorySaga);
}