import { put } from "@redux-saga/core/effects";
import solImg from "../assets/solana.svg";
import ethImg from "../assets/eth.svg";
import bnbImg from "../assets/bnb.svg";
import convertCoin from "../utils/coinConverter";

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
  status: false,
};

export interface todoProps {
  id: number;
}

const options = [
  { coin: solImg, unit: "SOL" },
  { coin: ethImg, unit: "ETH" },
  { coin: bnbImg, unit: "BNB" },
];

export function* exchangeCoinSaga(action: any): Generator<any, any, any> {
  // 환전 하기
  try {
    const { fromCoin, toCoin, fromValue } = action.payload;
    const response = yield fetch("/api/exchange", {
      method: "POST",
      body: JSON.stringify({ from: fromCoin, to: toCoin, value: fromValue }),
      headers: { "Content-Type": "application/json" },
    });
    const data = yield response.json();
    yield put(setBalancesSuccess(data));

    // 날짜 받아와서 주어진 형식대로 보여주기
    const year = `${new Date(data.timestamp).getFullYear()}`;
    const month = `${(new Date(data.timestamp).getMonth() + 1)
      .toString()
      .padStart(2, "0")}`;
    const date = `${new Date(data.timestamp).getDate().toString().padStart(2, "0")}`;
    const AMPM = `${new Date(data.timestamp).getHours() > 12 ? "AM" : "PM"}`;
    const hours = `${(new Date(data.timestamp).getHours() % 12 || 12)
      .toString()
      .padStart(2, "0")}`;
    const minutes = `${new Date(data.timestamp)
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    const regDt = `${year}-${month}-${date}, ${AMPM} ${hours}:${minutes}`;

    const from = data.from
    const to = data.to

    //이미지랑 unit이랑 매칭하기
    const fromImage = options.find((item) => item.unit === from)?.coin;
    const toImage = options.find((item) => item.unit === to)?.coin;

    //코인 단위 변환
    const fromVal = Number(data.value)?.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
    const toVal = convertCoin(data.from, data.to, data.value)?.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

    // 환전한 내역 추가하기
    const response2 = yield fetch("/api/history", {
      method: "POST",
      body: JSON.stringify({ regDt, from, to, fromVal, toVal, fromImage, toImage }),
      headers: { "Content-Type": "application/json" },
    });
    if (!response2.ok) {
      throw new Error(`HTTP error! status: ${response2.status}`);
    }
    const data2 = yield response2.json();
    const newHistory = {
      regDt: data2.regDt,
      from: data2.from,
      to: data2.to,
      fromVal: data2.fromVal,
      toVal: data2.toVal,
      fromImage: fromImage,
      toImage: toImage,
      timestamp: data.timestamp
    };
    yield put(setHistorySuccess(newHistory));
  } catch (error) {
    console.log(error);
    yield put(setBalancesFailure());
  }
}

export const balancesReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case "SET_BALANCES_SUCCESS":
      return {
        ...state,
        ...action.payload,
        status: true,
      };
    case "SET_BALANCES_FAILURE":
      return {
        ...state,
        status: false,
      };
    case "SET_HISTORY_SUCCESS":
      return {
        ...state,
        historyArray: [...state.historyArray, action.payload],
        status: true,
      };
    case "SET_HISTORY_FAILURE":
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
};

export default balancesReducer;
