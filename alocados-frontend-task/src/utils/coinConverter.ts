// 환전 가능 여부 확인(비율 계산)
export const exchange = (from:any, to:any, amount:any) => {
  let exchangeRate: Record<string, number> = { ETH: 0, SOL: 0, BNB: 0}
  if (from === 'ETH') {
    exchangeRate = {
      ETH: 1,
      SOL: 0.01,
      BNB: 0.02,
    };
  }  else if (from === 'SOL') {
    exchangeRate = {
      ETH: 100,
      SOL: 1,
      BNB: 2,
    };
  } else if (from === 'BNB') {
    exchangeRate = {
      ETH: 50,
      SOL: 0.5,
      BNB: 1
    };
  }

  let rate = exchangeRate[to] && exchangeRate[from] ? exchangeRate[from] / exchangeRate[to]  : 0;
  return amount * rate;
}

const convertCoin = (from = "ETH", to = "SOL", amount = 2000) => {
  let result = exchange(from, to, amount);
  return result;
}

export default convertCoin