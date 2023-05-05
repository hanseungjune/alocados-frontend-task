// balancesmodules.js
const SET_BALANCES = 'balances/setBalances';

export const setBalances = (balances:number) => {
  return {
    type: SET_BALANCES,
    payload: balances
  }
}

const initialState = {
  balances: {},
};

export interface todoProps {
  id: number
} 

const balancesReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case "SET_BALANCES":
      return {
        ...state,
        balances: action.payload,
      };
    default:
      return state;
  }
};

export default balancesReducer;