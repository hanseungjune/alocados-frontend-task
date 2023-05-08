import { takeEvery } from "@redux-saga/core/effects";
import { exchangeCoinSaga, SET_BALANCES } from "./balanceModules";

// 해당 액션 이름을 통해서 생성된 함수 기반으로 해당 사가에서 로직 돌리기
export function* rootSaga(): Generator<any, any, any> {
  yield takeEvery(SET_BALANCES, exchangeCoinSaga);
}