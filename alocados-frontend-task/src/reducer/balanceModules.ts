import { put } from "@redux-saga/core/effects";

export const SET_BALANCES = "SET_BALANCES";
export const SET_BALANCES_SUCCESS = "SET_BALANCES_SUCCESS";
export const SET_BALANCES_FAILURE = "SET_BALANCES_FAILURE";
export const SET_HISTORY = "SET_HISTORY";
export const SET_HISTORY_SUCCESS = "SET_HISTORY_SUCCESS";
export const SET_HISTORY_FAILURE = "SET_HISTORY_FAILURE";

export const setBalances = (payload: any) => {
  return {
    type: SET_BALANCES,
    payload,
  };
};

export const setBalancesSuccess = (balances: any) => {
  return {
    type: SET_BALANCES_SUCCESS,
    payload: balances,
  };
};

export const setBalancesFailure = () => {
  return {
    type: SET_BALANCES_SUCCESS,
  };
};

export const setHistory = (payload: any) => {
  return {
    type: SET_HISTORY,
    payload,
  };
};

export const setHistorySuccess = (history: any) => {
  return {
    type: SET_HISTORY_SUCCESS,
    payload: history,
  };
};

export const setHistoryFailure = () => {
  return {
    type: SET_HISTORY_FAILURE,
  };
};

const initialState = {
  balances: {
    ETH: 2000,
    SOL: 0,
    BNB: 0,
  },
  historyArray: [],
  status: false
};

export interface todoProps {
  id: number;
}

export function* exchangeCoinSaga(action: any): Generator<any, any, any> {
  try {const { fromCoin, toCoin, fromValue } = action.payload
  const response = yield fetch('/api/exchange', {
    method: 'POST',
    body: JSON.stringify({ from: fromCoin, to: toCoin, value: fromValue}),
    headers: { 'Content-Type' : 'application/json'},
  });
  const data = yield response.json();
  yield put(setBalancesSuccess(data))
  } catch (error) {
    console.log(error)
    yield put(setBalancesFailure())
  }
}

export function* exchangeHistorySaga(action: any): Generator<any, any, any> {
  try {
    const { regDt, from, fromVal, to, toVal } = action.payload;
    const response = yield fetch('/api/history', {
      method: 'POST',
      body: JSON.stringify({regDt, from, to, fromVal, toVal}),
      headers: { 'Content-Type' : 'application/json' }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = yield response.json();
    const newHistory = {
      regDt: data.regDt,
      from: data.from,
      to: data.to,
      fromVal: data.fromVal,
      toVal: data.toVal
    };
    console.log(newHistory)
    yield put(setHistorySuccess(newHistory))
  } catch (error) {
    console.log(error)
    yield put(setHistoryFailure())
  }
}

const balancesReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case "SET_BALANCES_SUCCESS":
      return {
        ...state,
        ...action.payload,
        status: true
      };
    case "SET_BALANCES_FAILURE":
      return {
        ...state,
        status: false
      };
    case "SET_HISTORY_SUCCESS":
      return {
        ...state,
        historyArray: [ ...state.historyArray, action.payload],
        status: false
      };
    case "SET_HISTORY_FAILURE":
      return {
        ...state,
        status: false
      };
    default:
      return state;
  }
};

export default balancesReducer;
