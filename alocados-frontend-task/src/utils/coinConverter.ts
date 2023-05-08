// 각 코인별 상대 대비 환전 비율 및 금액 자동 계산 유틸 구현해놓기
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

// 결과 로직
const convertCoin = (from = "ETH", to = "SOL", amount = 2000) => {
  let result = exchange(from, to, amount);
  return result;
}

export default convertCoin