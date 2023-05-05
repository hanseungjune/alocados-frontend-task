// 환전 가능 여부 확인(비율 계산)
export const exchange = (from:any, to:any, amount:any) => {
  let exchangeRate: Record<string, number> = { eth: 0, sol: 0, bnb: 0}
  if (from === 'eth') {
    exchangeRate = {
      eth: 1,
      sol: 0.01,
      bnb: 0.02,
    };
  }  else if (from === 'sol') {
    exchangeRate = {
      eth: 100,
      sol: 1,
      bnb: 2,
    };
  } else if (from === 'bnb') {
    exchangeRate = {
      eth: 50,
      sol: 0.5,
      bnb: 1
    };
  }

  let rate = exchangeRate[to] && exchangeRate[from] ? exchangeRate[from] / exchangeRate[to]  : 0;
  return amount * rate;
}

const convertCoin = (from = "eth", to = "sol", amount = 2000) => {
  let result = exchange(from, to, amount);
  return result;
}

export default convertCoin